"use client";

import { useEffect, useState } from "react";
import { content, type Lang } from "@/lib/content";

const sectionIds = ["about", "services", "results", "testimonials", "contact"] as const;

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "ko" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const choose = (code: Lang) => {
    setLang(code);
    localStorage.setItem("lang", code);
  };

  const t = content[lang];
  const btn =
    "inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-base font-medium text-white shadow-sm transition hover:bg-gold-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";
  const h2 = "font-serif text-3xl font-semibold sm:text-4xl";

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-charcoal focus:px-4 focus:py-2 focus:text-white">
        {t.skip}
      </a>
      <header className="sticky top-0 z-40 border-b border-sand/70 bg-ivory/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#top" className="font-serif text-xl font-semibold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">
            Haesun Chung
          </a>
          <nav aria-label={t.menu} className="hidden md:block">
            <ul className="flex gap-8 text-sm">
              {sectionIds.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="py-1 hover:text-gold-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div role="group" aria-label={t.langLabel} className="flex overflow-hidden rounded-full border border-sand text-sm">
            {([["en", "EN", "English"], ["ko", "한국어", "한국어 (Korean)"]] as const).map(([code, short, full]) => (
              <button
                key={code}
                type="button"
                lang={code}
                aria-label={full}
                aria-pressed={lang === code}
                onClick={() => choose(code)}
                className={`px-3.5 py-1.5 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-charcoal ${
                  lang === code ? "bg-charcoal text-ivory" : "hover:bg-beige"
                }`}
              >
                {short}
              </button>
            ))}
          </div>
        </div>
        <nav aria-label={t.menu} className="border-t border-sand/70 md:hidden">
          <ul className="flex gap-6 overflow-x-auto px-5 py-2 text-sm whitespace-nowrap">
            {sectionIds.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="inline-block py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main">
        <section id="top" className="bg-gradient-to-b from-beige to-ivory">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:py-28">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold-dark">{t.hero.eyebrow}</p>
            <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">{t.hero.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80">{t.hero.body}</p>
            <a href="#contact" className={`${btn} mt-10`}>{t.cta}</a>
          </div>
        </section>

        <section id="about" aria-labelledby="about-h" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <h2 id="about-h" className={h2}>{t.about.title}</h2>
            <div className="space-y-5 leading-relaxed text-charcoal/85">
              {t.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
              <ul className="space-y-2 pt-2">
                {t.about.points.map((p) => (
                  <li key={p} className="flex gap-3"><span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="services" aria-labelledby="services-h" className="scroll-mt-20 bg-beige py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 id="services-h" className={h2}>{t.services.title}</h2>
            <p className="mt-3 text-charcoal/75">{t.services.intro}</p>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {t.services.items.map((s) => (
                <li key={s.name} className="rounded-2xl border border-sand bg-ivory p-7">
                  <h3 className="font-serif text-2xl font-semibold">{s.name}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal/80">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="results" aria-labelledby="results-h" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <h2 id="results-h" className={h2}>{t.results.title}</h2>
          <p className="mt-3 text-charcoal/75">{t.results.intro}</p>
          <dl className="mt-10 grid gap-8 sm:grid-cols-3">
            {t.results.items.map((r) => (
              <div key={r.label} className="flex flex-col-reverse justify-end border-t-2 border-gold pt-4">
                <dt className="mt-1 text-charcoal/80">{r.label}</dt>
                <dd className="font-serif text-5xl font-semibold text-gold-dark">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-charcoal/60">{t.results.note}</p>
        </section>

        <section id="testimonials" aria-labelledby="testimonials-h" className="scroll-mt-20 bg-beige py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 id="testimonials-h" className={h2}>{t.testimonials.title}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {t.testimonials.items.map((q) => (
                <figure key={q.author} className="rounded-2xl border border-sand bg-ivory p-7">
                  <blockquote className="font-serif text-xl leading-relaxed">“{q.quote}”</blockquote>
                  <figcaption className="mt-5 text-sm font-medium text-gold-dark">{q.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-h" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-24 text-center">
          <h2 id="contact-h" className={h2}>{t.contact.title}</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-charcoal/80">{t.contact.body}</p>
          <a href={`mailto:${t.contact.email}?subject=Discovery%20Call`} className={`${btn} mt-8`}>{t.cta}</a>
          <p className="mt-6 text-sm">
            {t.contact.emailLabel}:{" "}
            <a href={`mailto:${t.contact.email}`} className="underline decoration-gold underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">{t.contact.email}</a>
          </p>
          <p className="mt-1 text-xs text-charcoal/50">{t.contact.note}</p>
        </section>
      </main>

      <footer className="border-t border-sand py-8 text-center text-sm text-charcoal/70">{t.footer}</footer>
    </>
  );
}
