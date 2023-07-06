import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <NavLink to="/">
        <div className="justify-items-start p-2">
          <img className="w-10 h-10" src="./open-source.png" alt="Logo" />
        </div>
      </NavLink>
    </>
  );
};

export default Logo;

export const UserAvatar = () => {
  return (
    <div className="flex justify-center w-full">
      <img
        className="w-[120px] h-[120px] rounded-full"
        src="./smple-image.jpg"
        alt="DMSTS Dissanayake"
      />
    </div>
  );
};
