import React from "react";
import { NavLink } from "react-router-dom";
import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function SocialMedia() {
  return (
    <>
      <div className="flex flex-row justify-center mt-3 mb-10">
        <NavLink className="m-5" to="">
          <Linkedin size={20} color="#000" />
        </NavLink>
        <NavLink className="m-5" to="">
          <Facebook size={20} color="#000" />
        </NavLink>
        <NavLink className="m-5" to="">
          <Instagram size={20} color="#000" absoluteStrokeWidth />
        </NavLink>
      </div>
    </>
  );
}
