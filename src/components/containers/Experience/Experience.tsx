import { HoverEffect } from "@/components/ui/components/card-hover-effect";
import { experienses } from "@/constants/experiense";
import React from "react";

const Experience = () => {
  return (
    <section className="mt-[100px] " id="experience">
      <div className="container">
        <div className=" flex flex-col  ">
          <h1 className=" font-black text-[50px] max-lg:text-[40px] max-md:text-[30px] w-full text-center text-[var(--text-colors)]">
            Experience
          </h1>
          <div className="max-w-5xl mx-auto ">
            <HoverEffect className="grid-cols-1" items={experienses} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
