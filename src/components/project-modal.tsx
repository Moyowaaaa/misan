/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Markdown from "react-markdown";

const ProjectModal = ({
  openModal,
  setOpenModal,
  selectedProject,
}: //   selectedProject
{
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProject: any;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  console.log({ selectedProject });

  useOnClickOutside(ref, () => setOpenModal(false));

  return (
    <>
      <div className="fixed h-screen w-full top-0 left-0 flex items-center justify-center z-10">
        <div className="overlay h-full w-full bg-white fixed -z-10"></div>

        <div
          className="content relative  w-full lg:w-[60%]  bg-white h-max relative z-50 p-4"
          ref={ref}
        >
          <div
            className="h-max w-max absolute right-10 cursor-pointer"
            onClick={() => setOpenModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="h-[30rem] w-full flex gap-4 overflow-auto ">
            {Array.from(selectedProject?.images)?.map((image, index) => (
              <img
                // src={image}
                src={image as any}
                alt=""
                key={index}
                height={undefined}
                width={undefined}
                className="h-full object-contain w-full  "
              />
            ))}
          </div>
          <div className="space-y-4">
            <h1 className="mt-1 text-3xl font-bold  text-black underline">
              {selectedProject?.title}
            </h1>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {selectedProject?.description}
            </Markdown>

            <div className="mt-2 flex flex-wrap gap-1 ">
              {selectedProject?.technologies?.map((tag: string) => (
                <Badge
                  className="px-1 py-0 text-[10px] text-black dark:text-white"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {selectedProject?.links && selectedProject?.links.length > 0 && (
              <div className="flex flex-row flex-wrap items-start gap-1">
                {selectedProject?.links?.map((link: any, idx: number) => (
                  <Link href={link?.href} key={idx} target="_blank">
                    <Badge
                      key={idx}
                      className="flex gap-2 px-2 py-1 text-[10px]"
                    >
                      {link.icon}
                      {link.type}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
