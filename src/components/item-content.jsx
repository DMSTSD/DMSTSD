import React from "react";
import { NavLink } from "react-router-dom";

export default function ItemContent({ page_link, image }) {
  return (
    <div className="justify-self-start m-2">
      <NavLink to={page_link}>
        <img
          className="w-[400px] h-[400px] rounded-[30px]"
          src={image}
          alt=""
        />
      </NavLink>
    </div>
  );
}
