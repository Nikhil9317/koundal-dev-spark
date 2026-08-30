import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail, MousePointer2 } from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "@/lib/portfolio-data";
import { HeroVisual } from "./HeroVisual";

const PHRASES = [
  "B.Tech CSE Student",
  "Aspiring Developer",
  "AI & Computer Vision Enthusiast",
  "Problem Solver",
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length] ?? "";
    const done = !deleting && text === current;
    const cleared = deleting && text === "";
    const delay = done ? 1500 : cleared ? 250 : deleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        setIndex((i) => i + 1);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const words = useMemo(() => PHRASES, []);
  const typed = useTypewriter(words);

  const socials = [
    { href: PROFILE.github, label: "GitHub", Icon: Github },
    { href: PROFILE.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${PROFILE.email}`, label: "Email", Icon: Mail },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      <div className="aurora pointer-events-none absolute inset-0 -z-20 opacity-70" />
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 font-mono text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to internships & collaborations
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 text-[clamp(2.4rem,7vw,4.6rem)] leading-[1.02] font-bold"
          >
            <span className="block text-foreground">NIKHIL</span>
            <span className="text-gradient block">KOUNDAL</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-5 text-lg font-medium text-foreground/90 sm:text-xl"
          >
            {PROFILE.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-3 max-w-xl text-muted-foreground"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-6 font-mono text-sm text-muted-foreground"
          >
            <span className="text-primary">&gt;</span> currently:{" "}
            <span className="text-foreground">{typed}</span>
            <span className="caret text-primary">▍</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_40px_-8px_var(--primary)]"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={() =>
                toast("CV available on request", {
                  description: `Email ${PROFILE.email} and I'll send the latest copy.`,
                })
              }
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold transition-all hover:border-primary/50 hover:bg-secondary"
            >
              <Download className="h-4 w-4" />
              Download CV
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
            <span className="ml-2 hidden items-center gap-1.5 font-mono text-xs text-muted-foreground sm:flex">
              <MousePointer2 className="h-3.5 w-3.5" /> scroll to explore
            </span>
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
