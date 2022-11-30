import Link from "next/link";
import Image from "next/image";

import appLogo from "@/assets/images/app-logo.png";
import appLogoLg from "@/assets/images/app-logo-lg.png";

type Props = {
  isLarge?: boolean;
};

function AppLogo({ isLarge }: Props) {
  const logo = isLarge ? appLogoLg : appLogo;

  return (
    <Link href="/">
      <Image src={logo} alt="App Logo" />
    </Link>
  );
}

export default AppLogo;
