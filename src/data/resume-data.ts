import type { ResumeData } from "@/lib/types";
import avatar from "./avatar.jpg";

export const RESUME_DATA: ResumeData = {
  name: "Edouard Meyronin",
  location: "Antwerp, Belgium, CET",
  locationLink: "https://www.google.com/maps/place/Antwerp",
  about: "Founding GTM engineer. AI agents, automations and the web.",
  summary:
    "Founding go-to-market engineer at Vesara, where I work across the website, the funnels and the team's AI agents and automations. I build production systems end to end: a newsletter that writes, checks and sends itself every day, a fleet of evaluated agents on our own server, and an open-source HelloFresh that fills a real grocery cart. Before that I led an AI lab that put voice-enabled 3D agents into a multiplayer VR world. On the side I run content for an influencer ($150k ARR in brand deals, 7M+ monthly views) and explain AI on socials.",
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
      company: "Vesara Inc",
      link: "https://vesara.ai",
      badges: ["AI agents", "Automation", "Web", "San Francisco Bay Area"],
      title: "Founding GTM Engineer",
      start: "Mar 2026",
      end: null,
      description:
        "Vesara runs long-horizon agents on a company's data to resurface the revenue it is losing. Advisor from March 2026, founding team since June.",
      highlights: [
        "Co-built the vesara.ai website, frontend and backend (Next.js, Postgres, Resend), including the newsletter signup",
        "Build custom landing pages for our marketing funnels",
        "Set up the team's Hermes agents on OpenAI models, with skills and MCP connectors to our tools",
        "Built an agent that reads the calendar and prepares a brief on everyone in an upcoming meeting",
      ],
    },
    {
      company: "Self-employed",
      badges: ["Content", "Partnerships", "Belgium"],
      title: "Head of Content & Partnerships",
      start: "Jul 2025",
      end: null,
      description:
        "Run content for a prominent influencer, from scripting to brand deals, and advise other influencers on the side.",
      highlights: [
        "$150k ARR from brand collaborations, 7M+ monthly views and several viral videos",
      ],
    },
    {
      company: "Future Tech Labs",
      badges: ["AI agents", "Generative AI", "VR"],
      title: "Head of AI Research & Operations",
      start: "Jun 2024",
      end: "Jun 2025",
      description:
        "Led a lab that deployed embodied 3D AI agents with text-to-speech into a Unity-based multiplayer VR world.",
      highlights: [
        "Created a no-code web launchpad where users build custom AI agents that are deployed into the 3D world",
        "Launched our own token for blockchain payments on compute, token use and agent generation, reaching a $6.8M all-time high",
        "Launched our social accounts: 500k+ impressions and 3,613 followers on X, 500+ members on Telegram and 300+ on Discord",
      ],
    },
    {
      company: "Le Gala",
      badges: ["Events", "Grenoble, France"],
      title: "Logistics",
      start: "2022",
      end: "2024",
      description:
        "Oversaw logistics for a gala of 4,500 guests: sourced vendors, negotiated contracts and managed the team that coordinated the work.",
    },
    {
      company: "FONCIA",
      badges: ["Internship", "Grenoble, France"],
      title: "Property Management Assistant",
      start: "Jun 2023",
      end: "Aug 2023",
      description:
        "Handled a high volume of client calls and emails, processed rental applications and ran property viewings.",
    },
    {
      company: "Future Tech Games",
      badges: ["Internship", "Poole, UK", "Remote"],
      title: "Business Consultant",
      start: "May 2022",
      end: "Aug 2022",
      description:
        "Market research, competitor analysis and business models, including blockchain options, for The Big Flip, a funded cooperative VR game.",
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
      techStack: ["Hermes", "OpenAI", "MCP", "Docker"],
      description:
        "A fleet of Hermes agents for the Vesara team, which I set up on OpenAI models and equip with a shared library of ~190 skills and MCP connectors to our tools. They run on our own VPS: a control plane provisions, backs up and restores each agent, every merge deploys through GitHub Actions, and weekly evals decide promotion (90% to move up a risk tier). A dashboard checks the fleet every 15 minutes.",
    },
    {
      title: "Finance agent",
      date: "Jul 2026",
      techStack: ["Python", "PSD2", "Yuki", "WhatsApp"],
      description:
        "A proactive agent that tracks what's owed and due. It reads Gmail, the accountant's Yuki ledger, notes, the calendar and a WhatsApp group, resurfaces missed invoices (four on its first pass), reconciles bills against the ledger and drafts chasers for anything 14+ days overdue. A live, read-only KBC bank feed over PSD2 posts every new transaction to it.",
    },
    {
      title: "Vesara Daily",
      date: "Sep 2026",
      techStack: ["Python", "Neon pgvector", "Resend", "OpenAI"],
      description:
        "A newsletter that writes itself. Agents collect trending repos, skills, fast-growing MCP servers, AI news, papers and funding rounds; pgvector search in Neon drops near-duplicates and one schema-checked model call writes each card. Grounding gates stop a bad issue before Resend sends it with an AI cover and an archive on vesara.ai. A Claude skill drafts the LinkedIn and Substack versions by driving the browser. 1,600+ tests; the engine also runs The Weekly Ledger, a revenue-leakage weekly in testing.",
    },
    {
      title: "os-hellofresh",
      date: "Oct 2026",
      techStack: ["Python", "pgvector", "Jev", "Instacart MCP"],
      description:
        "An open-source, self-hosted HelloFresh. It plans a week of recipes with vector search and Jev, TypeSafe's classification model, which judges diets, matches plain products and prices what the store can't. It fills a real grocery cart under a hard budget through Instacart's MCP or the Kroger API, at about half a meal kit's cost, and never checks out. A Belgian edition runs on Albert Heijn.",
    },
    {
      title: "Radars",
      date: "Aug 2026",
      techStack: ["Python", "Node", "Neon", "Jev"],
      description:
        "An apartment deal radar that pulls four Antwerp rental sources, two through reverse-engineered portal APIs, stores them in Neon and flags listings 10%+ under the 90-day median €/m², with a second opinion from the official Flemish rent estimator. An X radar groups AI posts into topics and has Jev answer five editorial questions on each, surfacing only the best.",
    },
    {
      title: "Content Room",
      date: "Oct 2026",
      techStack: ["Python", "Whisper", "ffmpeg", "Obsidian"],
      description:
        "Turns the videos and posts I save on Instagram, TikTok, YouTube and the web into a searchable bank of 1,000+ content ideas. Whisper transcribes, a vision pass reads on-screen text, and a summary round titles each item and files it by theme. It runs on my machine with no API key and syncs to Obsidian every five minutes.",
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
