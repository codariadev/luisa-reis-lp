import Image from "next/image";

export default function Section7() {
  return (
    <section className="bg-[#f0ece1] scroll-mt-24" id="sobre">
      <div className="section-container flex flex-col gap-8 lg:flex-row lg:gap-13.75">
        <div className="max-lg:w-full">
          <Image
            className="portrait"
            src="/profile.jpg"
            width={768}
            height={1376}
            alt="Foto de Luisa Reis"
          />
        </div>
        <div className="flex gap-4 flex-col max-lg:w-full">
          <div className="eyebrow">Quem criou este material</div>
          <h2 className="section-title max-w-full text-[clamp(30px,4vw,48px)] font-semibold">
            Olá, eu sou a Luisa Reis.
          </h2>
          <p className="section-subtitle text-left lg:text-justify">
            Com mais de 15 anos de experiência no campo de batalha das vendas,
            sou Luisa Reis, líder comercial experiente em conversão de leads e
            estruturação de processos. Minha missão é ajudar donos de negócios e
            equipes comerciais a substituírem o improviso por um método claro,
            previsível e fácil de executar no dia a dia. Acredito que vender com
            constância não depende de fórmulas mágicas nem de talentos natos,
            mas de atendimento ágil, diagnóstico preciso e follow-up
            consistente. Para ajudar você nessa jornada, reuni minha experiência
            prática no e-book Do Lead ao Cliente — um guia direto para você
            aplicar o que funciona e evitar os erros que custam caro. E, se
            quiser ir além e estruturar a sua operação de perto, agende uma
            consultoria personalizada com acompanhamento de resultados.
          </p>
        </div>
      </div>
    </section>
  );
}
