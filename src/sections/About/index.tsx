import { LinkPrimary } from "../../components/LinkPrimary";
import { LinkSecondary } from "../../components/LinkSecondary";

export function About() {
  return (
    <section id="#about">
      <div className="container">
        <div>
          <span></span>
          <span>Disponível para Projetos</span>
        </div>
        <h1>
          Olá, eu sou <br /> Kauã da Silva
        </h1>
        <p>
          Olá, meu nome é Kauã e tenho 19 anos. Atualmente estou cursando o 3°
          semestre de Ciência da Computalção. Sou desenvolvedor frontend
          apaixonado por criar interfaces elegantes e experiências digitais que
          encantam. Especializado em React, TypeScript e design systems
          modernos.
        </p>
        <div>
          <LinkPrimary section="#projects" title="Ver Projetos" />
          <LinkSecondary section="#contact" title="Entrar em Contato" />
        </div>
        <div>
            <div>
                <span>10+</span>
                <span>Projetos</span>
            </div>   
            <div>
                <span>8+</span>
                <span>Tecnologias</span>
            </div>   
            <div>
                <span>3 anos</span>
                <span>Experiência</span>
            </div>   
        </div>
      </div>
    </section>
  );
}
