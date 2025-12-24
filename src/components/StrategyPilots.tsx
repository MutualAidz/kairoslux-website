/**
 * 1) Replace the entire contents of: src/components/StrategyPilots.tsx
 * 2) This implements Version A:
 *    - Horizontal stepper (3 steps)
 *    - Single swapping panel by default (reduces vertical bloat)
 *    - "Show all steps" toggle (progressive disclosure)
 *    - Hash-aware navigation: #discern-clarify, #design-decide, #mission-impact-work
 *    - Scroll-spy highlighting when "Show all steps" is enabled
 *
 * NOTES:
 * - This intentionally avoids duplicating the full "Mission work domains" cards again in Step 3;
 *   it references them compactly instead (names only).
 * - If your Navigation dropdown links to those hashes, they will still work.
 */

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";

type Step = {
  id: "discern-clarify" | "design-decide" | "mission-impact";
  stepLabel: string;
  title: string;
  tagline: string;
  summary: string;
  body?: string;
  questions: string[];
  modules: Array<{
    title: string;
    description: string;
    meta?: string;
    footnote?: string;
    bullets?: string[];
    accent?: boolean;
  }>;
  outputs: Array<{
    title: string;
    description: string;
    bullets?: string[];
  }>;
  extra?: ReactNode;
};

