"use client";
import React from "react";
import { PinContainer } from "../ui/components/3d-pin";
import { movie_stream_tools } from "../constants/projects";
import Link from "next/link";
import movieStream from "../../assets/projects_images/movie-stream.png";
import Image from "next/image";

const MovieStream = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1000px]  w-full h-auto flex items-center justify-center bg-blue-700/25 py-4 rounded-xl max-md:flex-col-reverse">
        <div className=" flex flex-col gap-y-5 px-4 py-4">
          <h1 className="text-white font-bold text-xl">
            {movie_stream_tools.name}
          </h1>
          <div className="flex  items-center px-3 py-3 bg-purple-600/45  rounded-xl max-w-[400px]">
            <p className="text-neutral-300 text-sm  ">
              {movie_stream_tools.description}
            </p>
          </div>
          <div className="flex  gap-x-4 px-3 py-3">
            {movie_stream_tools.tools.map((tool, index) => (
              <p key={index} className="text-neutral-400">
                {tool}
              </p>
            ))}
          </div>
          <div className="flex items-center">
            {movie_stream_tools.links.map((link, index) => (
              <Link href={link.link} key={index}>
                <link.icon
                  size={30}
                  className="text-neutral-400 hover:text-white transition"
                />
              </Link>
            ))}
          </div>
        </div>

        <PinContainer
          title="https://movie-stream-inky.vercel.app/"
          href="https://movie-stream-inky.vercel.app/"
        >
          <div className="flex flex-col px-4 py-2 gap-y-4 ">
            <h1 className="text-white font-bold text-xl text-center ">
              {movie_stream_tools.name}
            </h1>
            <div className="flex items-center justify-center w-[200px] h-[200px]  rounded-xl overflow-hidden">
              <Image src={movieStream} alt="cover" className="w-full h-full" />
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
};

export default MovieStream;
