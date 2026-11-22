import Button from "@/components/PrimaryBtn";
import Image from "next/image";

export default function Section1() {
  return (
    <div className="section-gradient scroll-mt-50" id="inicio">
      <section className="section-container">
        <div className="flex flex-col gap-5">
          <h1 className="section-title text-[clamp(36px,10vw,42px)] lg:text-[clamp(42px,6vw,70px)] font-bold">
            Do Lead ao Cliente:<br></br>Como Converter. Transforme contatos
            em clientes.
          </h1>

          <p className="section-subtitle max-w-162.5 text-[17px] lg:text-[20px] leading-[1.55] text-[#53647c]">
            Um guia direto para melhorar o primeiro contato, organizar o
            follow-up e conduzir a conversa com método — aproveitando melhor os
            leads que já chegaram até você.
          </p>

          <Button href="#oferta">QUERO APRENDER A CONVERTER MELHOR →</Button>

          <div className="mt-3 text-[13px] lg:text-[11px] text-[#b08d57]">
            Acesso digital • Leitura prática • Ações para a mesma semana
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative flex aspect-3/4 w-[min(260px,70vw)] lg:w-[min(350px,80vw)] flex-col ">
            <Image
              className="w-full h-auto drop-shadow-[0_05px_10px_rgba(0,0,0,0.35)]"
              src="/capa-ebook.png"
              width={986}
              height={1474}
              alt="Capa do e-book Do Lead ao Cliente: Como Converter"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
