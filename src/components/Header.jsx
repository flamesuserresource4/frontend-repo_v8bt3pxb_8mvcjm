import { useEffect, useState } from 'react';
import { Moon, Sun, Download } from 'lucide-react';

export default function Header({ onResumeClick }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 pt-5 md:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
          <a href="#top" className="text-sm font-semibold tracking-wide text-white">Sanidh • Portfolio</a>
          <div className="flex items-center gap-2">
            <a href="#projects" className="hidden text-sm text-white/80 hover:text-white md:block">Projects</a>
            <a href="#about" className="hidden text-sm text-white/80 hover:text-white md:block">About</a>
            <a href="#contact" className="hidden text-sm text-white/80 hover:text-white md:block">Contact</a>
            <button
              onClick={onResumeClick}
              className="cursor-hover inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30"
            >
              <Download size={16} /> Resume
            </button>
            <button
              onClick={() => setDark((d) => !d)}
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
