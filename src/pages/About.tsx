// src/pages/About.tsx
import React from "react";
import { Button } from "../components/ui/Button";

import TeamPhoto from "@/assets/images/photos/team.png";
import FounderPhoto from "@/assets/images/photos/founder-1.jpg";
import LogoAnimationGif from "@/assets/images/logos/produsom_icon_gif_1.gif";
import Signatures from "@/assets/images/logos/produsom-LOGO-horizontal-original.png";

export const About: React.FC = () => {
  return (
    <main className="bg-dark-prussian min-h-screen pt-28 lg:pt-36 text-light">
      {/* Page Header */}
      <header className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-[0.2em] text-light mb-4">
          Nossa História
        </h1>
        <div className="w-24 h-1 bg-citrine mx-auto mt-2 rounded-full" />
      </header>

      {/* Section: The Founder */}
      <section className="py-10 lg:py-24 px-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 max-w-4xl">
          <div className="shrink-0">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl">
              <img
                src={FounderPhoto}
                alt="Éverton Wilbert Vieira"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Founder Metadata */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-2xl lg:text-3xl font-semibold text-light uppercase tracking-wide">
              Éverton Wilbert Vieira
            </h3>
            <p className="text-citrine text-sm uppercase lg:text-lg tracking-widest font-semibold">
              Fundador & Diretor Técnico
            </p>
            <p className="text-medium-light text-lg lg:text-[20px] font-light italic leading-relaxed">
              Nosso objetivo nunca foi apenas ligar caixas de som ou refletores,
              mas sim construir um experiências para que cada história seja
              contada de acordo com os desejos de cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Our History & Team */}
      <section className="py-12 lg:py-24 px-8 lg:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-2xl text-center lg:text-3xl font-semibold uppercase tracking-widest text-light">
              Criando Experiências Desde 2005
            </h2>

            <p className="text-medium-light leading-relaxed text-lg lg:text-[20px]">
              A Produsom nasceu da paixão por transformar eventos em momentos
              inesquecíveis. Atuando de forma marcante no mercado do sul do
              Brasil, nos especializamos em entregar alta performance técnica em
              iluminação, sonorização e estruturas completas para palcos.
            </p>

            <p className="text-medium-light leading-relaxed text-lg lg:text-[20px]">
              Há mais de 20 anos fazendo casamentos, festas de aniversário,
              formaturas e eventos corporativos com responsabilidade, atenção e
              equipamentos certos para o momento certo.
            </p>
            <p className="text-center text-light text-lg lg:text-[20px] leading-relaxed">
              Cada evento é unico! E é assim que tratamos nossos clientes.
            </p>
            <p className="text-medium-light leading-relaxed text-lg lg:text-[20px]">
              Nossa equipe é formada por especialistas em som e iluminação, além
              de montadores qualificados que garantem precisão, segurança e
              excelência estética do início ao fim de cada projeto.
            </p>
          </div>

          <div className="w-full lg:w-[45%] flex justify-center">
            <img
              src={TeamPhoto}
              alt="Equipe Produsom operando equipamentos"
              className="w-full max-w-md lg:max-w-none h-64 sm:h-80 lg:h-auto aspect-4/3 lg:aspect-auto object-cover rounded-md shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Section: Rebrand Evolution */}
      <section className="py-6 lg:py-32 bg-light px-8 lg:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Branding GIF */}
          <div className="lg:w-1/3 rounded-md pt-4">
            <img
              src={LogoAnimationGif}
              alt="Animação do desenho geométrico do ícone da Produsom"
              className="w-auto h-52 lg:h-58 object-contain rounded-sm opacity-97"
            />
          </div>
          {/* Right: Narrative */}
          <div className="space-y-5 lg:w-[70%] lg:px-2">
            <h2 className="text-2xl lg:text-3xl font-semibold uppercase tracking-wider text-dark-prussian">
              Reposicionamento
            </h2>
            <div className="w-12 h-1 bg-citrine rounded-full" />
            <p className="text-dark-prussian text-lg leading-relaxed font-light">
              Em 2024, passamos por uma renovação de nossa identidade visual
              para alinhar nossa imagem externa à precisão e alta tecnologia dos
              nossos equipamentos atuais.
            </p>
            <p className="text-dark-prussian text-lg leading-relaxed font-light">
              O novo símbolo foi desenhado unindo os conceitos de ondas sonoras,
              feixes de luz e a inicial da marca. O resultado reflete uma
              empresa madura, moderna e focada no futuro das experiências
              audiovisuais.
            </p>
          </div>
          <div className="pb-12 pt-5 rounded-md lg:w-[60%]">
            <img
              src={Signatures}
              alt="Assinatura logo horizontal da Produsom"
              className="w-auto h-30 object-contain rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Page CTA Footer block */}
      <section className="py-34 text-center px-8">
        <div className="container mx-auto max-w-3xl space-y-6">
          <h3 className="text-2xl lg:text-3xl font-semibold uppercase tracking-wider text-light">
            Conheça Nosso Trabalho
          </h3>
          <p className="text-medium-light max-w-md mx-auto font-light lg:text-lg">
            Confira na nossa galeria de eventos realizados e comprove a
            qualidade de nossa entrega.
          </p>
          <div className="pt-4">
            <Button to="/eventos">Ver Eventos Realizados</Button>
          </div>
        </div>
      </section>
    </main>
  );
};
