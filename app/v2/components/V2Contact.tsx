"use client";

import { contact } from "@/lib/content";

export default function V2Contact() {
  return (
    <section id="v2-contact" className="bg-v2blue text-v2fg">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-32">
        <p className="font-inter text-[10px] font-medium uppercase tracking-[0.25em] text-v2fg/70">
          05 / CONTACT
        </p>
        <h2
          className="mt-4 font-inter font-black uppercase leading-[0.84] tracking-[-0.04em]"
          style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}
        >
          LET&rsquo;S
          <br />
          WORK
          <br />
          <span className="text-v2acid">TOGETHER.</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-4">
          <ContactCard
            label="Direct"
            value={contact.email}
            href={`mailto:${contact.email}`}
            footer="EMAIL ↗"
          />
          <ContactCard
            label="Voice"
            value={contact.phone}
            href={`tel:${contact.phone.replace(/\s+/g, "")}`}
            footer="CALL ↗"
          />
          <ContactCard
            label="Social"
            value={contact.instagram}
            href={contact.instagramUrl}
            footer="INSTAGRAM ↗"
          />
        </div>

        <p className="mt-16 max-w-2xl font-inter text-sm uppercase tracking-[0.12em] text-v2fg/80 md:text-base">
          Open to web series, films, TVCs, music videos, theatre.
          Mumbai-based. Available for travel. Self-tape on request.
        </p>
      </div>

      {/* Fin slab — black with acid + version */}
      <div className="border-t-2 border-v2border bg-v2bg">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-8 md:flex-row md:items-end md:justify-between md:px-12">
          <p
            className="font-inter font-black uppercase leading-[0.85] tracking-[-0.04em] text-v2fg"
            style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}
          >
            FIN.
          </p>
          <p className="font-inter text-[10px] uppercase tracking-[0.22em] text-v2fg/60">
            SIFFAATGANDHI.ONLINE · v2 BRUTALIST EDITION
            <br />
            MUMBAI · MMXXVI · BUILT WITH ♥ BY π
          </p>
          <a
            href="/"
            className="inline-flex w-fit items-center gap-2 border-2 border-v2acid bg-transparent px-4 py-2 font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-v2acid transition-colors hover:bg-v2acid hover:text-v2bg"
          >
            ← BACK TO v1
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  value,
  href,
  footer,
}: {
  label: string;
  value: string;
  href: string;
  footer: string;
}) {
  return (
    <a
      href={href}
      className="group/card relative block border-2 border-v2fg/30 bg-v2blue p-5 transition-all duration-100 hover:border-v2acid hover:bg-v2acid hover:text-v2bg"
    >
      <p className="font-inter text-[10px] font-medium uppercase tracking-[0.25em] text-v2fg/65 group-hover/card:text-v2bg/75">
        {label}
      </p>
      <p className="mt-3 break-all font-inter text-lg font-bold uppercase tracking-[-0.01em] text-v2fg md:text-xl group-hover/card:text-v2bg">
        {value}
      </p>
      <p className="mt-6 font-inter text-[10px] font-bold uppercase tracking-[0.22em] text-v2fg/85 group-hover/card:text-v2bg">
        {footer}
      </p>
    </a>
  );
}
