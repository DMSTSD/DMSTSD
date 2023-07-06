import React from "react";
import { NavLink } from "react-router-dom";
import Content from "./content";

export default function MainContent() {
  return (
    <>
      <div className="pt-[130px] pb-[40px]">
        <Content
          title="Project 01"
          title_description="This is the sample project created by DMSTS Dissanayake."
          image="/smple-image.jpg"
          page_link="/"
          content_oder={1}
        />
        <Content
          title="Project 01"
          title_description="This is the sample project created by DMSTS Dissanayake."
          image="/smple-image.jpg"
          page_link="/"
        />
        <Content
          title="Project 01"
          title_description="This is the sample project created by DMSTS Dissanayake."
          image="/smple-image.jpg"
          page_link="/"
          content_oder={1}
        />
        <Content
          title="Project 01"
          title_description="This is the sample project created by DMSTS Dissanayake."
          image="/smple-image.jpg"
          page_link="/"
        />
      </div>
    </>
  );
}
