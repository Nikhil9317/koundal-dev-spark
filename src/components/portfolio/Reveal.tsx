import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 28, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle ? <p className="mt-4 text-muted-foreground">{subtitle}</p> : null}
    </Reveal>
  );
}
