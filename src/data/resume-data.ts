import type { ResumeData } from "@/lib/types";
import avatar from "./avatar.jpg";

export const RESUME_DATA: ResumeData = {
  name: "Edouard Meyronin",
  location: "Antwerp, Belgium, CET",
  locationLink: "https://www.google.com/maps/place/Antwerp",
  about: "Builder of AI agents, automations and data pipelines.",
  summary:
    "Part of the founding team at Vesara, with a business degree in finance from Grenoble École de Management. I build with AI coding agents: I write the spec, split it into tickets, send each ticket to an agent and review every pull request before it merges. Since June 2026 that has produced our company website (co-built) and landing pages, a fleet of AI agents for the team, a daily newsletter that writes itself, a local-first library for content ideas and an open-source alternative to HelloFresh. I also post short videos explaining AI as Edouard the Ginger.",
  avatar,
  siteUrl: "https://edouard38000.github.io/cv/",
  contact: {
    email: "edouard.meyronin@gmail.com",
    tel: "",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/edouardmeyronin/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Grenoble École de Management",
      degree:
        "Bachelor in International Business, Finance major. Erasmus semester at Maastricht University (2023)",
      start: "2021",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Vesara",
      link: "https://vesara.ai",
      badges: ["AI agents", "Automation", "Web", "GTM"],
      title: "Founding team",
      start: "2026",
      end: null,
      description:
        "Vesara connects a company's data into one always-on layer and runs long-horizon agents that resurface the revenue it is losing. I co-built the website and build the funnels and the team's AI agents and automations.",
      highlights: [
        "Co-built the vesara.ai website, frontend and backend (Next.js, Postgres, Resend), including the newsletter signup",
        "Build custom landing pages for our marketing funnels",
        "Run the company's fleet of AI agents on our own server, with weekly evals and a 90% pass rate required before an agent gets more access",
        "Installed skills and MCP connectors for teammates so their agents can use our tools",
        "Built an agent that reads the calendar and prepares a brief on everyone in an upcoming meeting",
      ],
    },
    {
      company: "Paperclip AI",
      badges: ["AI agents", "Web3", "Gaming"],
      title: "Founder & CEO",
      start: "2024",
      end: "2025",
      description:
        "A no-code platform for AI agents in video games (smart NPCs), with its own token, $PAPERCLIPS.",
      highlights: [
        "Peak market cap of $6.5M, 5,000 to 6,000 holders and $48M in total trading volume",
        "Led tech, product, R&D, finance, marketing and partnerships, and spoke at conferences",
      ],
    },
    {
      company: "Le Gala, Grenoble École de Management",
      badges: ["Events", "Operations"],
      title: "Head of Logistics",
      start: "2022",
      end: "2024",
      description:
        "Ran logistics for the school's end-of-year gala: 4,500 guests on a €500,000 budget. Chose and negotiated with suppliers, planned schedules and managed staff.",
    },
    {
      company: "The Cut Media",
      badges: ["Internship", "Poole, UK"],
      title: "Business Advisor Intern",
      start: "May 2022",
      end: "Aug 2022",
      description:
        "Market research, competitor analysis and business-model work, including blockchain funding options for a VR co-op game with $1M+ in funding.",
    },
  ],
  skills: [
    "AI agents",
    "Claude Code",
    "MCP",
    "Agent evals",
    "Python",
    "TypeScript",
    "Next.js",
    "Postgres",
    "Docker",
    "GitHub Actions",
    "Web scraping",
    "Financial modelling",
    "French (native)",
    "English (fluent, TOEFL 103)",
    "German (B1)",
  ],
  projects: [
    {
      title: "Vesara agent fleet",
      date: "Jul 2026",
      techStack: ["Docker", "GitHub Actions", "Langfuse", "Netdata"],
      description:
        "Self-hosted AI agents for the Vesara team, running on a VPS. A control plane provisions, backs up and restores each agent and deploys on every merge. Weekly evals gate each agent's access, and a live dashboard tracks usage and health with iMessage alerts.",
    },
    {
      title: "Vesara Daily",
      date: "Sep 2026",
      techStack: ["Python", "AI agents", "Resend", "Neon"],
      description:
        "A newsletter that writes itself: scheduled agents collect trending repos, AI news, research papers and funding rounds, remove repeats, build the edition and send it every morning. A Claude skill then turns it into LinkedIn and Substack drafts by driving the browser. 77 subscribers on LinkedIn.",
    },
    {
      title: "Content Room",
      date: "Oct 2026",
      techStack: ["Python", "Whisper", "ffmpeg", "Obsidian"],
      description:
        "Turns the videos and posts I save for inspiration into a searchable bank of content ideas. It transcribes each item, reads text off the screen, summarises it and files it by theme, all on my machine with no API key. It holds 1,000+ items.",
    },
    {
      title: "os-hellofresh",
      date: "Oct 2026",
      techStack: ["Python", "pgvector", "Instacart MCP", "Kroger API"],
      description:
        "An open-source, self-hosted HelloFresh. It plans a week of recipes that fit your rules and fills a real grocery cart under a hard budget, through Instacart's MCP connector or the Kroger API, at about half the cost per serving. It never checks out: you review and pay.",
    },
    {
      title: "Agent automations",
      date: "Aug 2026",
      techStack: ["Python", "PSD2", "WhatsApp", "Scraping"],
      description:
        "A read-only bank feed that posts transactions to a WhatsApp agent; an apartment deal radar that flags rentals 10%+ under the 90-day median across three portals; an X radar that scores posts with a model.",
    },
    {
      title: "AI Job Search, France & Belgium",
      date: "Oct 2026",
      techStack: ["Python", "Claude Code", "LaTeX"],
      description:
        "My edition of the open-source AI job search framework, adapted to French and Belgian job boards: it rates postings and writes a tailored CV and cover letter for each one.",
    },
  ],
};

export const SECTION_TITLES = {
  summary: "About",
  projects: "Things I've built",
  work: "Experience",
  skills: "Skills",
  education: "Education",
} satisfies Partial<Record<keyof ResumeData, string>>;
