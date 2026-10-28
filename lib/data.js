// Single source of truth for site content. Edit here.

export const profile = {
  name: "Arthur Jemba",
  role: "Full-Stack Web Developer",
  location: "Kampala, Uganda",
  email: "jembarthur@gmail.com",
  github: "https://github.com/JeArthur-wd",
  githubHandle: "JeArthur-wd",
  summary:
    "I build and ship full-stack web apps, from React and Next.js front ends to FastAPI and Express back ends, containerised with Docker and deployed live. I trained in software engineering at Refactory Academy, where I led QA and data on a team product, and I care about software that is tested, documented and actually in production.",
  about: [
    "Hey! I’m Arthur Jemba, a software developer. Some people take a winding road to find what they love. I didn’t. For me it’s always been tech. No big switch, no change of plans, just a pull toward code that’s been there for as long as I can remember.",
    "What I love about software is that it turns ideas into something real. You start with a problem, write some lines, and suddenly something exists that didn’t before. Something that saves someone time, makes a task easier, or opens a door that was closed. That never gets old for me.",
    "My whole thing is using technology for the better. Not building for the sake of building, but making things that actually matter to the people using them. Whether it’s a product people see every day or a system quietly running in the background, I want what I build to leave things better than I found them.",
    "Tech drives me. Code is how I make that drive count.",
  ],
  quote: "Code is just the tool. Making life better is the goal.",
  // Optional portrait: put the image in /public and set e.g. "/arthur.jpg".
  photo: null,
};

export const stats = [
  { value: "3", label: "Apps live in production" },
  { value: "5", label: "Years of tech study" },
  { value: "Remote", label: "Ready, equipped, online" },
]

export const journey = [
  {
    date: "Aug 2021 — Jun 2023",
    title: "Information Technology",
    org: "Kampala International University",
    place: "Kampala",
    kind: "Education",
    points: [
      "Foundational coursework in analytical reasoning, academic communication and business fundamentals.",
    ],
  },
  {
    date: "Feb 2026 — Oct 2026",
    title: "Software Engineering Programme",
    org: "Refactory Academy",
    place: "Kampala",
    kind: "Education",
    points: [
      "OOP, the Software Development Life Cycle, web services and front-end / back-end architecture.",
    ],
  },
  {
    date: "Apr 2026 — Present",
    title: "Applied Business, Software & Web Technologies",
    org: "BYU-Pathway Worldwide",
    place: "Remote",
    kind: "Education",
    points: [
      "Cross-cultural collaboration, digital workflow discipline and self-directed project management in an international online university.",
    ],
  },
];

// Logos come from Devicon (MIT), pinned on jsDelivr; `icon` is the path under its icons/ folder.
export const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

export const skills = [
  { name: "JavaScript", icon: "javascript/javascript-original", group: "Language" },
  { name: "TypeScript", icon: "typescript/typescript-original", group: "Language" },
  { name: "Python", icon: "python/python-original", group: "Language" },
  { name: "HTML5", icon: "html5/html5-original", group: "Language" },
  { name: "CSS3", icon: "css3/css3-original", group: "Language" },
  { name: "React", icon: "react/react-original", group: "Front end" },
  { name: "Next.js", icon: "nextjs/nextjs-original", group: "Front end" },
  { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original", group: "Front end" },
  { name: "Vite", icon: "vitejs/vitejs-original", group: "Front end" },
  { name: "Node.js", icon: "nodejs/nodejs-original", group: "Back end" },
  { name: "Express.js", icon: "express/express-original", group: "Back end" },
  { name: "FastAPI", icon: "fastapi/fastapi-original", group: "Back end" },
  { name: "SQLAlchemy", icon: "sqlalchemy/sqlalchemy-original", group: "Back end" },
  { name: "SQLite", icon: "sqlite/sqlite-original", group: "Back end" },
  { name: "Jest", icon: "jest/jest-plain", group: "Testing" },
  { name: "Docker", icon: "docker/docker-original", group: "Tools" },
  { name: "Git", icon: "git/git-original", group: "Tools" },
  { name: "GitHub", icon: "github/github-original", group: "Tools" },
  { name: "Cloudflare Workers", icon: "cloudflareworkers/cloudflareworkers-original", group: "Tools" },
  { name: "Slack", icon: "slack/slack-original", group: "Tools" },
];

// Skills without a logo, shown as tags under the grid.
export const practices = ["REST APIs", "JWT auth", "QA & testing", "OOP & SDLC", "LLM integration", "Fly.io", "Render", "GitHub Pages"];

// Replace `href` values with live project URLs as your work ships.
// `art` picks the illustration in the card header (see ProjectArt in app/page.jsx).
export const portfolio = [
  {
    title: "Prelegal",
    tag: "AI SaaS",
    art: "chat",
    desc: "Draft common legal agreements by chatting with an AI assistant, then export them as PDFs. A Next.js front end talks to a FastAPI back end with JWT sign-in, SQLAlchemy persistence and LiteLLM, shipped in Docker on Render.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "FastAPI", "SQLAlchemy", "LiteLLM", "Docker", "Render"],
    live: "https://prelegal-ersf.onrender.com/",
    github: "https://github.com/JeArthur-wd/prelegal",
  },
  {
    title: "Kanban Studio",
    tag: "Full-stack app",
    art: "board",
    desc: "A full-stack Kanban app with sign-in and per-user boards. A multi-stage Docker build compiles the frontend on Node 20 and serves everything from Python 3.12, with SQLite on a persistent volume, live on Fly.io.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "FastAPI", "SQLite", "Docker", "Fly.io", "OpenRouter"],
    live: "https://kanban-studio.fly.dev",
    github: "https://github.com/JeArthur-wd/kanban-fullapp",
  },
  {
    title: "CrocusApp Africa",
    tag: "Refactory · QA & Data Lead",
    art: "nodes",
    desc: "A multi-tenant event operating system for the African events industry, with role-based dashboards for delegates, exhibitors, organisers and sponsors, smart networking and offline check-in. I led QA and data on the team.",
    stack: ["React", "TypeScript", "Vite", "PWA", "JWT", "QA", "Data"],
    live: "https://crocusapp.com",
    github: "https://github.com/Sage-Nexus",
  },
  {
    title: "Kanban Board",
    tag: "Front-end demo",
    art: "board",
    desc: "A drag-and-drop Kanban project manager: columns, cards and a tested state reducer, deployed live on GitHub Pages.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "dnd-kit"],
    live: "https://jearthur-wd.github.io/kanban/",
    github: "https://github.com/JeArthur-wd/kanban",
  },
  {
    title: "Full-Stack Web Apps",
    tag: "Refactory Academy",
    art: "code",
    desc: "Responsive React front ends wired to Express back ends, built in team environments with Git and Slack.",
    stack: ["React", "Express.js", "REST"],
    github: "https://github.com/JeArthur-wd?tab=repositories",
  },
  {
    title: "This Website",
    tag: "Next.js",
    art: "browser",
    desc: "The site you are on: a Next.js App Router build with hand-written CSS, zero UI libraries and a performance-first approach.",
    stack: ["Next.js", "React", "CSS"],
    github: "https://github.com/JeArthur-wd/JeArthur-wd.github.io",
  },
];
