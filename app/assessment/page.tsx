import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clapperboard, FileText, Mic2, PlayCircle, Sparkles } from "lucide-react";
import { coreSkills } from "@/data/pilot";

export const metadata: Metadata = {
  title: "Career Assessment & Video Portfolio",
  description:
    "Demonstrate your communication and sales skills through practical tasks, reviewed evidence and a portfolio you can share.",
};

const stages = [
  {
    number: "01",
    title: "Understand your starting point",
    body: "Begin with a short baseline task. Show how you communicate today, without trying to sound perfect.",
    icon: Mic2,
  },
  {
    number: "02",
    title: "Practise real situations",
    body: "Work through practical prompts inspired by interviews, presentations and customer conversations.",
    icon: PlayCircle,
  },
  {
    number: "03",
    title: "Review and improve",
    body: "Use specific feedback to identify what to keep, what to change and what to practise next.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Build your proof",
    body: "Collect selected recordings and work samples into a portfolio that makes your skills easier to evaluate.",
    icon: Clapperboard,
  },
];

const portfolioItems = [
  { label: "Speaking sample", detail: "A short introduction and a clear explanation of an idea.", type: "VIDEO" },
  { label: "Sales conversation", detail: "A discovery roleplay showing listening, questions and response.", type: "VIDEO" },
  { label: "Written communication", detail: "A professional email or follow-up built around a real brief.", type: "DOCUMENT" },
];

export default function AssessmentPage() {
  return (
    <div className="bg-canvas text-body">
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 size-[34rem] rounded-full bg-sage/50 blur-3xl" />
        <div className="container-page relative grid gap-14 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
          <div className="max-w-3xl">
            <p className="label-xs mb-6 text-neon-text">GROWTHYARI · CAREER ASSESSMENT</p>
            <h1 className="max-w-3xl text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Don't just tell people what you can do. <em className="font-normal text-neon-text">Show them.</em>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-body">
              Practise the conversations that matter, understand where you can improve, and build a body of work that makes your skills visible.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/register" className="inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-fg transition hover:-translate-y-0.5 hover:bg-primary-hover">
                Start your assessment <ArrowRight className="size-4" />
              </Link>
              <a href="#how-it-works" className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-semibold text-ink transition hover:text-neon-text">
                See how it works <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="mt-5 text-xs leading-6 text-muted">A starting point for practice and feedback — not a job or placement guarantee.</p>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rotate-2 rounded-lg border border-line bg-surface-3/70" />
            <div className="relative border border-card-line bg-card p-5 shadow-lift sm:p-7">
              <div className="flex items-center justify-between border-b border-card-line pb-4">
                <span className="label-xs text-card-muted">YOUR PROOF FILE</span>
                <span className="rounded-full border border-card-line px-3 py-1 text-[10px] font-medium tracking-widest text-card-muted">IN PROGRESS</span>
              </div>
              <div className="py-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid size-12 place-items-center rounded-full bg-sage text-forest"><Mic2 className="size-5" /></div>
                  <div>
                    <p className="text-sm font-semibold text-card-ink">Communication baseline</p>
                    <p className="mt-1 text-xs text-card-muted">A first recording to build from</p>
                  </div>
                </div>
                <div className="rounded-sm border border-card-line bg-card-soft p-4">
                  <div className="mb-3 flex items-center justify-between text-xs text-card-muted"><span>Practice evidence</span><span>01 / 04</span></div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-sand"><div className="h-full w-1/4 rounded-full bg-forest" /></div>
                  <div className="mt-5 flex items-center gap-1.5" aria-label="Audio waveform illustration">
                    {Array.from({ length: 38 }, (_, index) => (
                      <span key={index} className="w-1 rounded-full bg-forest/70" style={{ height: `${10 + ((index * 17 + 11) % 27)}px` }} />
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-5 text-card-muted">One recording is a starting point. Improvement becomes visible when you practise, review and try again.</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-card-line pt-4">
                <span className="text-xs text-card-muted">Evidence over empty claims.</span>
                <Sparkles className="size-4 text-card-neon-text" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-pad">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="label-xs text-neon-text">THE PROCESS</p>
            <h2 className="mt-4 text-4xl leading-tight text-ink sm:text-5xl">A clearer way to see what you can do.</h2>
            <p className="mt-5 leading-7 text-body">The point is not to collect scores. It is to create useful evidence, act on feedback and see the difference between your first attempt and your next one.</p>
          </div>
          <div className="mt-12 grid gap-0 border-y border-line sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <article key={stage.number} className="border-b border-line py-7 pr-6 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8 lg:border-b-0 lg:border-r lg:py-9 lg:pr-7 lg:even:pl-7 lg:last:border-r-0">
                  <div className="flex items-center justify-between">
                    <span className="label-xs text-neon-text">{stage.number}</span>
                    <Icon className="size-5 text-forest" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-7 text-2xl text-ink">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-body">{stage.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-3">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="label-xs text-neon-text">SKILLS YOU CAN DEMONSTRATE</p>
            <h2 className="mt-4 text-4xl leading-tight text-ink sm:text-5xl">Build the skill. Keep the evidence.</h2>
            <p className="mt-5 max-w-md leading-7 text-body">The first assessment experience is grounded in the ten core skills already defined in GrowthYari's Sales & Communication pilot.</p>
            <Link href="/programs" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-neon-text">Explore the program <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {coreSkills.map((skill, index) => (
              <div key={skill.title} className="flex gap-4 border border-card-line bg-card p-5">
                <span className="label-xs pt-1 text-neon-text">{String(index + 1).padStart(2, "0")}</span>
                <div><h3 className="font-semibold text-card-ink">{skill.title}</h3><p className="mt-1.5 text-sm leading-6 text-card-body">{skill.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="label-xs text-neon-text">YOUR VIDEO PORTFOLIO</p>
              <h2 className="mt-4 text-4xl leading-tight text-ink sm:text-5xl">A portfolio with something real behind it.</h2>
              <p className="mt-5 leading-7 text-body">Choose the strongest pieces of work from your practice. Each item should show a skill, a real attempt and what you learned from it.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted"><FileText className="size-4" /> Illustrative portfolio structure</div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <article key={item.label} className="group border border-card-line bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="mb-8 flex aspect-[16/9] items-center justify-center border border-line bg-card-soft">
                  {index === 2 ? <FileText className="size-9 text-forest/70" strokeWidth={1.2} /> : <PlayCircle className="size-10 text-forest/70" strokeWidth={1.2} />}
                </div>
                <p className="label-xs text-neon-text">{item.type}</p>
                <h3 className="mt-3 text-2xl text-card-ink">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-card-body">{item.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-6 text-muted">Recording, AI review, storage, editing and reel export are not enabled by this introductory page. They require connected backend services and explicit learner consent.</p>
        </div>
      </section>

      <section className="on-forest section-pad">
        <div className="container-page grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-2xl">
            <p className="label-xs text-neon-text">START WITH ONE HONEST ATTEMPT</p>
            <h2 className="mt-4 text-4xl leading-tight text-ink sm:text-5xl">Your next opportunity deserves more than a better-looking CV.</h2>
            <p className="mt-5 leading-7 text-body">Start by understanding where you are today. Then build the evidence that shows where you can go next.</p>
          </div>
          <Link href="/register" className="inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-6 py-4 text-sm font-semibold text-primary-fg transition hover:-translate-y-0.5 hover:bg-primary-hover">Begin your journey <ArrowRight className="size-4" /></Link>
        </div>
      </section>
    </div>
  );
}
