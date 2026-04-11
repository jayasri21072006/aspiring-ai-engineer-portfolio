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

/* ══════════════ COMPONENTS ══════════════ */
const SectionHeader = ({ title, sub }: { title: string; sub: string }) => (
  <div className="text-center mb-16 relative z-10">
    <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">{title}</h2>
    <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">{sub}</p>
    <div className="mt-4 mx-auto w-16 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20" />
  </div>
);

const NavBar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between shadow-2xl">
    <span className="font-black text-white text-2xl tracking-tighter">
      Jayasri<span className="text-violet-500"> T</span>
    </span>
    <div className="flex gap-2">
      {["About","Education","Experience","Projects","Achievements","Certifications","Skills","Contact"].map((s) => (
        <a key={s} href={`#${s.toLowerCase()}`}
          className="px-3 py-1.5 rounded-full text-xs font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all hidden lg:inline-block">
          {s}
        </a>
      ))}
    </div>
  </nav>
);

const Hero = () => (
  <section id="about" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 text-center pt-20 bg-slate-950">
    {/* Live Background - Subtle Blobs */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
    
    <div className="relative z-10 max-w-4xl mx-auto">
      <div className="relative mb-8 inline-block">
        <div className="w-36 h-36 rounded-[2.5rem] flex items-center justify-center text-white text-5xl font-black shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
          style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}>
          JT
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-2xl border-4 border-slate-950 flex items-center justify-center text-white text-sm shadow-xl animate-bounce">✓</div>
      </div>

      <h1 className="text-6xl sm:text-7xl font-black text-white mb-4 tracking-tighter leading-[1.1]">
        Jayasri T
      </h1>
      <p className="text-2xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
        AI &amp; ML Engineer
      </p>
      <p className="max-w-2xl text-slate-400 text-lg leading-relaxed mb-10">
        Building the future with intelligent systems. Specialize in Generative AI and scalable ML architectures.
        Currently pursuing B.Tech in AI &amp; DS with a CGPA of{" "}
        <span className="font-extrabold text-violet-400 border-b-2 border-violet-500/30">9.35</span> (up to 5th Semester).
      </p>

      <div className="flex gap-4 flex-wrap justify-center mb-16">
        <a href="#projects" className="px-8 py-3.5 rounded-2xl text-sm font-black text-white shadow-xl shadow-violet-500/20 hover:scale-105 transition-all" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>View Projects</a>
        <a href="#contact" className="px-8 py-3.5 rounded-2xl text-sm font-black text-slate-300 border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all">Get In Touch</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mx-auto">
        {[
          { label: "CGPA", value: "9.35", icon: "🎯" },
          { label: "DSA SOLVED", value: "200+", icon: "💻" },
          { label: "INTERNSHIPS", value: "4", icon: "🏢" },
          { label: "PROJECTS", value: "3", icon: "🚀" },
        ].map(({ label, value, icon }) => (
          <div key={label} className="bg-white/5 backdrop-blur-sm rounded-[2rem] p-6 border border-white/5 hover:border-white/10 transition-colors">
            <div className="text-3xl mb-2">{icon}</div>
            <p className="text-3xl font-black text-white tracking-tighter">{value}</p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="py-32 bg-slate-950 px-4">
    <div className="max-w-4xl mx-auto">
      <SectionHeader title="Education" sub="Academic Timeline" />
      <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/5 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/5 rounded-full -mr-32 -mt-32 blur-[80px]" />
        <div className="flex items-start gap-8 flex-wrap md:flex-nowrap">
          <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-4xl shadow-xl flex-shrink-0 relative z-10"
            style={{ background: "linear-gradient(135deg,#4f46e5,#2563eb)" }}>🎓</div>
          <div className="flex-1 min-w-0 relative z-10">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-black text-white mb-1">B.Tech - Artificial Intelligence &amp; Data Science</h3>
                <p className="text-violet-400 font-bold text-lg">Anand Institute of Higher Technology, Chennai</p>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-black px-4 py-1.5 rounded-full tracking-widest h-fit">PURSUING</span>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-slate-900 rounded-3xl px-8 py-5 border border-white/5">
                <p className="text-3xl font-black text-white">9.35</p>
                <p className="text-xs text-slate-500 mt-1 font-bold uppercase tracking-widest">CGPA · 5th SEM</p>
              </div>
              <div className="bg-slate-900 rounded-3xl px-8 py-5 border border-white/5">
                <p className="text-3xl font-black text-white">2023–27</p>
                <p className="text-xs text-slate-500 mt-1 font-bold uppercase tracking-widest">BATCH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-32 bg-slate-950 px-4 relative">
    <div className="absolute inset-0 bg-violet-950/20 skew-y-3 -z-10" />
    <div className="max-w-4xl mx-auto">
      <SectionHeader title="Experience" sub="Industry Presence" />
      <div className="space-y-12">
        {[
          {
            title: "Node.js Intern",
            comp: "Askan Technologies",
            time: "Dec 2025",
            desc: "Engineered scalable backend architectures and robust RESTful APIs using Node.js and Express.",
            tags: ["Node.js", "Express", "REST API"],
            icon: "🚀"
          },
          {
            title: "ML Intern",
            comp: "Saiket Systems",
            time: "Jun 2025 - Jul 2025",
            desc: "Deployment and monitoring of ML pipelines. Focused on model efficiency and data engineering tasks.",
            tags: ["Python", "CI/CD", "Scikit"],
            icon: "🧠"
          },
          {
            title: "Python Intern",
            comp: "Cognifyz Technologies",
            time: "Feb 2025 - Mar 2025",
            desc: "Designed and implemented automated ETL scripts and data processing modules in Python.",
            tags: ["Automation", "ETL", "Python"],
            icon: "🐍"
          },
          {
            title: "Tata Virtual Internship",
            comp: "Tata iQ · Virtual via Forage",
            time: "Completed",
            desc: "Interactive simulation for Generative AI applications, prompt engineering, and intelligent workflow automation.",
            tags: ["Gen AI", "Prompt Engineering"],
            icon: "🤖"
          }
        ].map((e, idx) => (
          <div key={idx} className="group relative pl-12 border-l-2 border-white/5">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-violet-600 ring-4 ring-slate-950 shadow-lg group-hover:scale-125 transition-transform" />
            <div className="bg-white/5 backdrop-blur-sm rounded-[2rem] p-8 border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-slate-900 shadow-inner">{e.icon}</div>
                <div>
                  <h3 className="text-xl font-black text-white">{e.title}</h3>
                  <p className="text-violet-400 font-bold text-sm tracking-tight">{e.comp}</p>
                </div>
                <span className="ml-auto text-[10px] font-black text-slate-500 tracking-widest uppercase">{e.time}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{e.desc}</p>
              <div className="flex flex-wrap gap-2">
                {e.tags.map(t => <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-black text-slate-300 uppercase tracking-wider">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-32 bg-slate-950 px-4">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="Projects" sub="Innovation Gallery" />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { emoji: "🎓", title: "AI Proctoring", tags: ["YOLOv8", "Computer Vision"], desc: "Real-time intelligent exam monitoring system with gesture detection.", git: "https://github.com/jayasri21072006/examination-monitoring-system" },
          { emoji: "📈", title: "Crypto Predictor", tags: ["ML", "Market Analytics"], desc: "Market liquidity analysis using RandomForest and comprehensive EDA.", git: "https://github.com/jayasri21072006/crypto-liquidity-predictor" },
          { emoji: "💬", title: "Sentiment Hub", tags: ["NLP", "SIH 2025"], desc: "Selected at SIH 2025 college round. Analyzes stakeholder feedback volume.", git: "https://github.com/jayasri21072006/sentiment_analysis_with_wordcloud" }
        ].map((p, idx) => (
          <div key={idx} className="bg-white/5 border border-white/5 rounded-[2.5rem] p-8 hover:bg-white/[0.07] transition-all hover:-translate-y-2 group shadow-2xl flex flex-col h-full">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-3xl mb-6 shadow-inner ring-1 ring-white/5 group-hover:ring-violet-500/50 transition-all">{p.emoji}</div>
            <h3 className="text-2xl font-black text-white mb-2">{p.title}</h3>
            <div className="flex gap-2 mb-4">
              {p.tags.map(t => <span key={t} className="text-[10px] font-black text-violet-500 uppercase tracking-widest">{t}</span>)}
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{p.desc}</p>
            <a href={p.git} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-white text-slate-950 text-center rounded-2xl font-black text-xs hover:bg-violet-400 transition-colors">GITHUB REPO</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Achievements = () => (
  <section id="achievements" className="py-32 bg-slate-950 px-4">
    <div className="max-w-4xl mx-auto">
      <SectionHeader title="Achievements" sub="Hall of Fame" />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: "🛍️", title: "Flipkart Grid 7.0", sub: "Selected for Round 2", detail: "Successfully selected for the second round of Flipkart's nationwide engineering challenge." },
          { icon: "💻", title: "LeetCode 200+", sub: "DSA Expert", detail: "Solved 200+ advanced algorithmic problems focused on core structures." },
          { icon: "🏆", title: "SIH 2025 Selected", sub: "College Level", detail: "Proposal selected to represent the college at the national level hackathon." }
        ].map((a, idx) => (
          <div key={idx} className="bg-white/5 rounded-[2.5rem] p-8 border border-white/5 text-center hover:border-violet-500/30 transition-all group">
            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">{a.icon}</div>
            <h4 className="text-lg font-black text-white mb-2">{a.title}</h4>
            <p className="text-xs font-black text-violet-500 uppercase tracking-widest mb-4">{a.sub}</p>
            <p className="text-slate-500 text-sm leading-relaxed">{a.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Certifications = () => (
  <section id="certifications" className="py-32 bg-slate-950 px-4">
    <div className="max-w-4xl mx-auto">
      <SectionHeader title="Certifications" sub="Knowledge verified" />
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          { title: "MongoDB Associate", org: "MongoDB University", icon: "🍃", url: "https://github.com/jayasri21072006/pro/blob/main/MongoDB.pdf" },
          { title: "Google Data Analytics", org: "Coursera", icon: "📊", url: "https://github.com/jayasri21072006/pro/blob/main/Google%20Data%20analytics%20professional%20certificate.pdf" },
          { title: "Machine Learning", org: "AWS", icon: "🧠", url: "https://github.com/jayasri21072006/pro/blob/main/ML%20certification%20-Coursera%2CAWS.pdf" },
          { title: "Data Science", org: "IBM", icon: "🚀", url: "https://github.com/jayasri21072006/pro/blob/main/pw%20skills%20DS%20with%20GenAI.pdf" }
        ].map((c, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-white/5 p-6 rounded-[1.5rem] border border-white/5 hover:bg-white/[0.08] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-2xl shadow-inner">{c.icon}</div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-black text-sm truncate">{c.title}</h4>
              <p className="text-violet-500 text-[10px] font-black uppercase tracking-widest">{c.org}</p>
            </div>
            <a href={c.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white text-xs hover:bg-white hover:text-slate-950 transition-colors">↗</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-32 bg-slate-950 px-4">
    <div className="max-w-5xl mx-auto">
      <SectionHeader title="Skills" sub="Technical Arsenal" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "AI/ML & GENAI", items: ["ML", "DL", "GenAI", "NLP", "CV"] },
          { label: "LANGUAGES", items: ["Python", "Java", "JS", "TS", "SQL"] },
          { label: "TECH STACK", items: ["TensorFlow", "React", "Docker", "FastAPI"] },
          { label: "DATA TOOLS", items: ["MongoDB", "YOLOv8", "OpenCV", "Git"] },
        ].map(g => (
          <div key={g.label} className="bg-white/5 p-6 rounded-[2rem] border border-white/5">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">{g.label}</h4>
            <div className="flex flex-wrap gap-2">
              {g.items.map(i => <span key={i} className="px-3 py-1 bg-violet-600/10 border border-violet-500/20 text-violet-400 font-bold text-[10px] rounded-lg">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 px-4 bg-slate-950 text-center relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px] -z-10" />
    <div className="max-w-2xl mx-auto relative z-10">
      <h2 className="text-5xl font-black text-white mb-4 tracking-tighter">Let's Create.</h2>
      <p className="text-slate-400 text-lg mb-12">I am always looking for collaborative opportunities in AI/ML.</p>
      <div className="flex justify-center gap-6">
        <a href="mailto:jayasri21072006@gmail.com" className="px-12 py-4 bg-white text-slate-950 rounded-[1.5rem] font-black tracking-tight hover:scale-105 transition-transform shadow-2xl shadow-white/10">Email Me</a>
        <a href="https://github.com/jayasri21072006" target="_blank" rel="noopener noreferrer" className="px-12 py-4 border border-white/20 text-white rounded-[1.5rem] font-black hover:bg-white/5 transition-colors tracking-tight">GitHub</a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 border-t border-white/5 text-slate-700 text-center py-10 text-[10px] font-black tracking-[0.4em] uppercase">
    © {new Date().getFullYear()} Jayasri T · AI &amp; ML ENGINEER
  </footer>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter basename="/aspiring-ai-engineer-portfolio">
        <div className="bg-slate-950 min-h-screen selection:bg-violet-500 selection:text-white">
          <NavBar /><Hero /><Education /><Experience /><Projects /><Achievements /><Certifications /><Skills /><Contact /><Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
