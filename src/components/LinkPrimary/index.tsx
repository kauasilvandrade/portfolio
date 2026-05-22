type Props = {
  section: string;
  title: string;
};

export function LinkPrimary({ section, title }: Props) {
  return <a href={section}>{title}</a>;
}
