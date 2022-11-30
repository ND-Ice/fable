import Link from "next/link";

type Props = {
  text: string;
  path: string;
};

function NavBottomLink({ text, path }: Props) {
  return (
    <Link
      href={path}
      className="block whitespace-nowrap text-caption-1 text-white"
    >
      {text}
    </Link>
  );
}

export default NavBottomLink;
