import { motion } from "motion/react";
import { Award } from "lucide-react";
import { CERTIFICATES } from "@/lib/portfolio-data";
import { SectionHeading } from "./Reveal";

export function Certificates() {
  return (
    <section id="certificates" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certificates"
          title="Certifications"
          subtitle="Courses and simulations I completed to sharpen my skills."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-primary/40 hover:glow-ring"
            >
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base leading-snug font-semibold">{c.title}</h3>
              <p className="mt-2 font-mono text-xs tracking-wider text-primary uppercase">
                {c.issuer}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{c.date}</p>
              <span className="mt-5 block h-px w-0 bg-gradient-to-r from-primary to-violet transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
