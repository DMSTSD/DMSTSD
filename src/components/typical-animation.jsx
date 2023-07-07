import React from "react";
import { Typewriter } from "react-simple-typewriter";

function TypicalAnimation() {
  return (
    <div className="pt-[14px]">
      <h1 className="flex justify-center text-2xl ">Hi, I am Tharuka!</h1>
      <p className="flex justify-center pt-6 pb-6">
        I'm a &nbsp;
        <span className="font-bold">
          <Typewriter
            words={[
              "UI UX designer 👲",
              "Illustrator 👺",
              "Developer 😎 (wannabe)",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </span>
      </p>
      <div className="flex justify-center">
        <p className="flex flex-col lg:leading-[1.2] lg:text-6xl sm:leading-[1] sm:text-4xl md:leading-[1] md:text-4xl">
          <span className="flex justify-center">
            I create value through design
          </span>
          <span className="flex justify-center">
            and illustration to elevate your
          </span>
          <span className="flex justify-center">company to a new level.</span>
        </p>
      </div>
      <div className="flex justify-center pt-20">
        <span className="font-light text-[14px]">Feature Projects</span>
      </div>
    </div>
  );
}

export default TypicalAnimation;
