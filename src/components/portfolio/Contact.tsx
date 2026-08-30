import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const CARDS = [
  { Icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { Icon: Phone, label: "Mobile", value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
  { Icon: Github, label: "GitHub", value: "Nikhil9317", href: PROFILE.github },
  { Icon: Linkedin, label: "LinkedIn", value: "nikhil-choudhary", href: PROFILE.linkedin },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="aurora pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          subtitle="Open to internships, junior developer roles and student collaborations."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {CARDS.map(({ Icon, label, value, href }, i) => (
              <Reveal key={label} delay={i * 0.07}>
                <motion.a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  whileHover={{ y: -6 }}
                  className="glass group flex h-full flex-col justify-between gap-6 rounded-2xl p-6 transition-colors hover:border-primary/40 hover:glow-ring"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                      {label}
                    </div>
                    <div className="mt-1 truncate text-sm font-medium">{value}</div>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <form
              className="glass rounded-3xl p-7 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                toast("This form is a demo", {
                  description: `Message sending isn't connected yet — please email ${PROFILE.email}.`,
                });
              }}
            >
              <h3 className="text-xl font-semibold">Send a message</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                This form is a UI demo and does not send messages yet.
              </p>

              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-xs text-muted-foreground">
                      Name
                    </span>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/25"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-xs text-muted-foreground">
                      Email
                    </span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/25"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block font-mono text-xs text-muted-foreground">
                    Message
                  </span>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/25"
                    placeholder="Tell me about the opportunity…"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_40px_-8px_var(--primary)]"
              >
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
