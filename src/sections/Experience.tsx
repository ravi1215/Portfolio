import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import autodeskLogo from "@/assets/images/autodesk-logo.png";
import ericssonLogo from "@/assets/images/ericsson-logo.png";

const experiences = [
  {
    company: "Autodesk",
    logo: autodeskLogo,
    logoClassName: "bg-white",
    role: "Software Development Engineer",
    period: "Jan 2026 – Present",
    location: "Pune, India",
    isCurrent: true,
    summary: [
      "Started as a Software Development Engineer Intern and transitioned to a full-time Software Development Engineer.",
      "Building AI-powered developer tools, backend services, and cloud-native data platform solutions for Autodesk's engineering organization.",
    ],
    highlights: [
      "Built an AI-powered MCP server integrated with Autodesk Assistant, enabling conversational pipeline creation and developer workflows.",
      "Developed an Analytics Dashboard for production batch ingestion pipelines using React, TypeScript, and backend APIs.",
      "Contributed to backend services, metadata APIs, and large-scale data ingestion systems running on Autodesk's cloud platform.",
      "Worked across AWS, Airflow, Apache Iceberg, Snowflake, PySpark, Splunk, GitHub Actions, and CI/CD to support production engineering systems.",
    ],
    technologies: [
      "Python",
      "TypeScript",
      "React",
      "FastAPI",
      "AWS",
      "Airflow",
      "Apache Iceberg",
      "Snowflake",
      "PySpark",
      "Splunk",
      "GitHub Actions",
    ],
  },
  {
    company: "Ericsson",
    logo: ericssonLogo,
    logoClassName: "bg-white",
    role: "Software Engineering Intern",
    period: "Nov 2024 – Mar 2025",
    isCurrent: false,
    summary: [
      "Worked on cloud-native systems, distributed architectures, and 5G technologies as part of the Ericsson Edge Academia Program.",
    ],
    highlights: [
      "Selected among the Top 500 students across 10,000+ applicants from 8 APAC countries.",
      "Designed cloud-native architectures and proof-of-concepts for distributed data processing systems.",
      "Built simulations for 5G Core Network and Multi-access Edge Computing (MEC) environments.",
      "Authored High-Level Design (HLD) documents while exploring scalable microservice architectures.",
    ],
    technologies: [
      "Cloud Computing",
      "Microservices",
      "Distributed Systems",
      "5G Core",
      "MEC",
      "HLD",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <div id="experience" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Career"
          title="Experience"
          desciption="Production work at Autodesk and Ericsson"
          descriptionClassName="max-w-xl"
        />

        <div className="mt-12 lg:mt-20 max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-300 via-sky-400/50 to-transparent" />

          {/* Upward arrow at top */}
          <div className="absolute left-4 md:left-6 -translate-x-1/2 -top-2">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              className="text-emerald-300"
            >
              <path
                d="M6 0L11 6H7V16H5V6H1L6 0Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-12 pt-4">
            {experiences.map((experience, index) => (
              <div key={experience.company} className="relative pl-12 md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-8 -translate-x-1/2">
                  {experience.isCurrent ? (
                    <span className="relative flex size-4">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                      <span className="relative inline-flex size-4 rounded-full bg-emerald-300 ring-4 ring-gray-900" />
                    </span>
                  ) : (
                    <span className="relative flex size-3">
                      <span className="relative inline-flex size-3 rounded-full bg-sky-400/60 ring-4 ring-gray-900" />
                    </span>
                  )}
                </div>

                {/* Horizontal connector line */}
                <div className={`absolute top-[2.15rem] left-[1.5rem] md:left-[2rem] h-px w-5 md:w-7 ${
                  experience.isCurrent
                    ? "bg-emerald-300/40"
                    : "bg-sky-400/20"
                }`}
                />

                <Card className="p-6 md:p-8 lg:p-10">
                  {/* Header: Role + Logo */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className={`flex-shrink-0 rounded-lg ${experience.logoClassName} px-2.5 py-1.5`}>
                          <Image
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            width={experience.logo.width}
                            height={experience.logo.height}
                            className={`h-5 md:h-6 w-auto object-contain ${
                              experience.company === "Autodesk"
                                ? "max-w-[100px] md:max-w-[120px]"
                                : "max-w-[80px] md:max-w-[96px]"
                            }`}
                          />
                        </div>
                        {experience.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-300/10 text-emerald-300 border border-emerald-300/20">
                            <span className="size-1.5 rounded-full bg-emerald-300 animate-pulse" />
                            Present
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl mt-4">
                        {experience.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-sm text-white/50">
                        <span>{experience.period}</span>
                        {experience.location && (
                          <>
                            <span className="text-white/30">&bull;</span>
                            <span>{experience.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mt-6 space-y-3 border-l-2 border-emerald-300/20 pl-4">
                    {experience.summary.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm md:text-base text-white/60 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 flex items-center gap-2">
                      <span className="inline-block w-4 h-px bg-emerald-300/40" />
                      Highlights
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm md:text-base text-white/60 leading-relaxed"
                        >
                          <span className="mt-1.5 size-1.5 rounded-full bg-emerald-300/50 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 flex items-center gap-2">
                      <span className="inline-block w-4 h-px bg-sky-400/40" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-300/5 to-sky-400/5 border border-white/10 text-white/70 hover:border-emerald-300/30 hover:text-white/90 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Step label below card */}
                {index < experiences.length - 1 && (
                  <div className="mt-4 ml-1 text-xs font-medium uppercase tracking-widest text-white/20">
                    Previously
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom label */}
          <div className="pl-12 md:pl-16 mt-6 ml-1 text-xs font-medium uppercase tracking-widest text-white/20">
            Career start
          </div>
        </div>
      </div>
    </div>
  );
};
