import React from "react";
import { NavLink } from "react-router-dom";
import SocialMedia from "./social-media";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-5">
        <div className="">
          <p className="font-light text-6xl m-8">Lets work together.</p>
        </div>
        <div className="mt-10">
          <NavLink
            className="font-semibold text-lg underline underline-offset-3"
            to=""
          >
            dktharukadk@gmail.com
          </NavLink>
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
