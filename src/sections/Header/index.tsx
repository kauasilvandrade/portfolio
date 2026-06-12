import { LinkPrimary } from "../../components/LinkPrimary";

export function Header() {
  return (
    <header className="mb-10 border-b border-b-[#ffffff0d] py-4">
      <div className="container flex justify-between items-center">
        <a
          href="#about"
          className="text-lg italic font-cormorant font-extralight"
        >
          Kauã.
        </a>
        <nav>
          <ul className="flex gap-10">
            <li>
              <a
                href="#about"
                className="uppercase text-gray-100 text-xs font-medium tracking-[2px]"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="uppercase text-gray-100 text-xs font-medium tracking-[2px]"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="uppercase text-gray-100 text-xs font-medium tracking-[2px]"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="uppercase text-gray-100 text-xs font-medium tracking-[2px]"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <LinkPrimary section="#about" title="Fale Comigo" />
      </div>
    </header>
  );
}
