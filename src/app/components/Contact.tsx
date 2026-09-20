import { CONTACTS } from "../data";
import { IconMail, IconUsers, IconMessage, IconInstagram, IconGithub, IconArrowRight } from "./icons";

const links = [
  { label: "Discord", description: "Serveur info & prog", href: CONTACTS.discord, icon: IconUsers },
  { label: "WhatsApp", description: "Discussion directe", href: CONTACTS.whatsapp, icon: IconMessage },
  { label: "Instagram", description: "@zzz_cursi", href: CONTACTS.instagram, icon: IconInstagram },
  { label: "GitHub", description: "Le code de ce site", href: CONTACTS.github, icon: IconGithub },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 text-center md:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">05 · Contact</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">On joue une partie ?</h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed opacity-80">Pour une squad, un projet de code, un lab systèmes — ou juste discuter stratégie et stoïcisme : ma porte (et mon lobby) est toujours ouverte.</p>
        <a href={`mailto:${CONTACTS.email}`} className="mt-8 inline-flex max-w-full items-center justify-center gap-3 border border-gold bg-gold px-5 py-4 text-sm text-[#14100a] transition-colors hover:bg-transparent hover:text-gold sm:px-8"><IconMail className="h-5 w-5 shrink-0" />{CONTACTS.email}</a>
        <div className="mt-12 grid grid-cols-2 gap-3 text-left sm:gap-4">
          {links.map(({ label, description, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-wrap items-center gap-3 border border-gold/20 p-4 transition-colors hover:border-gold/60 sm:flex-nowrap sm:p-6">
              <Icon className="h-6 w-6 shrink-0 text-gold" />
              <div className="min-w-0 flex-1 basis-20"><p className="font-serif text-xl sm:text-2xl">{label}</p><p className="mt-1 text-xs opacity-70 sm:text-sm">{description}</p></div>
              <IconArrowRight className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
