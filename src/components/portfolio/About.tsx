import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { PROFILE, PROJECTS, CERTIFICATES, SKILL_GROUPS } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const SKILL_COUNT = SKILL_GROUPS.reduce((n, g) => n + g.items.length, 0);

const STATS = [
  { value: `${PROJECTS.length}`, label: "Projects built" },
  { value: `${CERTIFICATES.length}`, label: "Certifications" },
  { value: `${SKILL_COUNT}`, label: "Skills & tools" },
];

export function About() {
  const info = [
    { Icon: GraduationCap, label: "University", value: "Lovely Professional University" },
    { Icon: MapPin, label: "Location", value: "Phagwara, Punjab, India" },
    { Icon: Mail, label: "Email", value: PROFILE.email },
    { Icon: Phone, label: "Mobile", value: PROFILE.phone },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="A little about me" />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass rounded-3xl p-7 sm:p-9">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm <span className="text-primary">Nikhil Koundal</span>, a 2nd year B.Tech Computer
              Science student at Lovely Professional University who enjoys turning ideas into
              working software while I learn.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              My interests sit at the intersection of software development, artificial
              intelligence, computer vision and web technologies. I like building projects that
              solve a real problem — a marketplace that helps students earn while they study, a
              gesture-recognition system that removes the need for a mouse, an attendance system
              that replaces paperwork.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Alongside coding, I've taught Python fundamentals during summer training, which
              sharpened how I explain technical ideas and collaborate with people.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={0.08 * i}>
                  <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-center transition-colors hover:border-primary/40">
                    <div className="text-gradient font-display text-3xl font-bold">{s.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {info.map(({ Icon, label, value }, i) => (
              <Reveal key={label} delay={0.06 * i}>
                <div className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-primary/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                      {label}
                    </div>
                    <div className="truncate text-sm font-medium">{value}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
