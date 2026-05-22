import { LinkPrimary } from "../../components/LinkPrimary";

export function Header() {
  return (
    <header>
      <a href="#about">Kauã.</a>
      <nav>
        <ul>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
      <LinkPrimary section="#about" title="Fale Comigo" />
    </header>
  );
}
