import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FC, ReactNode, useState } from "react";

import { IExperience } from "@/constants/experiense";
import Card from "./ExperienceCard";
interface HoverEffectProps {
  items: IExperience[];
  className?: string;
}

export const HoverEffect: FC<HoverEffectProps> = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid  py-10 w-full  ", className)} >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link}
          className="relative group  block p-2 h-full w-full "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-300 dark:bg-slate-800/[0.8] block  rounded-3xl z-10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card item={item} />
        </Link>
      ))}
    </div>
  );
};
