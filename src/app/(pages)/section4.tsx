
export default function Section4() {
  return (
    <section className="bg-[#14284b] scroll-mt-24" id="conteudo">
      <div className="section-container section-container-centered gap-5">
        <div className="flex items-center flex-col gap-5 lg:gap-10">
          <div className="eyebrow antialiased">Dentro do e-book</div>
          <h2 className="section-title max-w-full text-[clamp(30px,4vw,48px)] font-semibold text-white">
            Um guia prático para<br></br>transformar contatos<br></br>em clientes pagantes.
          </h2>
          <p className="section-subtitle text-white">
            Conteúdo direto, testado na prática, para empresários, donos de
            negócio, gestores e vendedores — com introdução, dez capítulos,
            conclusão e um apêndice de modelos.
          </p>
        </div>
        <div className="chapters text-white">
          <div className="chapter">
            <strong>01.</strong> Lead não é cliente (ainda)
          </div>
          <div className="chapter">
            <strong>02.</strong> Entenda quem está do outro lado
          </div>
          <div className="chapter">
            <strong>03.</strong> O primeiro contato define o ritmo
          </div>
          <div className="chapter">
            <strong>04.</strong> Diagnóstico, as perguntas que vendem
          </div>
          <div className="chapter">
            <strong>05.</strong> Follow-up, a rotina que sustenta a venda
          </div>
          <div className="chapter">
            <strong>06.</strong> Objeção é sinal, não porta fechada
          </div>
          <div className="chapter">
            <strong>07.</strong> Fechar é consequência, não truque
          </div>
          <div className="chapter">
            <strong>08.</strong> Time, previsibilidade e o plano de 30 dias
          </div>
        </div>
      </div>
    </section>
  );
}
