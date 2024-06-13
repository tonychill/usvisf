import { FC } from "react";
import Image from "next/image";
import { Story as StoryData } from "@/apis/types";

export interface StoryProps {
  story: StoryData;
}

const Story: FC<StoryProps> = ({
  story: { id, isMain, title, description, date, mainImageUrl, author },
}) => {
  return (
    <div className="col-span-12 md:col-span-6">
      <a
        href="#_"
        className="relative block w-full overflow-hidden h-80 rounded-xl"
      >
        <Image
          src={mainImageUrl}
          className="absolute object-cover object-center w-full h-full transition duration-300 
          ease-out transform scale-100 group-hover:scale-105"
          width={700}
          height={475}
          alt="Something about the image here just in case."
        />
      </a>
      {isMain && (
        <a href="#_" className="hidden _block relative  mt-4 mb-1 ">
          <p
            className="text-xs font-semibold tracking-wide uppercase bg-gradient-to-r 
            from-blue-400 to-green-300  text-transparent bg-clip-text w-auto"
          >
            Highlights
          </p>
        </a>
      )}

      <h2 className="mt-4 mb-1 text-lg text-gray-900">
        <a href="#_">{title}</a>
      </h2>
      <span className="block mb-2 text-xs font-normal text-gray-800">
        <span className="ml-1 font-medium text-gray-400">
          {`@${author.firstName} on ${date}`}
        </span>
      </span>
      <p className="text-gray-800">
        <span className="hidden line-clamp-3">{description}</span>
        <a
          href={`/stories/${id}`}
          className="inline-flex items-center text-sm text-gray-500 underline"
        >
          <span>Continue Reading</span>
          <svg
            className="w-3 h-3 ml-1 transform -rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </p>
    </div>
  );
};

export default Story;
