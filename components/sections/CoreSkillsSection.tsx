import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coreSkills } from "@/data/pilot";

/** The ten core skills the batch develops, as a numbered grid. */
export function CoreSkillsSection() {
  return (
    <section className="section-pad bg-surface" id="skills">
      <div className="container-page">
        <SectionHeading
          eyebrow="Core skills"
          title="Ten skills you actually practise."
          intro="Each one is taught, then used in a real scenario, then reviewed. None of them are learned by watching."
        />

        <ul className="mt-11 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {coreSkills.map((skill, index) => (
            <Reveal
              as="li"
              key={skill.title}
              delay={index * 40}
              className="border-t border-line pt-5"
            >
              <span className="font-mono text-[12px] font-medium tracking-[0.16em] text-lime-text">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.02em] text-ink">
                {skill.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-7 text-body">
                {skill.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
