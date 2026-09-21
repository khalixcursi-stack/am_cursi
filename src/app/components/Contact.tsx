import { CONTACTS, IDENTITE, LIENS_CONTACT } from "../data";
import Reveal from "./Reveal";
import {
  IconArrowRight,
  IconGithub,
  IconInstagram,
  IconMail,
  IconMessage,
  IconUsers,
} from "./icons";

const ICONES: Record<string, typeof IconMail> = {
  Discord: IconUsers,
  WhatsApp: IconMessage,
  Instagram: IconInstagram,
  GitHub: IconGithub,
};

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 text-center md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] texte-accent">05 · Contact</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">On joue une partie ?</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed opacity-80">
            Pour une squad, un projet de code, un lab systèmes — ou juste discuter stratégie et
            stoïcisme : ma porte (et mon lobby) est toujours ouverte.
          </p>

          <p className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] opacity-70">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500" />
            {IDENTITE.statut}
          </p>

          <div className="mt-10">
            <a
              href={`mailto:${CONTACTS.email}`}
              className="inline-flex max-w-full items-center justify-center gap-3 border border-gold bg-gold px-5 py-4 text-sm text-[#14100a] transition-colors hover:bg-gold/85 sm:px-8"
            >
              <IconMail className="h-5 w-5 shrink-0" />
              <span className="break-all">{CONTACTS.email}</span>
            </a>
          </div>

          <p className="mt-4 text-xs opacity-60">
            Une partie, un projet, une question : écrivez-moi, je réponds dès que possible.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3 text-left sm:grid-cols-2 sm:gap-4">
          {LIENS_CONTACT.map((lien, index) => {
            const Icone = ICONES[lien.label] ?? IconArrowRight;
            return (
              <Reveal key={lien.label} delay={index * 70} className="h-full">
                <a
                  href={lien.href}
                  target={lien.externe ? "_blank" : undefined}
                  rel={lien.externe ? "noopener noreferrer" : undefined}
                  className="group flex h-full items-center gap-4 border border-orgrave/20 p-5 transition-colors hover:border-orgrave/60 dark:border-gold/20 dark:hover:border-gold/60"
                >
                  <Icone className="h-6 w-6 shrink-0 text-orgrave dark:text-gold" />
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-xl sm:text-2xl">{lien.label}</p>
                    <p className="mt-1 truncate text-xs opacity-70 sm:text-sm">{lien.description}</p>
                  </div>
                  <IconArrowRight className="h-4 w-4 shrink-0 text-orgrave transition-transform group-hover:translate-x-1 dark:text-gold" />
                  <span className="sr-only">(nouvel onglet)</span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
