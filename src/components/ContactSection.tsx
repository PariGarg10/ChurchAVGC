import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { submitConversationRequest } from "@/lib/contact";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await submitConversationRequest({
        name: String(data.get("name") ?? ""),
        org: String(data.get("org") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section-y bg-white">
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-serif text-[clamp(1.9rem,4.7vw,3.75rem)] leading-[1.04] text-[color:var(--navy)] whitespace-nowrap">
              Let us help you on <span className="text-[color:var(--gold)]">your mission.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 max-w-2xl">
            <h3 className="font-serif text-2xl sm:text-3xl text-[color:var(--navy)]">Get in touch</h3>
            <p className="mt-3 text-[color:var(--muted-foreground)] leading-relaxed">
              Reach out to us. We answer every message personally.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-3xl">
            <form onSubmit={handleSubmit} className="card-elev">
              <h3 className="font-serif text-2xl text-[color:var(--navy)]">Tell us about yourself</h3>

              <div className="mt-8 grid gap-5">
                <Field label="Your name" name="name" required />
                <Field label="Your organization" name="org" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
                <div>
                  <label className="eyebrow text-[color:var(--navy)]/60">What would you like to talk about?</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-3 w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-[color:var(--ink)] outline-none focus:border-[color:var(--gold)] transition-colors"
                  />
                </div>
              </div>

              {error ? <p className="mt-4 text-sm text-red-700">{error}</p> : null}

              <button type="submit" className="btn-primary mt-8 w-full" disabled={sent || sending}>
                {sent ? "Thank you - we'll be in touch." : sending ? "Sending..." : "Start a conversation"}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-[color:var(--navy)]/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-[color:var(--ink)] outline-none focus:border-[color:var(--gold)] transition-colors"
      />
    </div>
  );
}
