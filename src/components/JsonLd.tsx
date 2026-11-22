const SITE = "https://www.luisareis.com.br";

const faqItems: { question: string; answer: string }[] = [
  {
    question: "Preciso ter experiência em vendas?",
    answer:
      "Não. O livro é direto e prático, para quem vende o próprio negócio ou orienta um time e quer um processo claro, sem depender de talento nato.",
  },
  {
    question: "Esse material serve para pequenos negócios?",
    answer:
      "Sim. Foi escrito para empresários, donos de negócio, gestores e vendedores que precisam aproveitar melhor cada contato que recebem.",
  },
  {
    question: "É um curso?",
    answer:
      "Não. É um e-book digital, com capítulos objetivos e um apêndice de modelos, checklists e fichas para adaptar.",
  },
  {
    question: "Como receberei o material?",
    answer:
      "Após a confirmação do pagamento, o acesso deverá ser enviado pela plataforma de checkout utilizada na compra.",
  },
  {
    question: "Posso usar com minha equipe?",
    answer:
      "Sim. Há um capítulo sobre como orientar o time comercial, com processo, rotina e metas. Respeite as condições de uso definidas na oferta.",
  },
];

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Luisa Reis — Estratégia em vendas",
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE}/#organization` },
      author: { "@id": `${SITE}/#person` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Luisa Reis",
      url: SITE,
      email: "contato@luisareis.com.br",
      logo: `${SITE}/icon.png`,
      sameAs: [
        "https://www.instagram.com/lrluisareis",
        "https://www.linkedin.com/in/luisadosreisdasilva",
      ],
      founder: { "@id": `${SITE}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Luisa Reis",
      jobTitle: "Especialista em estratégia em vendas",
      url: SITE,
      email: "contato@luisareis.com.br",
      image: `${SITE}/profile.jpg`,
      sameAs: [
        "https://www.instagram.com/lrluisareis",
        "https://www.linkedin.com/in/luisadosreisdasilva",
      ],
      worksFor: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "Book",
      "@id": `${SITE}/#book`,
      name: "Do Lead ao Cliente: Como Converter",
      author: { "@id": `${SITE}/#person` },
      inLanguage: "pt-BR",
      bookFormat: "https://schema.org/EBook",
      image: `${SITE}/capa-ebook.png`,
      url: SITE,
      description:
        "E-book de Luisa Reis: um guia prático para melhorar o primeiro contato, organizar o follow-up e transformar os leads que você já tem em clientes pagantes.",
      publisher: { "@id": `${SITE}/#organization` },
      offers: {
        "@type": "Offer",
        price: "29.00",
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        url: `${SITE}/#oferta`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      url: `${SITE}/#duvidas`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

const jsonLd = JSON.stringify(graph).replace(/</g, "\\u003c");

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
