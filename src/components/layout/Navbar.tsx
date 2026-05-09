"use client";

import { useState } from "react";

const links = [
  { label: "Início", href: "#topo" },
  { label: "Informações", href: "#evento" },
  { label: "Mensagem", href: "#historia" },
  // { label: "Galeria", href: "#galeria" },
  { label: "Presentes", href: "#presentes" },
  { label: "Presença", href: "#presenca" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#2d2622]/55 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#topo" className="font-serif text-2xl tracking-wide">
          Duda & Filipe
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide transition hover:text-[#f3e7dc]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-full border border-white/20 px-4 py-2 text-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#2d2622]/95 px-6 py-4 text-white md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}