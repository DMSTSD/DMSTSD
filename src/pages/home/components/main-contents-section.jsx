import React from "react";
import Content from "./content";

export default function MainContent() {
  const list = [
    {
      title: "Project 01",
      title_description:
        "This is the sample project created by DMSTS Dissanayake.",
      image: "/smple-image.jpg",
      page_link: "/",
      content_oder: 1,
    },
    {
      title: "Project 01",
      title_description:
        "This is the sample project created by DMSTS Dissanayake.",
      image: "/smple-image.jpg",
      page_link: "/",
    },
    {
      title: "Project 01",
      title_description:
        "This is the sample project created by DMSTS Dissanayake.",
      image: "/smple-image.jpg",
      page_link: "/",
      content_oder: 1,
    },
    {
      title: "Project 01",
      title_description:
        "This is the sample project created by DMSTS Dissanayake.",
      image: "/smple-image.jpg",
      page_link: "/",
    },
  ];
  return (
    <>
      <div className="pt-[130px] pb-[40px]">
        {list.map((item) => (
          <Content
            title={item.title}
            title_description={item.title_description}
            image={item.image}
            page_link={item.page_link}
            content_oder={
              Object.hasOwn(item, "content_oder") ? item.content_oder : null
            }
          />
        ))}

        {/* <Content
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
        /> */}
      </div>
    </>
  );
}
