"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import Tailwind from "@/assets/icons/tailwind-svgrepo-com.svg";
import NextJs from "@/assets/icons/next-js-svgrepo-com.svg";
import NodeJs from "@/assets/icons/node-js-svgrepo-com.svg";
import Framer from "@/assets/icons/framer-svgrepo-com.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import api from "@/assets/icons/api-page-svgrepo-com.svg";
import express from "@/assets/icons/ex-kernel-manager-svgrepo-com.svg";
import mongoDB from "@/assets/icons/mongodb-svgrepo-com.svg";
import mysql from "@/assets/icons/mysql-svgrepo-com .svg";
import php from "@/assets/icons/php-elephant-svgrepo-com.svg";
import python from "@/assets/icons/python-svgrepo-com.svg";
import typescript from "@/assets/icons/typescript-svgrepo-com.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: Tailwind,
  },
  {
    title: "Next.Js",
    iconType: NextJs,
  },
  {
    title: "Framer Motion",
    iconType: Framer,
  },
  {
    title: "Node.Js",
    iconType: NodeJs,
  },
  {
    title: "API",
    iconType: api,
  },
  {
    title: "Express",
    iconType: express,
  },
  {
    title: "MongoDB",
    iconType: mongoDB,
  },
  {
    title: "MySQL",
    iconType: mysql,
  },
  {
    title: "PHP",
    iconType: php,
  },
  {
    title: "Python",
    iconType: python,
  },
  {
    title: "Typescript",
    iconType: typescript,
  }
]

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♀️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  }
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="pb-20 lg:py-28 mt-20 md:mt-28 lg:mt-10">
      <div className="container">
        <SectionHeader
          title="A Glimse Into My World"
          eyebrow="About Me"
          desciption="Learn more about who I am, what I do and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] overflow-hidden md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                desciption="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto -mt-2 md:-mt-6 lg:-mt-6">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                desciption="Explore the technologies and tools I use to craft exceptional
                 digital experiences."
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:50s]" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:25s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col overflow-hidden md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                desciption="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref=
              {constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div 
                  key={hobby.title} 
                  className="inline-flex items-center gap-2 px-6 
                  bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full 
                  py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage} alt="map"
                className="h-full w-full rounded-3xl object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 size-20 rounded-full
               after:content-[''] after:absolute after:inset-0 after:outline 
              after:outline-2 after:-outline-offset-2 after:rounded-full
              after:outline-gray-950/30">
                <div className="absolute inset-0 
                rounded-full from-emerald-300 to-sky-400 bg-gradient-to-r -z-20 animate-ping
                [animation-duration:2s]">
                </div>

                <div className="absolute inset-0 
                rounded-full from-emerald-300 to-sky-400 bg-gradient-to-r -z-10">
                </div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
