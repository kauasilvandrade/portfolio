import { ArrowRight } from "lucide-react";

type Props = {
  section: string;
  title: string;
};

export function LinkPrimary({ section, title }: Props) {
  return (
    <a
      href={section}
      className="border border-gold-100 text-gold-100 uppercase text-xs/tight px-6 py-3 flex gap-2"
    >
      {title} <ArrowRight size={16} />
    </a>
  );
}
