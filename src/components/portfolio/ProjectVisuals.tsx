import { motion } from "motion/react";

/* Animated marketplace / dashboard visual for the microjob platform */
export function MarketplaceVisual() {
  const rows = ["Campus poster design", "Data entry — 2 hrs", "Event photography"];
  return (
    <div className="glass relative h-full min-h-[240px] overflow-hidden rounded-2xl p-5" aria-hidden>
      <div className="grid-bg absolute inset-0 opacity-30" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">open gigs</span>
          <span className="rounded-full bg-primary/15 px-2.5 py-1 font-mono text-[10px] text-primary">
            live
          </span>
        </div>
        <div className="mt-4 space-y-2.5">
          {rows.map((r, i) => (
            <motion.div
              key={r}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 * i }}
              className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-3.5 py-3"
            >
              <span className="text-xs text-foreground/85">{r}</span>
              <motion.span
                className="h-1.5 w-10 rounded-full bg-primary/60"
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["Profiles", "Tasks", "Ratings"].map((c) => (
            <div
              key={c}
              className="rounded-xl border border-border bg-background/40 px-2 py-3 text-center font-mono text-[10px] text-muted-foreground"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Computer-vision style hand landmark visual */
const POINTS: [number, number][] = [
  [50, 88],
  [30, 74],
  [22, 58],
  [18, 44],
  [40, 62],
  [38, 42],
  [37, 27],
  [52, 60],
  [52, 38],
  [52, 21],
  [64, 62],
  [66, 42],
  [67, 28],
  [76, 68],
  [80, 52],
  [83, 40],
];
const LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 4],
  [4, 5],
  [5, 6],
  [0, 7],
  [7, 8],
  [8, 9],
  [0, 10],
  [10, 11],
  [11, 12],
  [0, 13],
  [13, 14],
  [14, 15],
  [1, 4],
  [4, 7],
  [7, 10],
  [10, 13],
];

export function GestureVisual() {
  return (
    <div
      className="glass relative h-full min-h-[300px] overflow-hidden rounded-2xl p-5"
      aria-hidden
    >
      <div className="grid-bg absolute inset-0 opacity-25" />
      <motion.div
        className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-primary/12 to-transparent"
        animate={{ y: ["-10%", "110%"] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative flex items-center justify-between font-mono text-[10px] text-muted-foreground">
        <span className="text-cyan">● cam 0 · 30fps</span>
        <span>tracking: hand_right</span>
      </div>

      <svg viewBox="0 0 100 100" className="relative mx-auto mt-2 h-[220px] w-full">
        {LINKS.map(([a, b], i) => (
          <motion.line
            key={`${a}-${b}`}
            x1={POINTS[a]![0]}
            y1={POINTS[a]![1]}
            x2={POINTS[b]![0]}
            y2={POINTS[b]![1]}
            stroke="var(--primary)"
            strokeWidth="0.6"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.75 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.03 * i }}
          />
        ))}
        {POINTS.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="1.5"
            fill="var(--cyan)"
            animate={{ opacity: [0.45, 1, 0.45], r: [1.3, 1.9, 1.3] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.08 }}
          />
        ))}
        <rect
          x="12"
          y="14"
          width="76"
          height="80"
          fill="none"
          stroke="var(--violet)"
          strokeWidth="0.5"
          strokeDasharray="4 3"
          opacity="0.55"
        />
      </svg>

      <div className="relative mt-1 flex flex-wrap gap-2 font-mono text-[10px]">
        {["volume +", "next track", "slide →"].map((g, i) => (
          <motion.span
            key={g}
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
            className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-primary"
          >
            {g}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* Attendance dashboard visual */
export function DashboardVisual() {
  const bars = [72, 88, 64, 95, 80, 91];
  return (
    <div className="glass relative h-full min-h-[240px] overflow-hidden rounded-2xl p-5" aria-hidden>
      <div className="grid-bg absolute inset-0 opacity-30" />
      <div className="relative flex items-baseline justify-between">
        <span className="font-mono text-xs text-muted-foreground">attendance %</span>
        <span className="text-gradient font-display text-2xl font-bold">86%</span>
      </div>
      <div className="relative mt-6 flex h-28 items-end gap-3">
        {bars.map((b, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${b}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 rounded-t-md bg-gradient-to-t from-primary/25 to-primary"
          />
        ))}
      </div>
      <div className="relative mt-4 space-y-2">
        {["Records synced", "Report generated"].map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.15 }}
            className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            {t}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
