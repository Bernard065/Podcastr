import { PodcastCardProps } from "@/types";
import Image from "next/image";
import React from "react";

const PodcastCard = ({ podcast }: PodcastCardProps) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          src={podcast.imgURL}
          width={174}
          height={174}
          alt={podcast.title}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="truncate font-bold text-white-1">{podcast.title}</h1>
          <h2 className="text-12 truncate font-normal text-white-4">
            {podcast.description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
