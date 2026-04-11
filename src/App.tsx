import { useState } from "react";
import { Toaster } from "./components/ui/sonner.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const queryClient = new QueryClient();
const CERT_URL =
  "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_jk9FrdQPddzYXuNSH_1753200293130_completion_certificate.pdf";

const GH_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

/* ══════════════ SECTION HEADER ══════════════ */
const SectionHeader = ({ title, sub }: { title: string; sub: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{title}</h2>
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">{sub}</p>
    <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
  </div>
);

/* ══════════════ NAV ══════════════ */
const NavBar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-3.5 flex items-center justify-between shadow-sm">
    <span className="font-black text-slate-800 text-xl tracking-tight">
      Jayasri<span className="text-violet-600"> T</span>
    </span>
    <div className="flex gap-1">
      {["About","Education","Experience","Projects","Achievements","Certifications","Skills","Contact"].map((s) => (
        <a key={s} href={`#${s.toLowerCase()}`}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:text-violet-600 hover:bg-violet-50 transition-all hidden lg:inline-block">
          {s}
        </a>
      ))}
    </div>
  </nav>
);

/* ══════════════ HERO ══════════════ */
const Hero = () => (
  <section id="about" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 text-center pt-20"
    style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #eef2ff 50%, #f0f9ff 100%)" }}>
    {/* Decorative blobs */}
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
      style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }} />
    <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full opacity-15 blur-3xl"
      style={{ background: "radial-gradient(circle, #6366f1, transparent)" }} />

    {/* Avatar */}
    <div className="relative mb-6">
      <div className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-black shadow-2xl ring-4 ring-white ring-offset-4 ring-offset-violet-100"
        style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}>
        JT
      </div>
      <span className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-400 rounded-full border-2 border-white flex items-center justify-center text-xs">✓</span>
    </div>

    <h1 className="text-5xl sm:text-6xl font-black text-slate-900 mb-3 tracking-tight leading-tight">
      Jayasri T
    </h1>
    <p className="text-xl font-bold mb-2" style={{ background: "linear-gradient(90deg,#7c3aed,#4f46e5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
      AI &amp; ML Engineer
    </p>
    <p className="max-w-lg text-slate-500 text-base leading-relaxed mb-8">
      Passionate about building intelligent systems, exploring Generative AI, and solving hard problems.
      Pursuing B.Tech in AI &amp; DS with a CGPA of{" "}
      <span className="font-extrabold text-violet-700">9.40</span> (up to 4th Semester).
    </p>

    <div className="flex gap-3 flex-wrap justify-center mb-14">
      <a href="#projects"
        className="px-6 py-2.5 rounded-full text-sm font-bold text-white shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 transition-all"
        style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
        View Projects
      </a>
      <a href="#contact"
        className="px-6 py-2.5 rounded-full text-sm font-bold text-violet-700 border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 transition-all">
        Contact Me
      </a>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-xl">
      {[
        { label: "CGPA", value: "9.40", icon: "🎯" },
        { label: "DSA Solved", value: "200+", icon: "💻" },
        { label: "Internship", value: "1+", icon: "🏢" },
        { label: "Projects", value: "3", icon: "🚀" },
      ].map(({ label, value, icon }) => (
        <div key={label} className="bg-white/70 backdrop-blur rounded-2xl p-4 border border-white shadow-sm text-center">
          <div className="text-2xl mb-1">{icon}</div>
          <p className="text-2xl font-black text-violet-700">{value}</p>
          <p className="text-xs text-slate-500 font-medium mt-0.5">{label}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ══════════════ EDUCATION ══════════════ */
const Education = () => (
  <section id="education" className="py-20 bg-white px-4">
    <div className="max-w-3xl mx-auto">
      <SectionHeader title="Education" sub="Academic Background" />
      <div className="relative pl-8 border-l-2 border-violet-100">
        <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-violet-600 border-2 border-white shadow" />
        <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-8 border border-violet-100 shadow-sm">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
              🎓
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                <h3 className="text-lg font-extrabold text-slate-900">B.Tech – Artificial Intelligence &amp; Data Science</h3>
                <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full flex-shrink-0">● Pursuing</span>
              </div>
              <p className="text-violet-600 font-semibold text-sm mb-5">
                Anand Institute of Higher Technology, Chennai
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-violet-100 text-center">
                  <p className="text-2xl font-black text-violet-700">9.40</p>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">CGPA · Up to 4th Sem</p>
                </div>
                <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-indigo-100 text-center">
                  <p className="text-2xl font-black text-indigo-600">2023–27</p>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Batch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════ EXPERIENCE ══════════════ */
const Experience = () => (
  <section id="experience" className="py-20 px-4" style={{ background: "#f8f7ff" }}>
    <div className="max-w-3xl mx-auto">
      <SectionHeader title="Experience" sub="Internships & Training" />
      <div className="relative border-l-2 border-violet-200 pl-8 ml-2 space-y-12">
        {[
          {
            title: "Node.js Intern",
            comp: "Askan Technologies",
            time: "Dec 2025",
            desc: "Built RESTful APIs, implemented authentication, integrated third-party services, and improved backend reliability.",
            tags: ["Node.js", "Express", "API", "Auth"],
            cert: "https://github.com/jayasri21072006/pro/blob/main/Askan%20Node.js%20intern.pdf",
            icon: "🚀"
          },
          {
            title: "ML Intern",
            comp: "Saiket Systems",
            time: "Jun 2025 - Jul 2025",
            desc: "Developed ML pipelines: data cleaning, feature engineering, model training and evaluation; collaborated on monitoring.",
            tags: ["Machine Learning", "Python", "Pipelines"],
            cert: "https://github.com/jayasri21072006/pro/blob/main/saiket%20Ml%20intern.pdf",
            icon: "🧠"
          },
          {
            title: "Python Intern",
            comp: "Cognifyz Technologies",
            time: "Feb 2025 - Mar 2025",
            desc: "Automated ETL workflows, created reusable Python modules, and implemented tests to ensure code quality.",
            tags: ["Python", "ETL", "Automation"],
            cert: "https://github.com/jayasri21072006/pro/blob/main/cognifyz%20python%20Intern.pdf",
            icon: "🐍"
          },
          {
            title: "Gen AI-Powered Job Simulation",
            comp: "Tata iQ · Virtual via Forage",
            time: "Completed",
            desc: "Completed a virtual internship simulation focused on real-world applications of Generative AI, prompt engineering, and AI-powered workflows.",
            tags: ["Generative AI", "Prompt Engineering", "AI Workflows"],
            cert: CERT_URL,
            icon: "🤖"
          }
        ].map((e, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-violet-600 border-2 border-white shadow" />
            <div className="bg-white rounded-2xl p-7 shadow border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm shadow flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
                    {e.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">{e.title}</h3>
                    <p className="text-violet-600 font-semibold text-sm">{e.comp}</p>
                  </div>
                </div>
                <span className="text-xs bg-violet-100 text-violet-700 font-bold px-3 py-1 rounded-full">{e.time}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{e.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {e.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-violet-50 text-violet-700 border border-violet-200 px-2.5 py-1 rounded-full font-semibold">{tag}</span>
                ))}
              </div>
              <a href={e.cert} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-violet-700 hover:text-violet-900 transition-colors group">
                <span className="w-7 h-7 rounded-full bg-violet-100 group-hover:bg-violet-200 flex items-center justify-center transition-colors">📄</span>
                View Certificate
                <span className="group-hover:translate-x-1 transition-transform text-violet-400">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════ PROJECTS ══════════════ */
type Project = {
  emoji: string; accentFrom: string; accentTo: string;
  badge?: string; badgeCls: string;
  title: string; subtitle: string; description: string;
  tags: string[]; githubUrl: string; liveUrl?: string;
};

const projects: Project[] = [
  {
    emoji: "🎓", accentFrom: "#7c3aed", accentTo: "#4f46e5",
    badgeCls: "bg-violet-100 text-violet-700",
    title: "Examination Monitoring System",
    subtitle: "AI-powered real-time exam proctoring",
    description:
      "Real-time exam proctoring system using YOLOv8, MediaPipe and OpenCV. Monitors multiple live camera feeds, detects suspicious behaviours, logs incidents and raises alerts.",
    tags: ["Python","Streamlit","YOLOv8","MediaPipe","OpenCV","Computer Vision"],
    githubUrl: "https://github.com/jayasri21072006/examination-monitoring-system",
  },
  {
    emoji: "🚀", accentFrom: "#2563eb", accentTo: "#0d9488",
    badgeCls: "bg-blue-100 text-blue-700",
    title: "Crypto Liquidity Predictor",
    subtitle: "ML Market Prediction Tool",
    description: "End-to-end ML project predicting crypto trends using RandomForest. Features automated EDA, feature engineering, and a Streamlit UI for market analytics.",
    tags: ["Machine Learning", "RandomForest", "Streamlit", "Pandas", "Python"],
    githubUrl: "https://github.com/jayasri21072006/crypto-liquidity-predictor",
    liveUrl: "https://crypto-liquidity-predictor-jorq5yxc3mrkqfeovdcvuq.streamlit.app/",
  },
  {
    emoji: "💬", accentFrom: "#0d9488", accentTo: "#0891b2",
    badge: "🏆 SIH 2025 · Selected",
    badgeCls: "bg-amber-100 text-amber-700",
    title: "Sentiment Analysis with Word Cloud",
    subtitle: "NLP web app selected at Smart India Hackathon 2025",
    description:
      "AI-powered web app that analyses stakeholders comments. Classifies sentiment, generates summaries, and visualises themes via an interactive word cloud.",
    tags: ["Python","Streamlit","NLP","WordCloud","Pandas","Matplotlib"],
    githubUrl: "https://github.com/jayasri21072006/sentiment_analysis_with_wordcloud",
    liveUrl: "https://sentimentanalysiswithwordcloud.streamlit.app/",
  },
];

const ProjectCard = ({ p }: { p: Project }) => (
  <div className="bg-white rounded-2xl border border-slate-100 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden">
    <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg,${p.accentFrom},${p.accentTo})` }} />
    <div className="p-7 flex flex-col flex-1">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-md flex-shrink-0"
            style={{ background: `linear-gradient(135deg,${p.accentFrom},${p.accentTo})` }}>
            {p.emoji}
          </div>
          <div>
            <h3 className="text-base font-extrabold text-slate-900 leading-snug">{p.title}</h3>
            <p className="text-xs text-slate-400 mt-0.5">{p.subtitle}</p>
          </div>
        </div>
        {p.badge && (
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${p.badgeCls}`}>{p.badge}</span>
        )}
      </div>
      <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{p.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {p.tags.map((t) => (
          <span key={t} className="text-xs bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full font-medium">{t}</span>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-slate-700 transition-colors shadow">
          {GH_ICON} GitHub
        </a>
        {p.liveUrl && (
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-white text-xs font-bold rounded-full hover:opacity-90 transition-opacity shadow"
            style={{ background: `linear-gradient(135deg,${p.accentFrom},${p.accentTo})` }}>
            ▶ Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="py-20 bg-white px-4">
    <div className="max-w-5xl mx-auto">
      <SectionHeader title="Projects" sub="Things I've Built" />
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
    </div>
  </section>
);

/* ══════════════ ACHIEVEMENTS ══════════════ */
const achievements = [
  {
    icon: "🛒",
    color: "from-yellow-400 to-orange-500",
    bg: "from-yellow-50 to-orange-50",
    border: "border-yellow-200",
    title: "Flipkart Grid 7.0",
    subtitle: "Qualified Round 2",
    detail: "Cleared Round 2 of Flipkart's engineering challenge.",
    tags: ["Competitive Programming","Software Engineering","System Design"],
  },
  {
    icon: "💡",
    color: "from-orange-500 to-red-500",
    bg: "from-orange-50 to-red-50",
    border: "border-orange-200",
    title: "LeetCode 200+",
    subtitle: "Java DSA Specialist",
    detail: "Solved 200+ DSA problems in Java.",
    tags: ["Java","Arrays & Strings","Trees & Graphs","Dynamic Programming"],
  },
  {
    icon: "🏆",
    color: "from-violet-500 to-indigo-600",
    bg: "from-violet-50 to-indigo-50",
    border: "border-violet-200",
    title: "SIH 2025 Selected",
    subtitle: "Internal Round",
    detail: "Sentiment Analysis project selected for SIH 2025.",
    tags: ["AI/ML","NLP","Hackathon","Team Project"],
  },
];

const Achievements = () => (
  <section id="achievements" className="py-20 px-4" style={{ background: "#f8f7ff" }}>
    <div className="max-w-5xl mx-auto">
      <SectionHeader title="Achievements" sub="Milestones & Recognitions" />
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((a) => (
          <div key={a.title} className={`bg-gradient-to-br ${a.bg} rounded-2xl border ${a.border} p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col`}>
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center text-2xl shadow-md mb-4 flex-shrink-0`}>
              {a.icon}
            </div>
            <h3 className="text-base font-extrabold text-slate-900 leading-snug mb-1">{a.title}</h3>
            <p className="text-xs font-bold text-violet-600 mb-3">{a.subtitle}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{a.detail}</p>
            <div className="flex flex-wrap gap-1.5">
              {a.tags.map((t) => (
                <span key={t} className="text-xs bg-white/70 border border-white text-slate-600 px-2.5 py-0.5 rounded-full font-medium">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════ CERTIFICATIONS ══════════════ */
const Certifications = () => (
  <section id="certifications" className="py-20 bg-white px-4">
    <div className="max-w-3xl mx-auto">
      <SectionHeader title="Certifications" sub="Verified Achievements" />
      <div className="space-y-6">
        {[
          { title: "Gen AI Job Simulation", org: "Tata iQ & Forage", cert: CERT_URL, icon: "🤖" },
          { title: "Google Data Analytics", org: "Coursera", cert: "https://github.com/jayasri21072006/pro/blob/main/Google%20Data%20analytics%20professional%20certificate.pdf", icon: "📊" },
          { title: "Machine Learning", org: "Coursera & AWS", cert: "https://github.com/jayasri21072006/pro/blob/main/ML%20certification%20-Coursera%2CAWS.pdf", icon: "🧠" },
          { title: "Data Science & Gen AI", org: "PW Skills & IBM", cert: "https://github.com/jayasri21072006/pro/blob/main/pw%20skills%20DS%20with%20GenAI.pdf", icon: "🚀" }
        ].map((c, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-7 border border-blue-100 shadow hover:shadow-md transition-shadow flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-md flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#2563eb,#0d9488)" }}>
              {c.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                <h3 className="text-lg font-extrabold text-slate-900">{c.title}</h3>
                <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full">✓ Verified</span>
              </div>
              <p className="text-blue-600 font-bold text-sm mb-3">{c.org}</p>
              <a href={c.cert} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-bold rounded-full shadow hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg,#2563eb,#0d9488)" }}>
                📄 View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════ SKILLS ══════════════ */
const skillGroups = [
  {
    icon: "🧠", label: "AI / ML & GenAI",
    color: "text-violet-700", bg: "bg-violet-50", border: "border-violet-100", dot: "bg-violet-500",
    items: ["Machine Learning","Deep Learning","Generative AI","NLP","Computer Vision","RAG Pipeline","Model Quantisation"],
  },
  {
    icon: "💻", label: "Languages",
    color: "text-indigo-700", bg: "bg-indigo-50", border: "border-indigo-100", dot: "bg-indigo-500",
    items: ["Python","Java","JavaScript","TypeScript","C","SQL"],
  },
  {
    icon: "⚙️", label: "Frameworks & Libraries",
    color: "text-teal-700", bg: "bg-teal-50", border: "border-teal-100", dot: "bg-teal-500",
    items: ["TensorFlow","PyTorch","Streamlit","MediaPipe","YOLOv8","React","FastAPI"],
  },
  {
    icon: "🛠️", label: "Tools & Platforms",
    color: "text-slate-700", bg: "bg-slate-50", border: "border-slate-200", dot: "bg-slate-500",
    items: ["Git & GitHub","Jupyter Notebook","VS Code","Google Colab","OpenCV","Docker","MongoDB"],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 px-4" style={{ background: "#f8f7ff" }}>
    <div className="max-w-5xl mx-auto">
      <SectionHeader title="Skills" sub="Technical Expertise" />
      <div className="grid sm:grid-cols-2 gap-5">
        {skillGroups.map(({ icon, label, color, bg, border, dot, items }) => (
          <div key={label} className={`${bg} rounded-2xl p-6 border ${border} hover:shadow-md transition-shadow`}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{icon}</span>
              <h3 className={`text-sm font-extrabold uppercase tracking-wider ${color}`}>{label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill}
                  className="inline-flex items-center gap-1.5 text-sm bg-white border border-white/80 text-slate-700 px-3 py-1.5 rounded-full font-medium shadow-sm hover:shadow transition-shadow">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════ CONTACT ══════════════ */
const Contact = () => (
  <section id="contact" className="py-20 px-4 text-white text-center"
    style={{ background: "linear-gradient(135deg,#7c3aed 0%,#4f46e5 60%,#2563eb 100%)" }}>
    <div className="max-w-xl mx-auto">
      <div className="text-5xl mb-4">👋</div>
      <h2 className="text-3xl font-black mb-3">Get In Touch</h2>
      <p className="text-indigo-200 mb-8 text-base leading-relaxed">
        Open to internships, collaborations, and exciting AI/ML opportunities.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="mailto:jayasri21072006@gmail.com"
          className="px-6 py-2.5 bg-white text-violet-700 rounded-full font-bold text-sm hover:bg-violet-50 transition-colors shadow-lg">
          ✉️ Email Me
        </a>
        <a href="https://github.com/jayasri21072006" target="_blank" rel="noopener noreferrer"
          className="px-6 py-2.5 border-2 border-white/30 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors">
          {GH_ICON} <span className="ml-1">GitHub</span>
        </a>
      </div>
    </div>
  </section>
);

/* ══════════════ FOOTER ══════════════ */
const Footer = () => (
  <footer className="bg-slate-950 text-slate-500 text-center py-5 text-xs font-medium">
    © {new Date().getFullYear()} Jayasri T · AI &amp; ML Engineer
  </footer>
);

/* ══════════════ HOME ══════════════ */
const Home = () => (
  <div className="font-sans antialiased">
    <NavBar />
    <Hero />
    <Education />
    <Experience />
    <Projects />
    <Achievements />
    <Certifications />
    <Skills />
    <Contact />
    <Footer />
  </div>
);

/* ══════════════ APP ══════════════ */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter basename="/aspiring-ai-engineer-portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
