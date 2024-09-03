import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";


const testimonials = [
  {
    name: "Reva Kaushal",
    position: "Secretary Student Welfare @ NSUT",
    text: "Ravi is a very hardworking person who knows exactly what he's doing. His commitment and attention to detail make him a valuable asset to the team.",
    avatar: memojiAvatar4,
  },
  {
    name: "Sania Gupta",
    position: "TnP Coordinator @ Nsut",
    text: "Having been your colleague since the early days of semester one, I've always seen you as an optimistic and passionate individual. Your support as a friend is something I truly appreciate.",
    avatar: memojiAvatar2,
  },
  {
    name: "Tanisha Gupta",
    position: "Student @ NSUT",
    text: "Ravi's dedication and hard work are truly inspiring. He always finds a way to tackle challenges head-on and brings positive energy to the team. His contributions make a real difference.",
    avatar: memojiAvatar4,
  },
  {
    name: "Aditya Raj Singh",
    position: "Ml Head, Devcomm @ NSUT",
    text: "Ravi's commitment and drive are exceptional. He approaches every challenge with determination and a positive attitude, making a significant impact on the team. His enthusiasm and hard work are truly motivating.",
    avatar: memojiAvatar3,
  },
  {
    name: "Arpan Narula",
    position: "Student @ NSUT",
    text: "Ravi consistently demonstrates remarkable dedication and perseverance. His ability to face challenges with optimism and his positive influence on the team make him an invaluable member. His efforts greatly contribute to our success.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy People"
          title="What My Colleagues Say About Me"
          desciption="Don't just take my word for it.
          See what my colleagues have to say about my work."
        />
        <div className="mt-12 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
         py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
             {[...new Array(2)].fill(0).map((_,index) => (
              <Fragment key={index}>
              {testimonials.map(testimonial => (
                <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="max-h-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                </Card>
              ))}
              </Fragment>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};
