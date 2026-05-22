type Props = {
  section: string;
  title: string;
};

export function LinkSecondary({ section, title }: Props) {
  return <a href={section}>{title}</a>;
}
