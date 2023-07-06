import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function NavLinks() {
  return (
    <>
      <Link
        className="ml-[25px] font-semibold hover:text-gray-500"
        to="2d-work"
      >
        2d work
      </Link>
      <Link
        className="ml-[25px] font-semibold hover:text-gray-500"
        to="/3d-work"
      >
        3d work
      </Link>
      <Link
        className="ml-[25px] font-semibold hover:text-gray-500"
        to="4th-work"
      >
        4th work
      </Link>
    </>
  );
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex w-1/3 md:w-3/4 justify-end">
        <div className="w-full hidden md:flex justify-start flex-row-reverse">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full p-6 md:hidden ">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
