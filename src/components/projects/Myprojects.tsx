"use client";
import { projects } from "@/constants/projects";

import Image from "next/image";
import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import { FaLink } from "react-icons/fa6";
import Link from "next/link";
import { Modal } from "antd";
const MyProjects = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [about, setAbout] = useState<string>("");

  const openInfoModal = (value: string) => {
    setModal(true);
    setAbout(value);
  };

  const closeModal = () => setModal(false);
  return (
    <section className="pt-[30px]" id="projects ">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-4  ">
            {projects.map((item) => (
              <div
                key={item.name}
                className="flex items-center p-[20px]  rounded-xl bg-blue-950 gap-x-[30px] max-lg:flex-col"
              >
                <div className="w-full h-[500px]  max-sm:h-[300px] relative  rounded-xl overflow-hidden bg-blue-600   ">
                  <div className="flex items-center max-lg:justify-center  ">
                    <Image
                      src={item.image1}
                      alt={item.name}
                      className="rounded-xl w-full h-full "
                    />
                    <div className="absolute w-full h-full bg-black/35 top-0 left-0  hover:bg-transparent transition-all duration-300"></div>
                  </div>
                </div>
                <div className=" w-full flex flex-col gap-y-5 max-lg:pt-[30px]">
                  <div className="flex items-center justify-between">
                    <h1 className="text-white text-[60px] font-bold max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px] ">
                      {item.name}
                    </h1>
                    <BsInfoCircleFill
                      size={60}
                      className="text-white text-[60px] hover:opacity-75 transition-all duration-300"
                      onClick={() => openInfoModal(item.about_project)}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-y-4">
                    <h1 className="text-white  text-[20px] font-semibold">
                      Website Type
                    </h1>
                    <span className="text-[20px] text-white  font-bold  bg-blue-500/20 px-5 py-2 rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <p className="text-white  text-[20px] font-semibold">
                      Technologies I have used
                    </p>
                    <ul className="flex flex-wrap gap-2 ">
                      {item.technologiest.map((el) => (
                        <li
                          key={el.name}
                          className="flex items-center gap-x-2 px-4 py-2 rounded-full bg-white"
                        >
                          <Image
                            src={el.icon}
                            alt={el.name}
                            width={30}
                            height={30}
                          />
                          <p className="text-black  text-[20px] font-semibold">
                            {el.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={item.link}
                    className="flex items-center gap-x-[20px] px-5 p-2 rounded-full text-white font-bold border hover:bg-white hover:text-black group transition-all duration-300  "
                  >
                    <FaLink
                      size={50}
                      className="text-white group-hover:text-black"
                    />
                    <p className="text-[30px] max-sm:text-[20px]">
                      {item.name}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {
          <Modal open={modal} footer={null} onCancel={closeModal}>
            <div className="w-full h-full p-[20px] ">
              <p>{about}</p>
            </div>
          </Modal>
        }
    </section>
  );
};

export default MyProjects;
