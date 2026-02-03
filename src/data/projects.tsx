import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiPytorch,
  SiNumpy,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  pyt: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <SiPytorch />,
  },
  np: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <SiNumpy />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // 01. AI Docker file optimizer project
    id: "twaran",
    category: "Full Stack",
    title: "Twaran",
    src: "/assets/projects-screenshots/twaran/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://twaran25.iiitm.ac.in/",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind,PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.node,PROJECT_SKILLS.prisma,PROJECT_SKILLS.postgres],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          Twaran helps manage large-scale inter-college sports events through a scalable, full-stack platform.
          It enables real-time registration for 24 games and supports over 3,000 users with secure, role-based access for participants, coordinators, and administrators.
          Built with React, Node.js, Prisma, and PostgreSQL, the platform is deployed on Google Cloud with 99.9% uptime, automated email workflows, and optimized APIs delivering 35% faster response times.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              `${BASE_PATH}/twaran/1.png`,
              `${BASE_PATH}/twaran/2.png`,
              `${BASE_PATH}/twaran/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 02. FinanceMe project
    id: "pictovia",
    category: "AI",
    title: "Pictovia: AI-powered image generation platform",
    src: "/assets/projects-screenshots/pictovia/1.jpeg",
    screenshots: ["/assets/projects-screenshots/pictovia/1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://github.com/Purav001/Pictovia",
    github: "https://github.com/Purav001/Pictovia",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Pictovia: AI-powered image generation platform.
          </TypographyP>
          <TypographyP className="font-mono ">
          A full-stack AI-powered image generation platform built using the MERN stack.
          It allows users to generate high-quality images in real time using the ClipDrop API, with secure JWT-based authentication and controlled access.
          Featuring a credit-based usage system, advanced image editing tools, and Stripe-powered payments, Pictovia delivers sub-2s image rendering, faster load times with Vite, and an engaging, scalable user experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/pictovia/1.jpeg`,
              `${BASE_PATH}/pictovia/2.jpeg`,
              `${BASE_PATH}/pictovia/3.jpeg`,
            ]}
          />
        </div>
      );
    },
  },
  { // 03. Portfolio project
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/myportfolio/landing.png",
    screenshots: ["assets/projects-screenshots/myportfolio/landing.png"],
    live: "https://www.google.com/",
    github:"https://github.com/Purav001/purav_portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/myportfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/projects.png`,
              `${BASE_PATH}/myportfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    id: "avig",
    category: "ML",
    title: "AViG",
    src: "/assets/projects-screenshots/avig/1.png",
    screenshots: ["1.png", "3.png"],
    live: "https://github.com/Purav001/AViG",
    github:"https://github.com/Purav001/AViG",
    skills: {
      frontend: [PROJECT_SKILLS.pyt, PROJECT_SKILLS.np],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          Our work introduces the Pyramid Vision Graph Network (Pyramid ViG), a novel architecture that represents images as flexible graphs to overcome the limitations of traditional grid-based CNNs and sequence-based Vision Transformers. The core contribution is a novel Spatial Refinement Head, which integrates a lightweight attention mechanism to intelligently focus on the most discriminative features, significantly enhancing performance across diverse visual tasks.
          This framework is rigorously validated on three distinct and challenging domains, consistently outperforming established baselines.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/avig/1.png`,
              `${BASE_PATH}/avig/2.png`,
              `${BASE_PATH}/avig/3.png`,
              `${BASE_PATH}/avig/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 05. Smart Job Tracker project
    id: "sgcl",
    category: "ML/DL",
    title: "SGCL: Contrastive Learning for Signed Graph Link Prediction",
    src: "/assets/projects-screenshots/sgcl/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://github.com/Purav001/SGCL",
    github:"https://github.com/Purav001/SGCL",
    skills: {
      frontend: [PROJECT_SKILLS.pyt, PROJECT_SKILLS.np],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          Signed Graph Learning Framework enables scalable experimentation on large-scale signed network datasets using graph neural networks.
          Built with PyTorch and DGL, it introduces efficient training pipelines and graph augmentation strategies based on signed random walks and eigenvector centrality to improve robustness and stability.
          The framework achieves 97.33% Binary F1 and 94.93% Macro F1 on the Bitcoin-OTC benchmark, outperforming GCN and GAT baselines by 12% while reducing training time by 30%.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/sgcl/1.png`,
              `${BASE_PATH}/sgcl/2.png`,
              `${BASE_PATH}/sgcl/3.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
