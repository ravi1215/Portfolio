
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import trie from "@/assets/images/dna.jpg";
import chat from "@/assets/images/chatbot.png";
import seo from "@/assets/images/seo.png";
import DNA from "@/assets/images/DNA.png";

const portfolioProjects = [
  {
    company: "Ravi",
    year: "2024",
    title: "AI-SEO-Page",
    results: [
      { title: "Built with React, Next.js, and Tailwind CSS, featuring interactive Framer Motion animations and Lottie icons." },
      { title: "Ensured seamless user experience across devices with modern UI/UX practices." },
      { title: "Optimized for SEO and accessibility, adhering to web standards." },
    ],
    link: "https://ai-seo-page-wine.vercel.app/",
    image: aiStartupLandingPage,
  },
  {
    company: "Ravi",
    year: "2024",
    title: "DNA Sequence Trie Search",
    results: [
      { title: "Implements a Trie structure to manage DNA sequences from the latest NCBI Homo sapiens dataset." },
      { title: "Supports exact and approximate matching with up to 2 mismatches for added flexibility." },
      { title: "Features both command-line and QT-based graphical user interfaces for seamless interaction and search functionality."" },
    ],
    link: "https://github.com/ravi1215/DNA-Sequence-trie-search",
    image: DNA,
  },
  {
    company: "Ravi",
    year: "2023",
    title: "SEOptimizer",
    results: [
      { title: "Crafted a user-friendly and aesthetically pleasing frontend design." },
      { title: "Ensures optimal viewing experience across various devices and screen sizes." },
      { title: " Incorporates contemporary design trends for a polished and professional look." },
      { title: "Designed with scalability in mind, allowing for easy expansion and integration of additional features." },
    ],
    link: "https://ravi1215.github.io/SEOtimizer/",
    image: seo,
  },
  {
    company: "Innovate",
    year: "2022",
    title: "Gyandhan Chatbot",
    results: [
      { title: "Assists users in navigating study abroad options and education loan processes with ease." },
      { title: "Provides consistent information across multiple platforms for broader accessibility." },
      { title: "Enhances user engagement through a responsive chatbot interface." },
      { title: "Simplifies complex choices for study abroad and loan options." },
    ],
    link: "https://gyandhan-emi-calculator.vercel.app/",
    image: chat,
  }, 
];

export const ProjectsSection = () => {
  return (
    <section id="Project" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          desciption=" See how i transformed concepts into engaging digital experiences."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20 lg:overflow-clip">
          {portfolioProjects.map((project,projectIndex) => (
              <Card 
                key={project.title}
                className="px-6 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `calc(64px + ${projectIndex * 40}px)`
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400
                  inline-flex font-bold uppercase tracking-widest text-sm
                  text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-5 md:mt-5">
                      {project.results.map((result) => (
                        <li className="flex gap-2 text-sm md:text-base text-white/50">
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold
                    inline-flex items-center justify-center gap-2 mt-4">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-0 md:-mb-0 lg:mt-0 
                    lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:rounded-3xl"
                    />
                  </div>
                </div>
              </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
