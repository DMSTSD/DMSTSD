import Logo from "./logo";
import Nav from "./navbar";

const Header = () => {
  return (
    <header className="flex flex-wrap pt-10 pb-20 px-8 justify-between items-center max-w-[1440px] mx-auto">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
