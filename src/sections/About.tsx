"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import { CardHeader } from "@/components/CardHeader";
import { motion } from "framer-motion";
import { useRef } from "react";

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
          title="Engineering Philosophy"
          eyebrow="About Me"
          desciption="I care about clear system design, thoughtful trade-offs, and code that teams can maintain and extend."
          descriptionClassName="max-w-2xl"
        />
        <p className="text-center md:text-lg text-white/60 mt-3 max-w-2xl mx-auto">
          Good engineering means understanding the problem first, choosing the simplest solution that holds up, and leaving things better than you found them.
        </p>
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="h-[320px] overflow-hidden md:col-span-1">
              <CardHeader
                title="My Reads"
                desciption="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto -mt-2 md:-mt-6 lg:-mt-6">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 flex flex-col overflow-hidden md:col-span-2">
              <CardHeader
                title="Beyond the Code"
                desciption="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
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
          </div>
        </div>
      </div>
    </div>
  );
};
