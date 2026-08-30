import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";

export function Footer() {
  const socials = [
    { href: PROFILE.github, label: "GitHub", Icon: Github },
    { href: PROFILE.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${PROFILE.email}`, label: "Email", Icon: Mail },
  ];

  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <div className="font-display text-lg font-bold">
            {PROFILE.name}
            <span className="text-primary">.</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{PROFILE.role}</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-xl border border-primary/40 bg-primary/10 text-primary transition-all hover:-translate-y-1"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mt-8 text-center font-mono text-xs text-muted-foreground">
        © 2026 {PROFILE.name}
      </p>
    </footer>
  );
}
