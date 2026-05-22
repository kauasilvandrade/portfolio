import { LinkPrimary } from "../../components/LinkPrimary";

export function Header() {
  return (
    <header>
      <a href="#about">Kauã.</a>
      <nav>
        <ul>
          <li>Sobre</li>
          <li>Habilidades</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </nav>
      <LinkPrimary section="#about" title="Fale Comigo" />
    </header>
  );
}
