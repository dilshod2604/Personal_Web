"use client";

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { CiUser } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoPhonePortraitOutline, IoSendOutline } from "react-icons/io5";
import userMac2 from "../../../assets/contacts/form/userMac2.svg";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

interface InputValue {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Form = () => {
  const [resize, setResize] = useState(false);
  const [success, setSuccess] = useState(false);
  const { register, reset, handleSubmit } = useForm<InputValue>();

  useEffect(() => {
    const handleResize = () => {
      setResize(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const TG_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const CHAD_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAD_ID;

  const botsMessageModel = (data: InputValue) => {
    let messageTG = `Name: <b>${data.fullName}</b>\n`;
    messageTG += `Email: <b>${data.email}</b>\n`;
    messageTG += `Phone Number: <b>${data.phone}</b>\n`;
    messageTG += `Subject: <b>${data.subject}</b>\n`;
    messageTG += `Message: <b>${data.message}</b>\n`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<InputValue> = async (value) => {
    try {
      const { data } = await axios.post(
        `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,
        {
          chat_id: CHAD_ID,
          parse_mode: "html",
          text: botsMessageModel(value),
        }
      );
      if (data.ok === true) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
        reset();
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white border rounded-[36px] p-5 shadow-xl relative">
      <h1 className=" font-black text-[50px] w-full text-center mb-[50px] max-lg:text-[40px] max-md:text-[30px]">
        Connect Me
      </h1>
      {success && <p>The message was sent successfully!</p>}
      <form
        className="flex flex-col gap-y-5 mt-[10px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" w-full flex items-center gap-x-5 max-md:flex-col gap-y-5">
          <div className=" w-full flex items-center px-5 py-4 rounded-full gap-x-3 bg-neutral-100 hover:ring-1 hover:ring-[#5e07ff]">
            <CiUser size={25} className="text-black" />
            <input
              type="text"
              placeholder="Full Name *"
              {...register("fullName", { required: true })}
              className="w-full h-[40px] p-3 rounded-full bg-neutral-100 focus:outline-none placeholder:text-[20px] "
            />
          </div>
          <div className=" w-full flex items-center px-5 py-4 rounded-full gap-x-3 bg-neutral-100 hover:ring-1 hover:ring-[#5e07ff]">
            <MdOutlineMailOutline size={25} className="text-black" />
            <input
              type="text"
              {...register("email", { required: true })}
              className="w-full  h-[40px] p-3 rounded-full bg-neutral-100 focus:outline-none placeholder:text-[20px]"
              placeholder="Email *"
            />
          </div>
        </div>
        <div className=" w-full flex items-center gap-x-5 max-md:flex-col gap-y-5">
          <div className=" w-full flex items-center px-5 py-4 rounded-full gap-x-3 bg-neutral-100 hover:ring-1 hover:ring-[#5e07ff]">
            <IoPhonePortraitOutline size={25} className="text-black" />
            <input
              type="tel"
              placeholder="Phone *"
              {...register("phone", { required: true })}
              className="w-full h-[40px] p-3 rounded-full bg-neutral-100 focus:outline-none placeholder:text-[20px] "
            />
          </div>
          <div className=" w-full flex items-center px-5 py-4 rounded-full gap-x-3 bg-neutral-100 hover:ring-1 hover:ring-[#5e07ff]">
            <input
              type="text"
              {...register("subject", { required: true })}
              className="w-full  h-[40px] p-3 rounded-full bg-neutral-100 focus:outline-none placeholder:text-[20px]"
              placeholder="Subject *"
            />
          </div>
        </div>
        <div className="w-full p-5 rounded-3xl  border bg-neutral-100 hover:ring-1 hover:ring-[#5e07ff] ">
          <textarea
            rows={7}
            {...register("message", { required: true })}
            placeholder="Message *"
            className="p-3 rounded-[20px] w-full   bg-neutral-100 focus:outline-none placeholder:text-[20px] "
          />
        </div>
        <button
          type="submit"
          className="  max-w-[200px] flex items-center justify-center  gap-x-4 px-[40px] py-4  text-2xl hover:ring-[#5e07ff] font-bold border  rounded-full bg-gradient-to-r from-blue-500 to-purple-500  text-white transition-all hover:from-blue-700 hover:to-purple-700"
        >
          Send
          <IoSendOutline size={30} />
        </button>
      </form>
      <div className=" absolute bottom-[-50px] right-0">
        <Image
          src={userMac2}
          width={resize ? 200 : 250}
          height={resize ? 150 : 200}
          alt="userMac2"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Form;
