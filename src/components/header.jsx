import Logo from "./logo";
import Nav from "./navbar";

const Header = () => {
  return (
    <header className="flex flex-wrap p-8 justify-between">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
