const msgWhatsApp = encodeURIComponent(
  "Oi, vim pelo site e quero transformar leads em clientes."
);

const wpp = `https://wa.me/5548920038357?text=${msgWhatsApp}`;

export default function Section9() {
  return (
    <section className="bg-[#14284b]">
      <div className="section-container section-container-centered">
        <div className="eyebrow antialiased">
          Sua próxima venda pode estar no que você já tem.
        </div>
        <h2 className="section-title text-[clamp(30px,4vw,48px)] font-semibold text-white leading-[1.08] tracking-[-1.5px] my-2.5 mx-auto mb-4.5 max-w-195">
          Pare de buscar apenas mais leads. Comece a converter melhor.
        </h2>
        <p className="section-subtitle text-[#d2cbc6]">
          Aplique um processo comercial simples e previsível, e faça os
          contatos que já chegam trabalharem a favor do seu negócio.
        </p>
        <a
          href={wpp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-[#C2B280] text-black"
        >
          QUERO TRANSFORMAR LEADS EM CLIENTES →
        </a>
      </div>
    </section>
  );
}