import { SectionHead } from "@/components/ui/SectionHead";
import { processSteps } from "@/lib/services";

export function ProcessSection({ index = "05", id = "process-title" }: { index?: string; id?: string }) {
  return (
    <section className="section shell" aria-labelledby={id}>
      <SectionHead index={index} eyebrow="Our approach" id={id} lines={["FIVE STEPS.", "ONE CLEAR PATH."]}>
        <p>A simple, honest process — so you always know where a project stands and what happens next.</p>
      </SectionHead>
      <ol className="process">
        {processSteps.map((s) => (
          <li key={s.n} className="process__step" data-reveal="">
            <span className="process__n">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
