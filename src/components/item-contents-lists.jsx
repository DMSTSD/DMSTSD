import React from "react";
import ItemContent from "./item-content";

export default function ItemContentsLists() {
  const list = [
    {
      page_link: "/",
      image: "/smple-image.jpg",
    },
    {
      page_link: "/",
      image: "/smple-image.jpg",
    },
    {
      page_link: "/",
      image: "/smple-image.jpg",
    },
    {
      page_link: "/",
      image: "/smple-image.jpg",
    },
  ];
  return (
    <div className="flex w-full justify-center items-center px-8 py-8">
      <div
        className="xl:flex xl:flex-wrap xl:justify-between xl:gap-2 xl:max-w-[1280px]
      lg:flex lg:flex-wrap lg:justify-center lg:gap-2 lg:max-w-[1280px] 
      md:flex md:flex-wrap md:justify-center md:gap-2 md:max-w-[1280px]
      sm:flex sm:flex-wrap sm:justify-center sm:gap-2 sm:max-w-[1280px] "
      >
        {list.map((item) => (
          <ItemContent page_link={item.page_link} image={item.image} />
        ))}
      </div>
    </div>
  );
}
