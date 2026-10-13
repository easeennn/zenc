"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  emptyInquiry,
  inquiryServices,
  validateInquiry,
  type InquiryErrors,
  type InquiryInput,
} from "@/lib/contact";
import { siteConfig } from "@/lib/site-config";
import { Arrow } from "@/components/ui/Arrow";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Project inquiry form. Validation is shared with the API route. The UI only
 * shows success when /api/contact confirms delivery — if no backend is wired
 * (CONTACT_WEBHOOK_URL unset) it says so and the message is NOT sent.
 */
export function ContactForm({ preselect }: { preselect?: string }) {
  const uid = useId();
  const [values, setValues] = useState<InquiryInput>({
    ...emptyInquiry,
    services: preselect ? [preselect] : [],
  });
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [failure, setFailure] = useState<string>("");
  const [attempt, setAttempt] = useState(0);
  const form = useRef<HTMLFormElement>(null);
  const banner = useRef<HTMLDivElement>(null);

  const id = (f: string) => `${uid}-${f}`;
  const set = <K extends keyof InquiryInput>(k: K, v: InquiryInput[K]) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  // Move focus to the first invalid control after a failed submit.
  useEffect(() => {
    if (!attempt) return;
    form.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
  }, [attempt]);

  // Announce result by moving focus to the status banner.
  useEffect(() => {
    if (status === "success" || status === "error") banner.current?.focus();
  }, [status]);

  const toggleService = (s: string) =>
    set("services", values.services.includes(s) ? values.services.filter((x) => x !== s) : [...values.services, s]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    const check = validateInquiry(values);
    if (!check.ok) {
      setErrors(check.errors);
      setAttempt((n) => n + 1);
      return;
    }
    setErrors({});
    setStatus("submitting");
    setFailure("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; code?: string; errors?: InquiryErrors };

      if (res.ok && json.ok) {
        setStatus("success");
        return;
      }
      if (res.status === 422 && json.errors) {
        setErrors(json.errors);
        setAttempt((n) => n + 1);
        setStatus("idle");
        return;
      }
      setFailure(
        json.code === "not_configured"
          ? "Your message was not sent: inquiry delivery isn’t connected on this site yet."
          : "Something went wrong and your message was not sent. Please try again in a moment.",
      );
      setStatus("error");
    } catch {
      setFailure("We couldn’t reach the server, so your message was not sent. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" ref={banner} tabIndex={-1} role="status">
        <p className="eyebrow">
          <span className="eyebrow__idx">✓</span>Inquiry received
        </p>
        <h2 className="display display--l">THANK YOU.</h2>
        <p className="lede">We&rsquo;ve received your brief and will be in touch about next steps.</p>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            setValues(emptyInquiry);
            setStatus("idle");
          }}
        >
          <span className="btn__label">Send another inquiry</span>
        </button>
      </div>
    );
  }

  const err = (k: keyof InquiryInput) => errors[k];
  const field = (k: keyof InquiryInput) => ({
    "aria-invalid": err(k) ? (true as const) : undefined,
    "aria-describedby": err(k) ? id(`${k}-err`) : undefined,
  });

  return (
    <form ref={form} onSubmit={onSubmit} noValidate className="form" aria-describedby={status === "error" ? id("banner") : undefined}>
      {status === "error" && (
        <div ref={banner} tabIndex={-1} id={id("banner")} role="alert" className="form-alert">
          <strong>Message not sent.</strong> {failure}
          {siteConfig.contact.email && (
            <>
              {" "}
              You can email us at <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
            </>
          )}
        </div>
      )}

      <div className="form__grid">
        <div className="fld">
          <label htmlFor={id("name")}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input id={id("name")} name="name" autoComplete="name" value={values.name} onChange={(e) => set("name", e.target.value)} required {...field("name")} />
          {err("name") && <p id={id("name-err")} className="fld__err">{err("name")}</p>}
        </div>

        <div className="fld">
          <label htmlFor={id("email")}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input id={id("email")} name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => set("email", e.target.value)} required {...field("email")} />
          {err("email") && <p id={id("email-err")} className="fld__err">{err("email")}</p>}
        </div>

        <div className="fld fld--full">
          <label htmlFor={id("business")}>
            Business or brand <span className="fld__opt">(optional)</span>
          </label>
          <input id={id("business")} name="business" autoComplete="organization" value={values.business} onChange={(e) => set("business", e.target.value)} />
        </div>
      </div>

      <fieldset className="fld fld--full chipset" aria-describedby={err("services") ? id("services-err") : undefined}>
        <legend>
          Services needed <span aria-hidden="true">*</span> <span className="fld__opt">(choose any)</span>
        </legend>
        <div className="chipset__row">
          {inquiryServices.map((s) => {
            const checked = values.services.includes(s);
            return (
              <label key={s} className={`pick${checked ? " pick--on" : ""}`}>
                <input type="checkbox" name="services" value={s} checked={checked} onChange={() => toggleService(s)} {...(err("services") ? { "aria-invalid": true as const } : {})} />
                <span>{s}</span>
              </label>
            );
          })}
        </div>
        {err("services") && <p id={id("services-err")} className="fld__err">{err("services")}</p>}
      </fieldset>

      <div className="form__grid">
        <div className="fld">
          <label htmlFor={id("budget")}>
            Approximate budget <span className="fld__opt">(optional)</span>
          </label>
          <select id={id("budget")} name="budget" value={values.budget} onChange={(e) => set("budget", e.target.value)}>
            <option value="">Select a range</option>
            {siteConfig.budgetBands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="fld">
          <label htmlFor={id("timeline")}>
            Desired timeline <span className="fld__opt">(optional)</span>
          </label>
          <select id={id("timeline")} name="timeline" value={values.timeline} onChange={(e) => set("timeline", e.target.value)}>
            <option value="">Select a timeline</option>
            {siteConfig.timelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="fld fld--full">
        <label htmlFor={id("message")}>
          Tell us about the project <span aria-hidden="true">*</span>
        </label>
        <textarea id={id("message")} name="message" rows={6} value={values.message} onChange={(e) => set("message", e.target.value)} required {...field("message")} />
        {err("message") && <p id={id("message-err")} className="fld__err">{err("message")}</p>}
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots fill it. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => set("website", e.target.value)} />
      </div>

      <div className="form__foot">
        <button type="submit" className="btn btn--solid" disabled={status === "submitting"} aria-busy={status === "submitting"}>
          <span className="btn__label">{status === "submitting" ? "Sending…" : "Send inquiry"}</span>
          <span className="btn__arrow"><Arrow /></span>
        </button>
        <p className="note">Fields marked * are required. We only use your details to respond to your inquiry.</p>
      </div>
    </form>
  );
}
