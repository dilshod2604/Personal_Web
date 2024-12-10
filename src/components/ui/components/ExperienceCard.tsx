import { IExperience } from "@/constants/experiense";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { GoDotFill } from "react-icons/go";
interface CardProps {
  item: IExperience;
}
const Card: FC<CardProps> = ({ item }) => {
  return (
    <div className=" w-full rounded-2xl bg-blue-950 z-40 relative p-[30px] flex flex-col gap-y-4 ">
      <div className="flex items-center justify-between max-sm:flex-col  gap-y-4">
        <Link
          href="#"
          className="flex items-center justify-between max-w-[500px] rounded-full bg-gradient-to-r from-blue-600 to-purple-700 py-4 px-[40px] max-md:px-[20px]"
        >
          <p className="text-[20px] max-sm:text-[16px] text-white font-bold max-sm:text-center">
            {item.company}
          </p>
        </Link>
        <span className="flex items-center justify-center rounded-full bg-white text-neutral-500 px-[40px] py-2 max-sm:px-[20px]">
          <p className="font-bold max-sm:text-[14px]">{item.date}</p>
        </span>
      </div>
      <div className="flex items-center gap-x-4">
        <Image
          src={item.image}
          alt="image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="text-white text-[25px] font-bold max-sm:text-[16px]">
          {item.speciality}
        </p>
      </div>
      <ul className=" w-full flex flex-col gap-y-2 list-disc">
        {item.buletPoints.map((el, index) => (
          <li key={index} className="flex items-start  gap-x-2 ">
            <GoDotFill  className="text-white shrink-0 " />
            <p className="text-[18px] text-neutral-200 max-sm:text-[14px]">
              {el.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Card;
