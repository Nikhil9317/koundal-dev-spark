import { motion } from "motion/react";
import { useMemo } from "react";

const CODE_LINES = [
  { t: "const dev = {", c: "text-violet" },
  { t: "  name: 'Nikhil Koundal',", c: "text-foreground/80" },
  { t: "  focus: ['web', 'ai', 'cv'],", c: "text-foreground/80" },
  { t: "  stack: ['python', 'js', 'node'],", c: "text-foreground/80" },
  { t: "  learning: true,", c: "text-cyan" },
  { t: "};", c: "text-violet" },
];

const CHIPS = ["Python", "JavaScript", "Node.js", "MongoDB", "OpenCV", "Git"];

export function HeroVisual() {
  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        x: (i * 37) % 100,
        y: (i * 61) % 100,
        d: 6 + (i % 5) * 1.6,
        s: 2 + (i % 3),
      })),
    [],
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-square w-full max-w-[520px]"
      aria-hidden="true"
    >
      <div className="absolute inset-6 rounded-full bg-primary/12 blur-3xl" />
      <div className="animate-spin-slow absolute inset-0 rounded-full border border-primary/20" />
      <div
        className="animate-spin-slow absolute inset-10 rounded-full border border-dashed border-violet/25"
        style={{ animationDirection: "reverse", animationDuration: "34s" }}
      />
      <div className="absolute inset-20 rounded-full border border-cyan/15" />

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-primary/70"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.9, 0.15] }}
          transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: p.id * 0.2 }}
        />
      ))}

      <div className="animate-float absolute top-1/2 left-1/2 w-[86%] -translate-x-1/2 -translate-y-1/2">
        <div className="glass glow-ring rounded-2xl p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
            <span className="ml-2 text-muted-foreground">developer.ts</span>
          </div>
          {CODE_LINES.map((line, i) => (
            <motion.div
              key={line.t}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.12 }}
              className={line.c}
            >
              <span className="mr-3 inline-block w-3 text-muted-foreground/50">{i + 1}</span>
              {line.t}
            </motion.div>
          ))}
        </div>
      </div>

      {CHIPS.map((chip, i) => {
        const angle = (i / CHIPS.length) * Math.PI * 2 - Math.PI / 2;
        const r = 44;
        return (
          <motion.span
            key={chip}
            className="glass absolute rounded-full px-3 py-1.5 font-mono text-[10px] whitespace-nowrap text-muted-foreground sm:text-xs"
            style={{
              left: `${50 + Math.cos(angle) * r}%`,
              top: `${50 + Math.sin(angle) * r}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          >
            {chip}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
