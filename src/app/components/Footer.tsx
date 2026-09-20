export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-6 py-10 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row dark:text-neutral-400">
        <p>© 2026 Cursi — Conçu avec sérieux, joué avec passion.</p>
        <p className="flex items-center gap-4">
          <span>Fait avec Next.js & Tailwind</span>
          <a href="#hero" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
            Retour en haut ↑
          </a>
        </p>
      </div>
    </footer>
  );
}
