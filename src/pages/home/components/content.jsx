import React from "react";
import { NavLink } from "react-router-dom";

export default function Content({
  title,
  title_description,
  image,
  page_link,
  content_oder,
}) {
  return (
    <>
      <div
        className={`flex ${
          content_oder === 1 ? "flex-row" : "flex-row-reverse"
        } justify-center py-[50px] max-w-[1440px] mx-auto`}
      >
        <div className="m-6">
          <img
            className="w-[440px] h-[630px] rounded-[30px]"
            src={image}
            alt=""
          />
        </div>
        <div className="my-8 ml-12 mr-8">
          <div className="flex flex-col justify-center w-[440px] h-[630px]">
            <p className="text-[38px] font-normal text-[#222222]">{title}</p>
            <p className="text-base font-normal mt-8 text-[#888888]">
              {title_description}
            </p>
            <NavLink to={page_link}>
              <p className="flex flex-row mt-8 text-[#2997FF] font-bold">
                Learn more{" "}
                <span>
                  <img
                    className="mx-2 mt-[2px]"
                    src="/chevron-right.svg"
                    alt=""
                  />
                </span>
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