function Card(props: {
  title: string;
  description: string;
  footnote?: string;
  children?: ReactNode;
  accent?: boolean;
}) {
  const { title, description, footnote, children, accent } = props;

  return (
    <div
      className={[
        "rounded-2xl border bg-white p-6 shadow-sm",
        accent ? "border-[#C9A227] ring-1 ring-[#C9A227]/40" : "border-slate-200",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <h4 className="font-serif text-2xl text-slate-900">{title}</h4>
      </div>

      <p className="mt-3 text-slate-700">{description}</p>

      {children ? <div className="mt-4 text-slate-700">{children}</div> : null}

      {footnote ? (
        <p className="mt-4 text-sm italic text-slate-500">{footnote}</p>
      ) : null}
    </div>
  );
}

function StepButton(props: {
  step: Step;
  active: boolean;
  onSelect: (id: Step["id"]) => void;
}) {
  const { step, active, onSelect } = props;

  return (
    <button
      type="button"
      onClick={() => onSelect(step.id)}
      aria-current={active ? "step" : undefined}
      className={[
        "group w-full rounded-2xl border bg-white/95 p-5 text-left text-slate-900 shadow-sm transition",
        active
          ? "border-[#C9A227] ring-1 ring-[#C9A227]/50"
          : "border-slate-200 hover:border-slate-300",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {step.stepLabel}
          </div>
          <div className="mt-1 font-serif text-2xl">{step.title}</div>
          <p className="mt-2 text-sm text-slate-700">{step.tagline}</p>
        </div>
        <div
          className={[
            "mt-1 text-2xl transition",
            active ? "text-[#C9A227]" : "text-slate-400 group-hover:text-[#C9A227]",
          ].join(" ")}
          aria-hidden="true"
        >
          →
        </div>
      </div>
    </button>
  );
}

function StepPanel(props: {
  step: Step;
  showAll: boolean;
  isActive: boolean;
}) {
  const { step, showAll, isActive } = props;
  const [modulesOpen, setModulesOpen] = useState(false);
  const [outputsOpen, setOutputsOpen] = useState(false);
  const modulesId = useId();
  const outputsId = useId();

  return (
    <section
      id={step.id}
      className={[
        "scroll-mt-28",
        showAll ? "" : "", // reserved for future tweaks
      ].join(" ")}
      aria-label={step.title}
    >
      <div
        className={[
          "rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10",
          showAll && !isActive ? "opacity-90" : "opacity-100",
        ].join(" ")}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              {step.stepLabel}
            </div>
            <h3 className="mt-2 font-serif text-4xl text-white md:text-5xl">
              {step.title}
            </h3>
          </div>

          <p className="max-w-xl text-lg text-slate-200">{step.tagline}</p>
        </div>

        <p className="mt-6 max-w-3xl text-slate-200">{step.summary}</p>

        {step.body ? (
          <p className="mt-4 max-w-3xl text-slate-200">{step.body}</p>
        ) : null}

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Guiding questions
            </div>
            <ul className="space-y-3 text-sm text-slate-100">
              {step.questions.map((q) => (
                <li key={q}>• {q}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setModulesOpen((v) => !v)}
              aria-expanded={modulesOpen}
              aria-controls={`${modulesId}-panel`}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Common modules
            </button>
            {modulesOpen ? (
              <div
                id={`${modulesId}-panel`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  {step.modules.map((m) => (
                    <Card
                      key={m.title}
                      title={m.title}
                      description={m.description}
                      footnote={m.footnote}
                      accent={m.accent}
                    >
                      {m.bullets ? (
                        <ul className="mt-3 list-disc space-y-2 pl-5">
                          {m.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      ) : null}
                    </Card>
                  ))}
                </div>
              </div>
            ) : null}

            <button
              type="button"
              onClick={() => setOutputsOpen((v) => !v)}
              aria-expanded={outputsOpen}
              aria-controls={`${outputsId}-panel`}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left text-sm font-semibold text-white transition hover:bg-white/10"
            >
              What you receive
            </button>
            {outputsOpen ? (
              <div
                id={`${outputsId}-panel`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  {step.outputs.map((o) => (
                    <Card key={o.title} title={o.title} description={o.description}>
                      {o.bullets ? (
                        <ul className="mt-3 list-disc space-y-2 pl-5">
                          {o.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      ) : null}
                    </Card>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {step.extra ? <div className="mt-10 space-y-6">{step.extra}</div> : null}
      </div>
    </section>
  );
}

export function StrategyPilots() {
  const rootRef = useRef<HTMLElement | null>(null);

  const steps = useMemo<Step[]>(
    () => [
      {
        id: "discern-clarify",
        stepLabel: "Step 1",
        title: "Discern by Listening",
        tagline: "Shared language and grounded priorities.",
        summary:
          "For leadership teams who need to name what is happening, what they hope for, and what they refuse to sacrifice.",
        body:
          "Everyone arrives at AI from a different place. We start by listening for mission, pressures, and constraints—then recommend the smallest next step that brings clarity without hype or vendor capture.",
        questions: [
          "What is our mission asking of us right now?",
          "What pressures, hopes, and fears are shaping our choices?",
          "What do we refuse to sacrifice as we adapt?",
          "What would a faithful next step look like—for people and those we serve?",
        ],
        modules: [
          {
            title: "Intro call (free)",
            description:
              "A short first conversation to understand your context and name what would make the next step clearer.",
            footnote: "No prep required.",
            accent: true,
          },
          {
            title: "AI discernment session (60–90 min)",
            description:
              "A focused conversation with key decision-makers to surface pressures, hopes, constraints, and the mission logic underneath them.",
            footnote: "Leads to a Kairos Note.",
          },
          {
            title: "CST & AI foundations briefing (for boards or teams)",
            description:
              "Build shared language on risks, possibilities, and CST lenses—without hype or blanket rejection.",
          },
          {
            title: "CST–AI lab session (by request)",
            description:
              "Deeper theological grounding and practical imagination—connecting CST, real workflows, and responsible AI use.",
          },
        ],
        outputs: [
          {
            title: "Kairos Note",
            description: "Concise written summary of your priorities, key pressures, and recommended next steps.",
          },
          {
            title: "Board-ready discernment dossier",
            description: "Board-ready memo with decision framing, risks/benefits, and a recommended path.",
            bullets: [
              "Decision framing and guardrails",
              "“What would need to be true” assumptions",
              'A near-term "start here" recommendation',
            ],
          },
        ],
      },
      {
        id: "design-decide",
        stepLabel: "Step 2",
        title: "Discern by Designing",
        tagline: "Focused options, CST guardrails, and clear choices.",
        summary:
          "Turn shared understanding into concrete options—with CST grounded guardrails and a credible starting point.",
        body:
          "When there is enough shared understanding, we move into structured design work that maps real workflows, data realities, and decision points—so leadership can choose deliberately.",
        questions: [
          "Which workflow or decision is the right starting point—and why?",
          "What are our credible options—and what are the risks?",
          "What CST guardrails must shape our approach?",
          "What data/readiness realities shape what's feasible right now?",
        ],
        modules: [
          {
            title: "Discernment Sprint (2–3 weeks)",
            description:
              "Focused interviews, workflow/data review, and working sessions to propose 1–2 high‑leverage workflows with CST-grounded guardrails.",
            bullets: [
              "1–2 credible workflow starting points",
              "CST‑grounded guardrails for governance",
              'A recommended "start here" path',
            ],
          },
          {
            title: "Deep Discernment Review (for larger institutions)",
            description:
              "For provinces, universities, networks, or multi-stakeholder systems: map mission, risk, and opportunity across domains; deliver a short roadmap of where to start.",
            bullets: [
              "Scenarios you can take to leadership/governance",
              "Risks, tradeoffs, and prerequisites",
              "A phased roadmap toward pilots",
            ],
          },
        ],
        outputs: [
          {
            title: "Pilot-ready options",
            description:
              "1–2 credible starting points (workflows/decisions) with rationale, risks, and CST-grounded guardrails.",
          },
          {
            title: "First pilot plan",
            description:
              "A near-term plan: scope, success criteria, governance questions, and what to learn before expanding.",
          },
        ],
      },
      {
        id: "mission-impact",
        stepLabel: "Step 3",
        title: "Discern by Doing",
        tagline: "Build and pilot the plan with your teams.",
        summary:
          "Workflows and projects that put discernment into practice.",
        body:
          "Once a direction is chosen, we collaborate on carefully scoped workflows and projects—sometimes pilots, sometimes small internal tools—that test what's possible without over‑engineering.",
        questions: [
          "What can we pilot safely and quickly (without over-engineering)?",
          "What are we learning—and what must change?",
          "How will we measure mission-aligned impact (not just AI usage)?",
          "What capabilities are needed to sustain this faithfully?",
        ],
        modules: [
          {
            title: "Scoped pilots",
            description:
              "Small, bounded pilots that reduce burden, improve quality, and build momentum—so you can learn quickly before scaling.",
          },
          {
            title: "Internal tools & prototypes",
            description:
              "Lightweight tools that support teams where the work is already happening—without locking you into a vendor or pretending automation replaces people.",
          },
        ],
        outputs: [
          {
            title: "A working pilot (or tested workflow)",
            description:
              "Something real in motion—built small, tested responsibly, and evaluated against mission-aligned criteria.",
          },
          {
            title: "Lessons learned + next-step recommendations",
            description:
              "What worked, what didn't, and what should be true before scaling—captured in a form leadership can use.",
          },
        ],
        extra: (
          <>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                Areas we’re especially drawn to (examples; not rigid verticals):
              </div>
              <ul className="mt-3 space-y-2 text-slate-100">
                <li>• Relationship & capital intelligence (donors, investors, stakeholders).</li>
                <li>• Humanitarian / social ministries (social services, health, relief, education).</li>
                <li>• Universities & formation (Catholic universities, houses of formation, networks).</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                Where pilots tend to land
              </div>
              <p className="mt-3 text-slate-200">
                Typically one or two of the mission work domains you saw above:
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Stakeholder & relationship operations",
                  "Reporting & narrative throughput",
                  "Operational visibility",
                  "Tradition-aware decision support",
                  "Data strategy & readiness",
                  "Institutional memory",
                ].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-sm text-slate-200"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </>
        ),
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState<Step["id"]>(steps[0].id);
  const [showAll, setShowAll] = useState(false);

  // Helper: set URL hash without "jumping"
  const setHashSilently = (id: Step["id"]) => {
    try {
      window.history.replaceState(null, "", `#${id}`);
    } catch {
      // Fallback: may scroll in some browsers, but keeps behavior working.
      window.location.hash = id;
    }
  };

  const selectStep = (id: Step["id"]) => {
    setActiveId(id);
    setHashSilently(id);

    if (showAll) {
      // If all panels are shown, scroll to the selected panel.
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // If single panel view, keep the user anchored at the stepper.
      rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Hash-aware navigation: if the URL hash matches a step (including legacy aliases), select it.
  useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash.replace("#", "");
      if (!raw) return;

      const normalized = (raw === "mission-impact-work" ? "mission-impact" : raw) as Step["id"];

      const match = steps.find((s) => s.id === normalized);
      if (!match) return;

      setActiveId(match.id);

      // If showAll is enabled, scroll to the relevant panel.
      // If not, just keep the correct panel selected.
      if (showAll) {
        requestAnimationFrame(() => {
          document.getElementById(match.id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [steps, showAll]);

  // Scroll-spy highlighting when showAll is enabled
  useEffect(() => {
    if (!showAll) return;

    const targets = steps
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (!visible.length) return;
        const id = (visible[0].target as HTMLElement).id as Step["id"];
        setActiveId(id);
      },
      {
        root: null,
        // When ~40% of a section is visible, we consider it "active"
        threshold: [0.25, 0.4, 0.6],
      }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [showAll, steps]);

  const activeStep = steps.find((s) => s.id === activeId) ?? steps[0];

  return (
    <section
      ref={rootRef}
      className="bg-[#071a33] py-20 text-white"
      aria-label="Three steps of discernment"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
          This work unfolds through three steps of discernment
        </div>

        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-4xl md:text-6xl">
            A shared arc—toward faithful action
          </h2>

          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10"
            aria-pressed={showAll}
          >
            {showAll ? "Show one step" : "Show all steps"}
          </button>
        </div>

        <p className="mt-5 max-w-3xl text-slate-200">
          All engagements begin bounded—so we can learn fast, build trust, and
          discern what a longer partnership should look like{" "}
          <span className="text-slate-300">(without over‑promising).</span>
        </p>

        <nav
          className={[
            "mt-10",
            showAll ? "sticky top-20 z-10 rounded-3xl bg-[#071a33]/90 pb-4 pt-2 backdrop-blur" : "",
          ].join(" ")}
          aria-label="Discernment step navigation"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <StepButton
                key={s.id}
                step={s}
                active={s.id === activeId}
                onSelect={selectStep}
              />
            ))}
          </div>
        </nav>

        <div className="mt-10 space-y-10">
          {showAll ? (
            steps.map((s) => (
              <StepPanel
                key={s.id}
                step={s}
                showAll={true}
                isActive={s.id === activeId}
              />
            ))
          ) : (
            <StepPanel step={activeStep} showAll={false} isActive={true} />
          )}
        </div>
      </div>
    </section>
  );
}

export default StrategyPilots;
