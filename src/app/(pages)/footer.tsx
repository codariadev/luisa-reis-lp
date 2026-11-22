
const contatos = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/luisadosreisdasilva", icon: "in" },
  { label: "Instagram", href: "https://instagram.com/lrluisareis", icon: "ig" },
  { label: "WhatsApp", href: "https://wa.me/5548920038357", icon: "wa" },
  { label: "E-mail", href: "mailto:contato@luisareis.com.br", icon: "mail" },
];

function Icon({ name }: { name: string }) {
  const p = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "in")
    return (<svg {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></svg>);
  if (name === "ig")
    return (<svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5v.01" /></svg>);
  if (name === "wa")
    return (<svg {...p}><path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 7.6 19.4z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.4-1.6-1-2-2l1-1-1-2z" /></svg>);
  return (<svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>);
}

  export default function Footer() {
  return (
    <footer className="bg-[#14284B]/95 text-[#F7F3EA]">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="max-md:text-center">
          <p className="font-cg text-4xl">Luisa Reis</p>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#B08D57]">Estratégia em vendas</p>
        </div>

        <div className="flex flex-col items-center gap-5">
          <p className="text-sm text-[#F7F3EA]/70 text-center">
            Quer estruturar sua operação comercial de perto?<br />Fale comigo.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {contatos.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.icon === "mail" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 max-md:min-h-11 text-sm text-[#F7F3EA]/70 transition hover:text-[#F7F3EA]"
                >
                  <span className="text-[#B08D57]"><Icon name={c.icon} /></span>
                  <span className="border-b border-transparent pb-0.5 transition group-hover:border-[#B08D57]">
                    {c.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#F7F3EA]/10">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col items-center text-center md:text-left gap-4 md:flex-row md:items-center md:justify-between text-xs text-[#F7F3EA]/60">
          <span>© 2026 Luisa Reis • Todos os direitos reservados.</span>

          <a
            href="https://codariadev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0B0F19] px-4 py-2 ring-1 ring-white/10 transition hover:ring-[#22D3EE]/60 hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.5)]"
          >
            <span className="font-mono text-[#22D3EE]">{"</>"}</span>
            <span className="text-white/60">Desenvolvido por</span>
            <span className="font-semibold bg-linear-to-r from-[#22D3EE] to-[#A78BFA] bg-clip-text text-transparent">
              CodariaDev
            </span>
            <span className="text-white/40 transition group-hover:translate-x-0.5 group-hover:text-white">→</span>
          </a>
        </div>
      </div>
    </footer>
  );
}