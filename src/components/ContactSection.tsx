import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { CONTACT_EMAIL, submitConversationRequest } from "@/lib/contact";

function buildCalendarDays(viewMonth: Date) {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];

  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) cells.push(day);

  return cells;
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [viewMonth, setViewMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const timeSlots = ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"];
  const calendarDays = useMemo(() => buildCalendarDays(viewMonth), [viewMonth]);
  const monthLabel = viewMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });

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
    <>
      <section id="contact" className="pt-40 pb-16 bg-[#2A1C14] text-[color:var(--cream)]">
        <div className="container-page max-w-4xl">
          <Reveal>
            <div className="eyebrow text-[color:var(--gold)]">Contact</div>
            <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.04] text-[color:var(--cream)]">
              Let&rsquo;s partner on <span className="text-[color:var(--gold)]">your mission.</span>
            </h2>
            <p className="mt-8 text-lg text-[color:var(--cream)]/75 max-w-2xl leading-relaxed">
              We view ourselves not merely as a production vendor, but as a ministry partner.
              Tell us about your content — we&rsquo;ll listen first.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page grid grid-cols-[1fr_1.1fr] gap-16">
          <Reveal>
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-[color:var(--navy)]">Get in touch</h3>
              <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">
                Reach us in whatever way is easiest. We answer every message personally,
                usually within one business day.
              </p>
              <ul className="mt-10 space-y-6">
                <li className="border-b border-[color:var(--border)] pb-6">
                  <div className="eyebrow">Email</div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-2 block font-serif text-2xl text-[color:var(--navy)] hover:text-[color:var(--gold)] transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="border-b border-[color:var(--border)] pb-6">
                  <div className="eyebrow">Office</div>
                  <div className="mt-2 font-serif text-2xl text-[color:var(--navy)]">Mon–Sat, 9:30am–6:30pm IST</div>
                </li>
              </ul>
              <a href="#schedule" className="btn-primary mt-10">
                Open the scheduler
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={handleSubmit} className="card-elev">
              <h3 className="font-serif text-2xl text-[color:var(--navy)]">Tell us about your ministry</h3>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
                We&rsquo;ll reply within one business day.
              </p>

              <div className="mt-8 grid gap-5">
                <Field label="Your name" name="name" required />
                <Field label="Church or ministry" name="org" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone (optional)" name="phone" />
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
                {sent ? "Thank you — we'll be in touch." : sending ? "Sending..." : "Schedule a consultation"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section id="schedule" className="section-y bg-[color:var(--background)]">
        <div className="container-page">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="eyebrow">Meeting Scheduler</div>
              <h3 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05]">
                Pick a time that works for you.
              </h3>
              <p className="mt-6 text-[color:var(--muted-foreground)]">
                30 minutes. No prep needed. We&rsquo;ll bring the questions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12 card-elev max-w-3xl mx-auto text-center">
              <div className="mb-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setViewMonth((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1))
                  }
                  className="rounded-lg border border-[color:var(--border)] px-3 py-2 text-sm font-semibold text-[color:var(--navy)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition-colors"
                  aria-label="Previous month"
                >
                  ←
                </button>
                <div className="font-serif text-xl text-[color:var(--navy)]">{monthLabel}</div>
                <button
                  type="button"
                  onClick={() =>
                    setViewMonth((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1))
                  }
                  className="rounded-lg border border-[color:var(--border)] px-3 py-2 text-sm font-semibold text-[color:var(--navy)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition-colors"
                  aria-label="Next month"
                >
                  →
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2 text-xs text-[color:var(--muted-foreground)]">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <div key={i}>{d}</div>
                ))}
                {calendarDays.map((day, i) => {
                  if (!day) {
                    return <div key={`empty-${i}`} className="aspect-square" />;
                  }

                  const date = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day);
                  const isSelected = selectedDate ? isSameDay(selectedDate, date) : false;

                  return (
                    <button
                      key={`${viewMonth.getMonth()}-${day}`}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={`aspect-square grid place-items-center rounded-lg text-sm transition-colors ${
                        isSelected
                          ? "bg-[color:var(--navy)] text-[color:var(--cream)]"
                          : "text-[color:var(--ink)] hover:bg-[color:var(--cream)] cursor-pointer"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
              <div className="mt-8 grid grid-cols-4 gap-3">
                {timeSlots.map((t) => {
                  const isSelected = selectedTime === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`rounded-xl border py-3 text-sm font-semibold transition-colors ${
                        isSelected
                          ? "border-[color:var(--gold)] bg-[color:var(--navy)] text-[color:var(--cream)]"
                          : "border-[color:var(--border)] bg-white text-[color:var(--navy)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
              {selectedDate && selectedTime ? (
                <p className="mt-6 text-sm font-medium text-[color:var(--navy)]">
                  Selected:{" "}
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  at {selectedTime}
                </p>
              ) : null}
              <p className="mt-6 text-xs text-[color:var(--muted-foreground)]">
                Times shown in Central Time. We&rsquo;ll send a calendar invite with the link.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
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
