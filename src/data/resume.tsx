import { Icons } from "@/components/icons";
import { IData } from "@/lib/types";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA: IData = {
  name: "Pierre",
  initials: "PI",
  url: "https://pierre-ide.fr",
  location: "Paris, FR",
  locationLink: "https://www.google.com/maps/place/paris",
  description: "A auto-dytact 17 high school student creating apps.",
  avatarUrl: "/me.png",
  skills: [
    "TypeScript",
    "JavaScript",
    "PHP",
    "PowerShell",
    "Swift",
    "Java",
    "Python",
    "Bash",
    "ViteJS",
    "React",
    "NextJS",
    "TailwindCSS",
    "NodeJS",
    "Bun",
    "Git",
    "Docker",
    "linux",
    "Hono",
    "MySQL",
    "Firebase",
    "Vercel",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "contact@pierre-ide.fr",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Piarre",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pierre-ide-8829582aa/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CAF de Paris",
      href: "https://www.caf.fr/allocataires/caf-de-paris",
      badges: [],
      location: "Paris",
      title: "Web Developer",
      logoUrl: "/caf.svg",
      start: "Feb",
      end: "Apr 2024",
      description:
        "Create an WebApp using PHP, jQuery and Bootstrap to help my team to manage products licenses.",
    },
  ],
  education: [],
  projects: [
    {
      title: "NextJS Starter",
      description: "A NextJS starter",
      href: "https://start.piarre.app",
      dates: "2024",
      active: true,
      links: [
        {
          href: "https://start.piarre.app",
          icon: <Icons.globe className="size-3" />,
          type: "Website",
        },
        {
          href: "https://github.com/Piarre/nextjs-starter",
          icon: <Icons.github className="size-3" />,
          type: "Github",
        },
      ],
      technologies: ["NextJS", "TypeScript", "TailwindCSS", "Shadcn/UI", "HonoJS"],
      image: "/next-starter.png",
    },
    {
      title: "SLiM",
      href: "#",
      dates: "Feb - Apr 2024",
      active: true,
      description: "",
      technologies: ["PHP", "jQuery", "HTML", "CSS", "JS", "PostreSQL"],
      links: [],
      image: "/slim.png",
    },
  ],
} as const;
