import { useState } from "react";
import Image from "next/image";
import Story from "@/components/ui/story";
import Link from "next/link";
import { Member } from "@/apis/types";
import { epochToDateStr } from "@/utils";
import { title } from "process";
import Event from "@/components/ui/event";
import { events, stories } from "@/mock/data.json";

const highlights = [
  {
    id: "highlight_id_1",
    title: "These 3 players are sure to blow you away",
    href: "#_story_id_1",
  },
  {
    id: "highlight_id_2",
    title: "The USVI team won the Bahamas tournament!",
    href: "#_story_id_1",
  },
  {
    id: "highlight_id_3",
    title: "Another win in the W column for the USVI team",
    href: "#_story_id_1",
  },
];

export default function MainFeed() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl md:px-10 py-10 mx-auto xl:px-0">
        <div className="flex flex-wrap mt-10 x_overflow-hidden x_h-[900px] ">
          <div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
            <div className="ml-2 mr-2 md:mr-4">
              <div className="pb-12">
                <Story story={stories[0]} />
              </div>
              <div className="grid grid-cols-12 gap-8">
                {stories.map((story, idx) => (
                  <Story key={idx} story={story} />
                ))}
              </div>
            </div>
            {/* TODO: implement infinite scrolling */}
            <div className="hidden mt-10 text-center">
              <button className="px-5 py-3 mt-5 text-sm font-medium tracking-widest text-white uppercase bg-green-400 rounded-lg">
                Load more articles
              </button>
            </div>
          </div>
          {/* Begining of Sidebar */}
          <div
            className="sticky top-24 self-start w-full mt-12 overflow-hidden
            md:w-2/6 lg:w-2/6 xl:w-2/6 md:mt-0 pb-12"
          >
            <div className="ml-2 mr-2 md:ml-4">
              <div className=" rounded-3xl bg-white shadow-md border-1 border-gray-100 p-6">
                <div className=" text-left">
                  <section>
                    <h2 className="mb-1 text-lg font-medium text-gray-900">
                      Upcomming events
                    </h2>
                  </section>

                  <section>
                    <ul className=" divide-y divide-gray-100">
                      {events.map((event, idx) => (
                        <li
                          key={idx}
                          className="flex justify-between gap-x-6 py-3"
                        >
                          <a href={event.name} className="flex">
                            <div className="flex min-w-0 gap-x-4">
                              <Event event={event} />
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section className="mb-4">
                    <a href="#_" className="text-sm underline text-blue-600">
                      More events
                    </a>
                  </section>
                  <section>
                    <div className="block text-xs italic text-gray-500">
                      Subscribe to stay up to date with the latest events.
                    </div>
                    {/* TODO: on click pop modal */}
                    <button
                      type="submit"
                      className="w-full py-3 mt-5 text-sm font-medium tracking-widest text-white 
                      bg-gradient-to-r from-blue-400 to-green-300 rounded-full"
                    >
                      Subscribe
                    </button>
                  </section>
                </div>
              </div>

              <div className="hidden first-letter:mt-12">
                <h2 className="mb-5 text-lg font-medium text-gray-900">
                  Highlights
                </h2>
                <ul>
                  {highlights.map((highlight, idx) => (
                    <li key={idx} className="mb-5">
                      <a href={highlight.href} className="flex">
                        <div className="flex flex-col items-start justify-center w-2/3 p-2">
                          <h3 className="mb-2 font-serif font-thin text-gray-900">
                            {highlight.title}
                          </h3>
                        </div>
                      </a>
                    </li>
                  ))}

                  <li className="mb-5">
                    <a href="#_" className="flex">
                      <div className="w-1/3 overflow-hidden rounded">
                        <Image
                          className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105"
                          src="/usvi-breakthrough.jpeg"
                          // layout="fill"
                          width={100}
                          height={100}
                          alt="Something about the image here just in case."
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-2/3 p-2">
                        <h3 className="mb-2 font-serif font-thin text-gray-900">
                          Take a Trip to The End of The World
                        </h3>
                        <span className="block text-xs font-thin text-gray-800">
                          January 05, 2021
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
