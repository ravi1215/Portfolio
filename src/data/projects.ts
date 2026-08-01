import { StaticImageData } from "next/image";
import url from "@/assets/images/url.png";
import aijob from "@/assets/images/aijob.png";
import imdb from "@/assets/images/imdb.png";
import crop from "@/assets/images/crop.png";

export type Project = {
  title: string;
  year: string;
  tagline: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: StaticImageData;
};

export const featuredProjects: Project[] = [
  {
    title: "AI Job Search Platform",
    year: "2024",
    tagline: "AI assistant for job discovery, skill matching, and interview prep.",
    highlights: [
      "Scrapes and analyzes job postings to surface relevant roles.",
      "Matches candidate skills against job requirements automatically.",
      "Generates role-specific interview questions from job descriptions.",
    ],
    techStack: ["Python", "LLMs", "Web Scraping", "Hugging Face"],
    liveUrl: "https://huggingface.co/spaces/Ravi1227/AiJobSearch",
    image: aijob,
  },
  {
    title: "URL Shortener",
    year: "2024",
    tagline: "Production-style full-stack URL shortening service with analytics.",
    highlights: [
      "Generates unique short URLs with QR codes for sharing.",
      "Tracks click analytics in real time per shortened link.",
      "Built with validation, error handling, and a responsive UI.",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
    liveUrl: "https://url-shortener-one-beige.vercel.app/",
    image: url,
  },
  {
    title: "Crop Management System",
    year: "2024",
    tagline: "ML-powered agricultural platform for crop selection and yield forecasting.",
    highlights: [
      "Recommends optimal crops from soil and environmental data.",
      "Predicts crop yield using regression on agricultural datasets.",
      "Flask web app combining both models for interactive predictions.",
    ],
    techStack: ["Python", "Flask", "Scikit-learn", "Machine Learning"],
    liveUrl: "https://crop-management-system-yms8.onrender.com/",
    image: crop,
  },
  {
    title: "IMDB Movie Review Sentiment Analysis",
    year: "2024",
    tagline: "ML classifier for IMDb movie reviews with real-time sentiment predictions.",
    highlights: [
      "Classifies IMDb movie reviews as positive or negative with high accuracy.",
      "Deployed as an interactive web app using Gradio on Hugging Face.",
      "Supports seamless user interaction with live inference.",
    ],
    techStack: ["Python", "Machine Learning", "NLP", "Gradio"],
    liveUrl: "https://huggingface.co/spaces/Ravi1227/movie-sentiment-analysis",
    image: imdb,
  },
];

export const otherProjects: Omit<Project, "image" | "highlights">[] = [
  {
    title: "Mental Health BERT",
    year: "2024",
    tagline: "Transformer-based NLP system for mental health text analysis.",
    techStack: ["Python", "BERT", "Transformers", "NLP", "Hugging Face"],
    liveUrl: "https://huggingface.co/spaces/Ravi1227/Mental_Health_Bert",
  },
  {
    title: "AI SEO Landing Page",
    year: "2024",
    tagline: "Modern SEO-optimized landing page with motion and accessibility.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://ai-seo-page-wine.vercel.app/",
  },
  {
    title: "DNA Sequence Trie Search",
    year: "2024",
    tagline: "Trie-based DNA search with exact and approximate matching.",
    techStack: ["C++", "Qt", "Algorithms", "Data Structures"],
    githubUrl: "https://github.com/ravi1215/DNA-Sequence-trie-search",
  },
  {
    title: "SEOptimizer",
    year: "2023",
    tagline: "Responsive frontend focused on SEO and scalable design patterns.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ravi1215.github.io/SEOtimizer/",
  },
  {
    title: "Gyandhan Chatbot",
    year: "2022",
    tagline: "Chatbot for study abroad guidance and education loan navigation.",
    techStack: ["JavaScript", "Chatbot", "Web App"],
    liveUrl: "https://gyandhan-emi-calculator.vercel.app/",
  },
];
