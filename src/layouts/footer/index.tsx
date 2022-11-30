import NavBottom from "./nav-bottom";
import Subscribe from "./subscribe";

function Footer() {
  return (
    <div className="space-y-12 bg-secondary p-5 py-10 md:px-14 lg:flex lg:flex-row-reverse lg:justify-between lg:gap-10 lg:space-y-0">
      <Subscribe />
      <NavBottom />
    </div>
  );
}

export default Footer;
