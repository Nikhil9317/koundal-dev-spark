import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/lib/portfolio-data";
import { SectionHeading } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="relative pl-8 sm:pl-12">
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-2 bottom-2 left-2.5 w-px origin-top bg-gradient-to-b from-violet via-primary to-transparent sm:left-4"
          />

          <div className="space-y-6">
            {EDUCATION.map((e, i) => (
              <motion.div
                key={`${e.school}-${e.level}-${i}`}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span className="absolute top-6 -left-[26px] grid h-8 w-8 place-items-center rounded-full border border-violet/40 bg-background text-violet sm:-left-[42px]">
                  <GraduationCap className="h-4 w-4" />
                </span>

                <div className="glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{e.school}</h3>
                      <p className="text-sm text-muted-foreground">{e.place}</p>
                    </div>
                    {e.date ? (
                      <span className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-muted-foreground">
                        {e.date}
                      </span>
                    ) : null}
                  </div>
                  {(e.level || e.score) && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {e.level ? (
                        <span className="rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary">
                          {e.level}
                        </span>
                      ) : null}
                      {e.score ? (
                        <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1.5 font-mono text-sm text-cyan">
                          {e.score}
                        </span>
                      ) : null}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
