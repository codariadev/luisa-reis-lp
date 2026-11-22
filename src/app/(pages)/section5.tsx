
export default function Section5() {
  return (
    <section className="container-gradient scroll-mt-18" id="bonus">
      <div className="section-container section-container-centered gap-10">
        <div className="eyebrow">No apêndice do e-book</div>
        <h2 className="section-title max-w-full text-[clamp(30px,4vw,48px)] font-semibold">
          Materiais para colocar o<br></br>método em prática.
        </h2>
        <div className="flex gap-20">
          <div className="bonus">
            <div className="icon">📋</div>
            <h3 className="icon-h3">Checklist diário do comercial</h3>
            <p className="icon-p">
              Uma lista prática para responder no prazo, cumprir o follow-up
              e não deixar lead sem próxima ação.
            </p>
          </div>
          <div className="bonus">
            <div className="icon">💬</div>
            <h3 className="icon-h3">Modelos de mensagem</h3>
            <p className="icon-p">
              Textos para adaptar no primeiro contato, follow-up, reativação
              e pedido de decisão.
            </p>
          </div>
          <div className="bonus">
            <div className="icon">📊</div>
            <h3 className="icon-h3">Ficha de registro do lead</h3>
            <p className="icon-p">
              Uma estrutura simples para anotar motivo, problema, prazo,
              decisor e o próximo passo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
