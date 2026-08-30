import { motion } from "motion/react";
import { Sparkles, Check } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";
import { DashboardVisual, GestureVisual, MarketplaceVisual } from "./ProjectVisuals";

function Visual({ kind }: { kind: "marketplace" | "gesture" | "dashboard" }) {
  if (kind === "gesture") return <GestureVisual />;
  if (kind === "dashboard") return <DashboardVisual />;
  return <MarketplaceVisual />;
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Each project started from a real problem worth solving."
        />

        <div className="space-y-10">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className={`glass relative overflow-hidden rounded-3xl p-6 transition-shadow duration-500 hover:glow-ring sm:p-9 ${
                  p.featured ? "border-primary/35" : ""
                }`}
              >
                {p.featured && (
                  <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet/20 blur-3xl" />
                )}

                <div
                  className={`relative grid items-center gap-8 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-sm text-primary">PROJECT {p.index}</span>
                      {p.featured && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-violet/15 px-3 py-1 font-mono text-[11px] tracking-wide text-violet uppercase">
                          <Sparkles className="h-3 w-3" /> Featured
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>

                    <ul className="mt-6 grid gap-x-5 gap-y-2.5 sm:grid-cols-2">
                      {p.features.map((f, fi) => (
                        <motion.li
                          key={f}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.03 * fi }}
                          className="flex items-center gap-2 text-sm text-foreground/85"
                        >
                          <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                          {f}
                        </motion.li>
                      ))}
                    </ul>

                    {p.tech.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <Visual kind={p.visual} />
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
