import { useEffect, useMemo, useRef, useState } from "react";

type StepKey = "discern-clarify" | "design-decide" | "mission-impact";

type Step = {
  key: StepKey;
  pathLabel: string;
  legacyTitle: string;
  stepLabel: string;
  stepTitle: string;
  oneLiner: string;
  practiceBadges: string[];
  questions: string[];
  modules: Array<{ title: string; meta?: string; body: string }>;
  outputs: Array<{ title: string; body: string }>;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#f5c565]/60 bg-transparent px-3 py-1 text-xs font-semibold text-[#f5c565]">
      {children}
    </span>
  );
}

function DetailsBlock({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="rounded-2xl border border-white/10 bg-white/5 p-5" open={defaultOpen}>
      <summary className="cursor-pointer list-none text-sm font-semibold text-white">
        {title}
      </summary>
      <div className="mt-4 text-sm text-white/85">{children}</div>
    </details>
  );
}

export default function DiscernmentSteps() {
  const steps: Step[] = useMemo(
    () => [
      {
        key: "discern-clarify",
        pathLabel: "Path 1",
        legacyTitle: "Discern & Clarify",
        stepLabel: "Step 1",
        stepTitle: "Discern by Listening",
        oneLiner:
          "For leadership teams who need to name what is happening, what they hope for, and what they refuse to sacrifice.",
        practiceBadges: ["Listen for mission"],
        questions: [
          "What is our mission asking of us right now?",
          "What pressures, hopes, and fears are shaping our choices?",
          "What do we refuse to sacrifice as we adapt?",
          "What would a faithful next step look like—for people and those you serve?",
        ],
        modules: [
          {
            title: "Intro call (free)",
            meta: "30–45 min",
            body:
              "A first conversation to understand your context and clarify what would make the next step clearer. If there's a fit, we'll recommend a bounded next engagement.",
          },
          {
            title: "AI Discernment Call → Kairos Note",
            meta: "60–90 min",
            body:
              "A focused working session with key decision‑makers to surface pressures, hopes, constraints, current initiatives, and the mission logic underneath them.",
          },
          {
            title: "CST & AI Foundations Seminar",
            meta: "2–3 hours",
            body:
              "A facilitated session for boards or leadership teams to build shared language: real risks, real possibilities, and CST lenses for thinking without hype or blanket rejection.",
          },
          {
            title: "CST–AI Lab (by request)",
            meta: "Format varies",
            body:
              "For organisations that want deeper theological grounding and practical imagination together—connecting CST, real workflows, and responsible AI use.",
          },
        ],
        outputs: [
          {
            title: "Kairos Note",
            body:
              "A concise written summary: what we heard, how CST frames it, and a recommended next step.",
          },
          {
            title: "Board‑ready Discernment Dossier",
            body:
              "A board‑ready memo that translates discernment into governance: context, credible options, key risks/tradeoffs, and a recommended path forward.",
          },
        ],
      },
      {
        key: "design-decide",
        pathLabel: "Path 2",
        legacyTitle: "Design & Decide",
        stepLabel: "Step 2",
        stepTitle: "Discern by Designing",
        oneLiner:
          "For leadership teams who need to turn mission priorities into options, guardrails, and a pilot plan.",
        practiceBadges: ["Map the work", "Let CST guide choices"],
        questions: [
          "Which workflow or decision is the right starting point—and why?",
          "What are our credible options—and what are the risks?",
          "What CST guardrails must shape our approach?",
          "What data/readiness realities shape what's feasible right now?",
        ],
        modules: [
          {
            title: "Discernment Sprint",
            meta: "2–3 weeks",
            body:
              "A light-touch engagement that maps a workflow, identifies leverage points, defines CST-aligned guardrails, and outlines 2–3 credible options.",
          },
          {
            title: "Deep Discernment Review (4–6 weeks)",
            body:
              "A deeper engagement that includes interviews, artifact review, a data readiness assessment, and governance guardrails—resulting in a board-ready memo and pilot plan.",
          },
          {
            title: "Decision design workshops (by request)",
            body:
              "Targeted sessions to translate principles into governance questions, operating guardrails, and decision frames leaders can actually use.",
          },
        ],
        outputs: [
          {
            title: "Pilot-ready options (decision memo)",
            body:
              "A clear set of options with tradeoffs, risks, and benefits—plus a recommended path.",
            bullets: [
              "Decision framing and CST guardrails",
              "Credible options with tradeoffs",
              "Recommendation for a first pilot",
            ],
          },
          {
            title: "First pilot plan",
            body:
              "Scope, success measures, data/security requirements, and a governance checklist—so you can move carefully.",
            bullets: [
              "Pilot scope + success measures",
              "Data/security requirements",
              "Governance checklist",
            ],
          },
        ],
      },
      {
        key: "mission-impact",
        pathLabel: "Path 3",
        legacyTitle: "Mission Impact Work",
        stepLabel: "Step 3",
        stepTitle: "Discern by Doing",
        oneLiner:
          "We collaborate on carefully scoped pilots and prototypes—learning by building, without over‑engineering.",
        practiceBadges: ["Design high‑leverage changes"],
        questions: [
          "What can we pilot safely and quickly (without over‑engineering)?",
          "What are we learning—and what must change?",
          "How will we measure mission‑aligned impact (not just AI usage)?",
          "What capabilities are needed to sustain this faithfully?",
        ],
        modules: [
          {
            title: "Scoped pilots & prototypes",
            meta: "Bounded engagements",
            body:
              "Small workflow pilots or internal tools built with your teams—aimed at reducing burden and strengthening mission in real operating conditions.",
          },
          {
            title: "Learning partnerships",
            body:
              "Documentation, training, and governance patterns so the institution can carry the work forward with dignity and agency.",
          },
        ],
        outputs: [
          {
            title: "A working pilot (or tested workflow)",
            body:
              "Something real in motion—built small, tested responsibly, and evaluated against mission‑aligned criteria.",
          },
          {
            title: "Lessons learned + next‑step recommendations",
            body:
              "What worked, what didn't, and what should be true before scaling—captured in a form leadership can use.",
          },
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState<StepKey>("discern-clarify");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash.replace("#", "");
      if (h === "discern-clarify") setActive("discern-clarify");
      if (h === "design-decide") setActive("design-decide");
      if (h === "mission-impact" || h === "mission-impact-work") setActive("mission-impact");
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const panelRefs = useRef<Record<StepKey, HTMLElement | null>>({
    "discern-clarify": null,
    "design-decide": null,
    "mission-impact": null,
  });

  useEffect(() => {
    if (!showAll) return;

    const entries: Array<{ key: StepKey; el: HTMLElement }> = [];
    (Object.keys(panelRefs.current) as StepKey[]).forEach((k) => {
      const el = panelRefs.current[k];
      if (el) entries.push({ key: k, el });
    });
    if (entries.length === 0) return;

    const obs = new IntersectionObserver(
      (ioEntries) => {
        const visible = ioEntries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible) return;
        const match = entries.find((x) => x.el === visible.target);
        if (match) setActive(match.key);
      },
      { root: null, threshold: [0.25, 0.4, 0.6], rootMargin: "-20% 0px -55% 0px" }
    );

    entries.forEach(({ el }) => obs.observe(el));
    return () => obs.disconnect();
  }, [showAll]);

  const activeStep = steps.find((s) => s.key === active) ?? steps[0];

  const onSelect = (k: StepKey) => {
    setActive(k);
    window.history.replaceState(null, "", `#${k}`);
  };

  const stepKeys = steps.map((s) => s.key);
  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (idx + 1) % stepKeys.length;
      onSelect(stepKeys[next]);
      document.getElementById(`tab-${stepKeys[next]}`)?.focus();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (idx - 1 + stepKeys.length) % stepKeys.length;
      onSelect(stepKeys[prev]);
      document.getElementById(`tab-${stepKeys[prev]}`)?.focus();
    }
    if (e.key === "Home") {
      e.preventDefault();
      onSelect(stepKeys[0]);
      document.getElementById(`tab-${stepKeys[0]}`)?.focus();
    }
    if (e.key === "End") {
      e.preventDefault();
      onSelect(stepKeys[stepKeys.length - 1]);
      document.getElementById(`tab-${stepKeys[stepKeys.length - 1]}`)?.focus();
    }
  };

  const renderPanel = (s: Step, forceVisible: boolean) => {
    const isActive = s.key === active;
    const visible = forceVisible || isActive;

    return (
      <div
        key={s.key}
        ref={(el) => {
          panelRefs.current[s.key] = el;
        }}
        className={cx(
          "rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8",
          !visible && "hidden"
        )}
        id={`panel-${s.key}`}
        role="tabpanel"
        aria-labelledby={`tab-${s.key}`}
        tabIndex={0}
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-white/70">
              {s.pathLabel} — {s.legacyTitle}
            </p>
            <span className="sr-only">{s.pathLabel} — {s.legacyTitle}</span>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {s.stepLabel}: {s.stepTitle}
            </h3>
            <p className="mt-3 max-w-3xl text-base text-white/85">{s.oneLiner}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {s.practiceBadges.map((b) => (
                <Pill key={b}>{b}</Pill>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#f5c565]/70 bg-transparent px-6 text-sm font-semibold text-[#f5c565] transition hover:bg-white/5"
          >
            Start a conversation
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold text-white">Guiding questions</p>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              {s.questions.map((q) => (
                <li key={q} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[#f5c565]" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <DetailsBlock title="Common modules" defaultOpen={false}>
              <div className="grid gap-4 sm:grid-cols-2">
                {s.modules.map((m) => (
                  <div key={m.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-semibold text-white">{m.title}</p>
                      {m.meta ? (
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-white/80">
                          {m.meta}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm text-white/80">{m.body}</p>
                  </div>
                ))}
              </div>
            </DetailsBlock>

            <DetailsBlock title="What you receive" defaultOpen={false}>
              <div className="grid gap-4 sm:grid-cols-2">
                {s.outputs.map((o) => (
                  <div key={o.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm font-semibold text-white">{o.title}</p>
                    <p className="mt-2 text-sm text-white/80">{o.body}</p>
                  </div>
                ))}
              </div>

              {s.key === "mission-impact" ? (
                <p className="mt-4 text-xs text-white/70">
                  Pilots usually live inside the mission work domains above (so we don't repeat them here).
                </p>
              ) : null}
            </DetailsBlock>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="discernment-steps" className="bg-[#0b1930] py-20">
      <div id="discern-clarify" className="scroll-mt-28" />
      <div id="design-decide" className="scroll-mt-28" />
      <div id="mission-impact" className="scroll-mt-28" />
      <div id="mission-impact-work" className="scroll-mt-28" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-white/60">
              THE JOURNEY
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Discernment steps
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80">
              Start where you are. Build shared understanding, make grounded choices,
              and move into mission impact through bounded engagements and pilots.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className={cx(
              "inline-flex h-11 items-center justify-center rounded-full border px-6 text-sm font-semibold transition",
              showAll
                ? "border-[#f5c565]/70 bg-white/5 text-[#f5c565]"
                : "border-white/20 bg-transparent text-white hover:bg-white/5"
            )}
            aria-pressed={showAll}
          >
            {showAll ? "Showing all steps" : "Show all steps"}
          </button>
        </div>

        <div className="mt-10">
          <div
            className="grid gap-4 lg:grid-cols-3"
            role="tablist"
            aria-label="Discernment steps"
          >
            {steps.map((s, idx) => {
              const selected = s.key === active;
              return (
                <button
                  key={s.key}
                  id={`tab-${s.key}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${s.key}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => onSelect(s.key)}
                  onKeyDown={(e) => onKeyDown(e, idx)}
                  className={cx(
                    "rounded-2xl border p-6 text-left transition",
                    selected
                      ? "border-[#f5c565]/80 bg-white/5"
                      : "border-white/10 bg-transparent hover:bg-white/5"
                  )}
                >
                  <p className="text-xs font-semibold tracking-[0.2em] text-white/60">
                    {s.stepLabel}
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">{s.stepTitle}</p>
                  <span className="sr-only">{s.pathLabel} — {s.legacyTitle}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 space-y-6">
            {showAll
              ? steps.map((s) => renderPanel(s, true))
              : renderPanel(activeStep, true)}
          </div>

          <p className="mt-10 text-center text-sm text-white/70">
            All offerings start as bounded engagements and pilots—so we can move carefully,
            learn fast, and build repeatable patterns without over-promising.
          </p>
        </div>
      </div>
    </section>
  );
}
