"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import userMack from "../../../assets/contacts/userMac.svg";
import { contact } from "@/constants/contacts";

const Socialmedia = () => {
  return (
    <section className="pt-[100px]">
      <div className="container">
        <div className="flex flex-col">
          <h1 className=" font-black text-[50px]  max-lg:text-[40px] max-sm:text-[30px] w-full text-center mb-[50px] text-[var(--text-colors)]">
            Connect With Me
          </h1>
          <ul className="flex  items-center flex-wrap justify-center gap-x-4 gap-y-4">
            {contact.map((item) => (
              <li
                key={item.name}
                className={
                  "flex items-center gap-x-3 px-[40px] py-3 rounded-full font-medium hover:opacity-75 hover:scale-110 transition-all duration-300 cursor-pointer bg-white shadow-lg border"
                }
              >
                <Image src={item.icon} alt={item.name} width={40} height={40} />
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div className="w-full flex  items-center justify-center  mt-[40px]">
            <Image
              src={userMack}
              alt="imgage"
              width={350}
              height={200}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socialmedia;
