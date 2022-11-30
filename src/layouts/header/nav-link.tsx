import Link from "next/link";

type Props = {
  text: string;
  path: string;
};

function NavLink({ text, path }: Props) {
  return (
    <Link href={path} className="text-headline uppercase text-secondary">
      {text}
    </Link>
  );
}

export default NavLink;
