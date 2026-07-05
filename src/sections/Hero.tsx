import profileImage from "@/assets/images/ravi-profile-avatar.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "../components/HeroOrbit";

const metrics = [
  "Software Development Engineer @ Autodesk",
  "10+ Projects Built",
  "6+ Production Technologies",
  "B.Tech CSE, NSUT",
];

export const HeroSection = () => {

  return (
    <div className="min-h-screen flex flex-col relative z-0 overflow-x-clip pt-16 pb-6">
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-20 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <div className="relative size-[152px] md:size-[168px] rounded-full ring-4 ring-white overflow-hidden bg-white shadow-lg">
            <Image
              src={profileImage}
              alt="Ravi Pandey"
              fill
              className="object-cover object-center scale-[0.96]"
              priority
              sizes="(max-width: 768px) 152px, 168px"
            />
          </div>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg mt-4">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
            </span>
            <div className="text-sm font-medium">Software Development Engineer @ Autodesk</div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-6">
          <h1 className="font-serif text-3xl md:text-5xl text-center tracking-wide">
            Hi, I&apos;m Ravi Pandey.
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Software Development Engineer at Autodesk building scalable backend systems and cloud-native platforms. Interested in distributed systems, AI developer tools, and data infrastructure.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <a
            href="#footer"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl font-semibold"
          >
            <span>👋</span>
            <span>Let&apos;s Connect</span>
          </a>
        </div>
      </div>

      <div className="container mt-auto pt-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-sm text-white/60">
            {metrics.map((metric, index) => (
              <span key={metric} className="inline-flex items-center gap-3">
                {index > 0 && (
                  <span className="text-white/25 hidden sm:inline" aria-hidden="true">
                    •
                  </span>
                )}
                <span>{metric}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
