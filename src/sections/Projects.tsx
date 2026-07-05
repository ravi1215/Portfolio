import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { featuredProjects, otherProjects } from "@/data/projects";

export const ProjectsSection = () => {
  return (
    <section id="Project" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured Projects"
          desciption="Personal builds shipped end to end — from idea to demo."
          descriptionClassName="max-w-2xl"
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20 lg:overflow-clip">
          {featuredProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-6 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>Featured</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mt-3 text-sm md:text-base">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <hr className="border-t-2 border-white/5 mt-5" />
                  <ul className="flex flex-col gap-4 mt-5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-white text-gray-950 h-12 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                          <span>Live Demo</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="border border-white/15 h-12 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                          <span>GitHub</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </a>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:rounded-3xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 lg:mt-24">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
            Archive
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {otherProjects.map((project) => (
              <Card
                key={project.title}
                className="flex-shrink-0 w-56 p-4 hover:outline-emerald-300/30 transition-colors"
              >
                <div className="text-[10px] font-semibold uppercase tracking-widest text-emerald-300/80">
                  {project.year}
                </div>
                <h4 className="font-semibold text-sm mt-1 leading-snug">
                  {project.title}
                </h4>
                <p className="text-[11px] text-white/40 mt-1.5 line-clamp-2">
                  {project.tagline}
                </p>
                <p className="text-[10px] text-white/30 mt-2 truncate">
                  {project.techStack.join(" · ")}
                </p>
                <div className="flex gap-3 mt-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-[11px] font-medium text-white/50 hover:text-white/80"
                    >
                      Live
                      <ArrowUpRightIcon className="size-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-[11px] font-medium text-white/50 hover:text-white/80"
                    >
                      GitHub
                      <ArrowUpRightIcon className="size-3" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
