
export default function Section2() {
  return (
    <div className="section-gradient">
      <div className="section-container section-container-centered">
        <div className="eyebrow">
          O que faltou foi processo
        </div>

        <h2 className="section-title text-[clamp(30px,4vw,48px)] font-semibold">
          Seus contatos já chegaram, mas estão esfriando no caminho?
        </h2>

        <p className="section-subtitle">
          Mais leads novos nem sempre significam mais vendas. Muitas
          oportunidades se perdem na resposta tardia, no follow-up e na
          proposta enviada sem diagnóstico.
        </p>
      </div>

      <div className="container-cards">
        <div className="section-cards">
          <b>“O lead pede informações e some.”</b>
          <p>
            Uma resposta fria ou um orçamento sem contexto, e a conversa
            fica sem o próximo passo.
          </p>
        </div>

        <div className="section-cards">
          <b>“Estou investindo em anúncios, mas...”</b>
          <p>
            O contato chega, porém o investimento se perde por falta de
            acompanhamento e de processo.
          </p>
        </div>

        <div className="section-cards">
          <b>“Minha equipe responde, mas não fecha.”</b>
          <p>
            Responder rápido importa. Sem diagnóstico, follow-up e um
            processo claro, a venda esfria.
          </p>
        </div>
      </div>
    </div>
  );
}
