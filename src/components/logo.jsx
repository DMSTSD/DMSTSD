import { NavLink } from "react-router-dom";
import Spline from "@splinetool/react-spline";

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

// export function UserAvatarr() {
//   return (
//     <>
//       <div className="bg-cover bg-center">
//         <Spline scene="https://prod.spline.design/jx758kg6GUR6DZ8g/scene.splinecode" />
//       </div>
//     </>
//   );
// }
