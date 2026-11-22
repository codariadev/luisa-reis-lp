
"use client";

import Image from "next/image";
import { useState } from "react";


const links = [
  { label: "O método", href: "#metodo" },
  { label: "O e-book", href: "#conteudo" },
  { label: "Bônus", href: "#bonus" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d8e1ef]/70 bg-[#14284b]/95 backdrop-blur-md">

      <div className="relative mx-auto flex w-full max-w-280 items-center justify-between px-6 py-4">

        <a href="#top" aria-label="Voltar ao topo" onClick={() => setMenuOpen(false)} className="flex">
          <Image className="max-md:h-10 max-md:w-auto" src="/logo-navbar.png" width={200} height={200} alt="logo"/>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold text-[#f7f3ea] transition-colors duration-200 hover:text-[#1550B0]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#oferta"
          className="hidden rounded-full bg-[#14284b] px-5 py-3 text-[12px] font-bold text-white shadow-[0_5px_15px_#1550B020] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0e3679] md:inline-flex"
        >
          Quero meu e-book →
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.25 rounded-lg border border-[#d8e1ef] text-[#f7f3ea] md:hidden"
        >
          <span className={`h-0.5 w-5 bg-current transition-all ${menuOpen ? "translate-y-1.75 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-current transition-all ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}`} />
        </button>

      </div>

      {menuOpen && (
        <div className="border-t border-[#d8e1ef] bg-[#FAF9F6] px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm font-semibold text-[#53647c] transition-colors hover:text-[#1550B0]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#oferta"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-[#1550B0] px-5 py-3.5 text-center text-sm font-bold text-white"
            >
              Quero meu e-book →
            </a>
          </nav>
        </div>
      )}

    </header>
  );
}
