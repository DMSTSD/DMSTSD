import React from "react";
import SecondItemContentsLists from "./components/2d-work-item-contents-list";
import Footer from "../../components/footer";

export default function SecondWork() {
  return (
    <>
      <div className="min-h-screen w-full">
        <SecondItemContentsLists />
        <Footer />
      </div>
    </>
  );
}
