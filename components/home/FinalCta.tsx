import { Lines } from "@/components/ui/Lines";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

interface Props {
  lines?: string[];
  text?: string;
  label?: string;
  id?: string;
}

export function FinalCta({
  lines = ["YOUR NEXT MOVE", "STARTS HERE."],
  text = "Tell us what you’re building. Let’s create something worth noticing.",
  label = siteConfig.cta.label,
  id = "cta-title",
}: Props) {
  const { email } = siteConfig.contact;
  return (
    <section className="cta" aria-labelledby={id}>
      <div className="shell cta__inner">
        <Lines id={id} className="display display--mega" lines={lines} />
        <div className="cta__row" data-reveal="">
          <p className="lede">{text}</p>
          <div className="btn-row">
            <ButtonLink href="/contact">{label}</ButtonLink>
            {email && (
              <ButtonLink href={`mailto:${email}`} variant="ghost">
                {email}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
