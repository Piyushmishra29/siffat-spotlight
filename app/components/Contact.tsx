"use client";

import { contact, bio } from "@/lib/content";
import { useFadeIn } from "@/lib/useFadeIn";

export default function Contact() {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();
  return (
    <section className="bg-paper py-16 md:py-24">
      <div
        ref={ref}
        className={
          "mx-auto max-w-4xl px-6 md:pl-[200px] md:pr-12 scroll-fade " +
          (isVisible ? "is-visible" : "")
        }
      >
        <p className="font-inter text-[10px] uppercase tracking-widest text-pink text-center">
          LET&rsquo;S WORK.
        </p>
        <h2
          className="mt-3 text-center font-display uppercase leading-[0.9] tracking-tight2 text-pink"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          LET&rsquo;S WORK.
        </h2>

        <div className="mt-14 border-t hairline pt-12">
          <p className="text-center font-display uppercase text-3xl md:text-5xl tracking-tight2 text-ink">
            SIFFAAT GANDHI
          </p>

          <table className="mx-auto mt-10 font-inter text-sm md:text-base">
            <tbody>
              <tr>
                <td className="pr-8 py-2 text-right font-inter text-[10px] uppercase tracking-widest text-warmGrey align-top">
                  Phone
                </td>
                <td className="py-2">
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="tracking-wider text-ink hover:text-pink transition-colors"
                  >
                    {contact.phone}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-8 py-2 text-right font-inter text-[10px] uppercase tracking-widest text-warmGrey align-top">
                  Email
                </td>
                <td className="py-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="tracking-wider text-pink underline underline-offset-4 decoration-1 hover:decoration-2"
                  >
                    {contact.email}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-8 py-2 text-right font-inter text-[10px] uppercase tracking-widest text-warmGrey align-top">
                  Instagram
                </td>
                <td className="py-2">
                  <a
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tracking-wider text-pink underline underline-offset-4 decoration-1 hover:decoration-2"
                  >
                    {contact.instagram}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-8 py-2 text-right font-inter text-[10px] uppercase tracking-widest text-warmGrey align-top">
                  Based
                </td>
                <td className="py-2 tracking-wider text-ink">{bio.basedIn}</td>
              </tr>
              <tr>
                <td className="pr-8 py-2 text-right font-inter text-[10px] uppercase tracking-widest text-warmGrey align-top">
                  Languages
                </td>
                <td className="py-2 tracking-wider text-ink">
                  {bio.languages.join(" · ")}
                </td>
              </tr>
            </tbody>
          </table>

          <p className="mt-12 text-center font-inter text-[10px] uppercase tracking-widest text-warmGrey">
            Based in Mumbai · Available Worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
