
export default function Section8() {
  return (
    <section className="bg-[#f0ece1] scroll-mt-20" id="duvidas">
      <div className="section-container section-container-centered">
        <div className="flex items-center flex-col gap-5">
          <div className="eyebrow">Dúvidas frequentes</div>
          <h2
            className="section-title max-w-full text-[clamp(30px,4vw,48px)] font-semibold pb-10"
          >
            Antes de começar
          </h2>
        </div>
        <div className="faq">
          <details>
            <summary>Preciso ter experiência em vendas?</summary>
            <p>
              Não. O livro é direto e prático, para quem vende o próprio
              negócio ou orienta um time e quer um processo claro, sem
              depender de talento nato.
            </p>
          </details>
          <details>
            <summary>Esse material serve para pequenos negócios?</summary>
            <p>
              Sim. Foi escrito para empresários, donos de negócio, gestores
              e vendedores que precisam aproveitar melhor cada contato que
              recebem.
            </p>
          </details>
          <details>
            <summary>É um curso?</summary>
            <p>
              Não. É um e-book digital, com capítulos objetivos e um apêndice
              de modelos, checklists e fichas para adaptar.
            </p>
          </details>
          <details>
            <summary>Como receberei o material?</summary>
            <p>
              Após a confirmação do pagamento, o acesso deverá ser enviado pela
              plataforma de checkout utilizada na compra.
            </p>
          </details>
          <details>
            <summary>Posso usar com minha equipe?</summary>
            <p>
              Sim. Há um capítulo sobre como orientar o time comercial, com
              processo, rotina e metas. Respeite as condições de uso definidas
              na oferta.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
