
export default function Section3() {
  return (
    <section className="section-gradient scroll-mt-24 flex justify-center py-50" id="metodo">
      <div className="section-container py-30">
        <div className="flex flex-col gap-5">
          <div className="eyebrow">O método</div>
          <h2
            className="section-title text-[clamp(30px,4vw,48px)] font-semibold"
          >
            Pare de olhar apenas para a quantidade de leads.
          </h2>
          <p className="section-subtitle m-0">
            Comece a olhar para o processo depois que o lead chega.
          </p>
        </div>
        <div>
          <ul className="space-y-3 section-subtitle">
            <li className="relative pl-7 before:absolute before:left-0 before:font-black before:text-[#873f2b] before:content-['✓']">
              Primeiro contato que abre conversa
            </li>
            <li className="relative pl-7 before:absolute before:left-0 before:font-black before:text-[#873f2b] before:content-['✓']">
              Diagnóstico antes da proposta
            </li>
            <li className="relative pl-7 before:absolute before:left-0 before:font-black before:text-[#873f2b] before:content-['✓']">
              Qualificação do lead
            </li>
            <li className="relative pl-7 before:absolute before:left-0 before:font-black before:text-[#873f2b] before:content-['✓']">
              Follow-up com valor, sem cobrança
            </li>
            <li className="relative pl-7 before:absolute before:left-0 before:font-black before:text-[#873f2b] before:content-['✓']">
              Tratamento honesto de objeções
            </li>
            <li className="relative pl-7 before:absolute before:left-0 before:font-black before:text-[#873f2b] before:content-['✓']">
              Processo, rotina e números claros
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
