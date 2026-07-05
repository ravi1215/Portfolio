import ReactIcon from "@/assets/icons/react.svg";
import api from "@/assets/icons/api-page-svgrepo-com.svg";
import express from "@/assets/icons/ex-kernel-manager-svgrepo-com.svg";
import mongoDB from "@/assets/icons/mongodb-svgrepo-com.svg";
import mysql from "@/assets/icons/mysql-svgrepo-com .svg";
import python from "@/assets/icons/python-svgrepo-com.svg";
import typescript from "@/assets/icons/typescript-svgrepo-com.svg";
import docker from "@/assets/icons/docker.svg";
import kubernetes from "@/assets/icons/kubernetes.svg";
import aws from "@/assets/icons/aws.svg";
import airflow from "@/assets/icons/airflow.svg";
import githubActions from "@/assets/icons/github-actions.svg";
import fastapi from "@/assets/icons/fastapi.svg";
import java from "@/assets/icons/java.svg";
import springBoot from "@/assets/icons/springboot.svg";
import snowflake from "@/assets/icons/snowflake.svg";
import iceberg from "@/assets/icons/iceberg.svg";
import spark from "@/assets/icons/spark.svg";
import splunk from "@/assets/icons/splunk-svgrepo-com.svg";
import mcp from "@/assets/icons/mcp.svg";
import nodeJs from "@/assets/icons/node-js-svgrepo-com.svg";
import star from "@/assets/icons/star.svg";
import sparkle from "@/assets/icons/sparkle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { ProminentToolboxItems, ToolboxItems } from "@/components/ToolboxItems";

const coreSkills = [
  { title: "Java", iconType: java },
  { title: "Spring Boot", iconType: springBoot },
  { title: "Python", iconType: python },
  { title: "TypeScript", iconType: typescript },
  { title: "FastAPI", iconType: fastapi },
  { title: "React", iconType: ReactIcon },
  { title: "AWS", iconType: aws },
  { title: "Docker", iconType: docker },
  { title: "Kubernetes", iconType: kubernetes },
  { title: "GitHub Actions", iconType: githubActions },
  { title: "Airflow", iconType: airflow },
  { title: "Snowflake", iconType: snowflake },
  { title: "Apache Iceberg", iconType: iceberg },
  { title: "PySpark", iconType: spark },
  { title: "Splunk", iconType: splunk },
  { title: "MCP", iconType: mcp },
  { title: "Node.js", iconType: nodeJs },
  { title: "Express", iconType: express },
  { title: "MongoDB", iconType: mongoDB },
  { title: "MySQL", iconType: mysql },
  { title: "REST APIs", iconType: api },
  { title: "LLMs", iconType: sparkle },
  { title: "Hugging Face", iconType: sparkle },
  { title: "Scikit-learn", iconType: python },
  { title: "Transformers", iconType: sparkle },
  { title: "BERT", iconType: python },
  { title: "NLP", iconType: api },
  { title: "C++", iconType: express },
  { title: "Algorithms", iconType: star },
  { title: "Data Structures", iconType: star },
];

const prominentToolboxItems = coreSkills.slice(0, 8);

export const SkillsSection = () => {
  return (
    <section id="skills" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Skills & Tools"
          desciption="Core languages, frameworks, and infrastructure I work with day to day."
          descriptionClassName="max-w-2xl"
        />
        <Card className="mt-10 md:mt-16 min-h-[320px]">
          <ProminentToolboxItems items={prominentToolboxItems} className="pt-6 md:pt-8" />
          <ToolboxItems
            items={coreSkills}
            itemsWrapperClassName="animate-move-left [animation-duration:50s]"
          />
          <ToolboxItems
            items={coreSkills}
            className="mt-6 pb-6"
            itemsWrapperClassName="animate-move-right [animation-duration:25s]"
          />
        </Card>
      </div>
    </section>
  );
};
