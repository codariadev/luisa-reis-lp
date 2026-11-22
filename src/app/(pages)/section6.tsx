export default function Section6() {
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL ?? "#oferta";

  return (
    <section className="bg-[#f0ece1] scroll-mt-20" id="oferta">
      <div className="section-container section-container-centered gap-10 w-1/3">
        <div className="flex items-center flex-col gap-10">
          <div className="eyebrow">Comece pelo que já tem</div>
          <h2 className="section-title max-w-full text-[clamp(30px,4vw,48px)] font-semibold">
            Quanto vale aproveitar melhor os leads que você já pagou para ter?
          </h2>
        </div>
        <div className="pricebox">
          <div className="old">Preço de lançamento</div>
          <div className="price">R$ 29</div>
          <div className="price-note">
            pagamento único • acesso imediato • produto digital
          </div>
          <a className="btn" href={checkoutUrl}>QUERO MEU E-BOOK AGORA</a>
          <div className="micro">
            Você será direcionado para a Amazon.
          </div>
        </div>
      </div>
    </section>
  );
}
