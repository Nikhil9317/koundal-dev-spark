import { motion } from "motion/react";
import { Briefcase, CalendarDays } from "lucide-react";
import { TRAINING } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Training() {
  return (
    <section id="training" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Training"
          title="Experience & training"
          subtitle="Hands-on teaching experience alongside my studies."
        />

        <div className="relative pl-8 sm:pl-12">
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute top-2 bottom-2 left-2.5 w-px origin-top bg-gradient-to-b from-primary via-violet to-transparent sm:left-4"
          />

          <Reveal>
            <div className="relative">
              <span className="absolute top-6 -left-[26px] grid h-8 w-8 place-items-center rounded-full border border-primary/40 bg-background text-primary sm:-left-[42px]">
                <Briefcase className="h-4 w-4" />
              </span>

              <div className="glass rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold sm:text-2xl">{TRAINING.title}</h3>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {TRAINING.period}
                  </span>
                </div>
                <p className="mt-1.5 text-primary">{TRAINING.org}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {TRAINING.points.map((point, i) => (
                    <motion.span
                      key={point}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {point}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
