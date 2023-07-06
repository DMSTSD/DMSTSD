import React from "react";
import { NavLink } from "react-router-dom";

export default function MainContent() {
  return (
    <>
      <div className="flex flex-row justify-center pt-[120px] max-w-[1440px] mx-auto">
        <div className="m-6">
          <img className="w-[300px] h-[300px]" src="./smple-image.jpg" alt="" />
        </div>
        <div className="m-6">
          <div className="flex flex-col justify-center w-[300px] h-[300px]">
            <p className="text-[32px] font-normal">Project name</p>
            <p className="text-base font-normal mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              aliquid !
            </p>
            <NavLink to="">
              <p className="flex flex-row mt-8 text-[#2997FF]">
                Lern more{" "}
                <span>
                  <img className="mx-5" src="/smple-image.jpg" alt="" />
                </span>
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
