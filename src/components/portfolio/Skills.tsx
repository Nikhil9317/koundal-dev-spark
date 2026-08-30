import { motion } from "motion/react";
import { Braces, Database, Globe, Users } from "lucide-react";
import { SKILL_GROUPS } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS = [Braces, Globe, Database, Users];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_50%,black,transparent)]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          subtitle="The languages, frameworks and qualities I rely on day to day."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = ICONS[gi % ICONS.length] ?? Braces;
            return (
              <Reveal key={group.title} delay={gi * 0.08}>
                <div className="glass group h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:glow-ring">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {group.items.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.04 * i, duration: 0.35 }}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className="cursor-default rounded-full border border-border bg-secondary/50 px-4 py-2 font-mono text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-foreground"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
