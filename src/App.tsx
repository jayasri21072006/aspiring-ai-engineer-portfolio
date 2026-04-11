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

const SectionHeader = ({ title, sub }: { title: string; sub: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{title}</h2>
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">{sub}</p>
    <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
  </div>
);

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

const Hero = () => (
  <section id="about" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 text-center pt-20"
    style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #eef2ff 50%, #f0f9ff 100%)" }}>
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
      style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }} />
    <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full opacity-15 blur-3xl"
      style={{ background: "radial-gradient(circle, #6366f1, transparent)" }} />

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
      <a href="#projects" className="px-6 py-2.5 rounded-full text-sm font-bold text-white shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 transition-all" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>View Projects</a>
      <a href="#contact" className="px-6 py-2.5 rounded-full text-sm font-bold text-violet-700 border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 transition-all">Contact Me</a>
    </div>

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

const Education = () => (
  <section id="education" className="py-20 bg-white px-4">
    <div className="max-w-3xl mx-auto">
      <SectionHeader title="Education" sub="Academic Background" />
      <div className="relative pl-8 border-l-2 border-indigo-100">
        <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-indigo-600 border-2 border-white shadow" />
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 shadow-sm">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#4f46e5,#2563eb)" }}>
              🎓
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                <h3 className="text-lg font-extrabold text-slate-900">B.Tech - Artificial Intelligence &amp; Data Science</h3>
                <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full flex-shrink-0">● Pursuing</span>
              </div>
              <p className="text-indigo-600 font-semibold text-sm mb-5">
                Anand Institute of Higher Technology, Chennai
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-indigo-100 text-center">
                  <p className="text-2xl font-black text-indigo-700">9.40</p>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">CGPA · Up to 4th Sem</p>
                </div>
                <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-blue-100 text-center">
                  <p className="text-2xl font-black text-blue-600">2023–27</p>
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

const Experience = () => (
  <section id="experience" className="py-20 px-4" style={{ background: "#f8f7ff" }}>
    <div className="max-w-3xl mx-auto">
      <SectionHeader title="Experience" sub="Internships & Training" />
      <div className="relative border-l-2 border-violet-200 pl-8 ml-2 space-y-8">
        {[
          { role: "Node.js Intern", company: "Askan Technologies", period: "Dec 2025", desc: "Built RESTful APIs, implemented auth, and integrated services.", icon: "🚀", cert: "https://github.com/jayasri21072006/pro/blob/main/Askan%20Node.js%20intern.pdf" },
          { role: "ML Intern", company: "Saiket Systems", period: "Jun-Jul 2025", desc: "Developed ML pipelines and model monitoring solutions.", icon: "🧠", cert: "https://github.com/jayasri21072006/pro/blob/main/saiket%20Ml%20intern.pdf" },
          { role: "Python Intern", company: "Cognifyz", period: "Feb-Mar 2025", desc: "Automated ETL workflows and created reusable modules.", icon: "🐍", cert: "https://github.com/jayasri21072006/pro/blob/main/cognifyz%20python%20Intern.pdf" },
          { role: "Gen AI Simulation", company: "Tata iQ · Forage", period: "Completed", desc: "Real-world Gen AI apps and prompt engineering.", icon: "🤖", cert: CERT_URL }
        ].map((exp, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-violet-600 border-2 border-white shadow" />
            <div className="bg-white rounded-2xl p-7 shadow border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-xl shadow" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>{exp.icon}</div>
                <div><h3 className="text-lg font-black text-slate-900">{exp.role}</h3><p className="text-violet-600 font-bold text-sm">{exp.company}</p></div>
              </div>
              <p className="text-slate-600 text-sm mb-4">{exp.desc}</p>
              <a href={exp.cert} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-violet-700 hover:text-violet-900 transition-colors">📄 View Certificate →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20 bg-white px-4">
    <div className="max-w-5xl mx-auto">
      <SectionHeader title="Projects" sub="Featured AI Solutions" />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { emoji: "🎓", title: "Proctoring System", sub: "YOLOv8 & MediaPipe", desc: "AI real-time exam monitoring system.", git: "https://github.com/jayasri21072006/examination-monitoring-system" },
          { emoji: "🚀", title: "Crypto Predictor", sub: "ML Market Tool", desc: "RandomForest crypto trend predictions.", git: "https://github.com/jayasri21072006/crypto-liquidity-predictor", demo: "https://crypto-liquidity-predictor-jorq5yxc3mrkqfeovdcvuq.streamlit.app/" },
          { emoji: "💬", title: "Sentiment App", sub: "NLP SIH 2025", desc: "Stakeholder sentiment analytics with WordCloud.", git: "https://github.com/jayasri21072006/sentiment_analysis_with_wordcloud", demo: "https://sentimentanalysiswithwordcloud.streamlit.app/" }
        ].map((p, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 flex flex-col h-full hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm mb-5 bg-slate-50">{p.emoji}</div>
            <h3 className="text-lg font-black text-slate-900 mb-1">{p.title}</h3>
            <p className="text-xs text-violet-500 font-bold uppercase tracking-wider mb-4">{p.sub}</p>
            <p className="text-slate-600 text-sm mb-6 flex-grow">{p.desc}</p>
            <div className="flex gap-2">
              <a href={p.git} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800">GitHub</a>
              {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-violet-600 text-white text-xs font-bold rounded-lg hover:bg-violet-700">Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Achievements = () => (
  <section id="achievements" className="py-20 px-4" style={{ background: "#f8f7ff" }}>
    <div className="max-w-5xl mx-auto">
      <SectionHeader title="Achievements" sub="Milestones" />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: "🛒", title: "Flipkart Grid 7.0", sub: "Qualified Round 2" },
          { icon: "💡", title: "LeetCode 200+", sub: "Java DSA Specialist" },
          { icon: "🏆", title: "SIH 2025 Selected", sub: "Internal Round" }
        ].map((a, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm text-center">
            <div className="text-3xl mb-4">{a.icon}</div>
            <h3 className="text-base font-extrabold text-slate-900 mb-1">{a.title}</h3>
            <p className="text-xs font-bold text-violet-600">{a.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Certifications = () => (
  <section id="certifications" className="py-20 bg-white px-4">
    <div className="max-w-3xl mx-auto">
      <SectionHeader title="Certifications" sub="Verified" />
      <div className="space-y-4">
        {[
          { title: "Google Data Analytics", org: "Coursera", cert: "https://github.com/jayasri21072006/pro/blob/main/Google%20Data%20analytics%20professional%20certificate.pdf", icon: "📊" },
          { title: "Machine Learning", org: "Coursera & AWS", cert: "https://github.com/jayasri21072006/pro/blob/main/ML%20certification%20-Coursera%2CAWS.pdf", icon: "🧠" },
          { title: "Data Science & Gen AI", org: "PW Skills & IBM", cert: "https://github.com/jayasri21072006/pro/blob/main/pw%20skills%20DS%20with%20GenAI.pdf", icon: "🚀" }
        ].map((c, idx) => (
          <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">{c.icon}</div>
            <div className="flex-1"><h4 className="text-sm font-black text-slate-900">{c.title}</h4><p className="text-[10px] text-violet-600 font-bold">{c.org}</p></div>
            <a href={c.cert} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] font-bold rounded hover:bg-slate-100">VIEW →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-white px-4">
    <div className="max-w-5xl mx-auto text-center">
      <SectionHeader title="Skills" sub="Tools" />
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {["Python", "SQL", "Java", "JS", "TS", "ML", "DL", "GenAI", "NLP", "CV", "React", "Docker", "Git"].map(s => (
          <span key={s} className="px-6 py-2 bg-violet-50 text-violet-700 rounded-full font-black text-xs shadow-sm">{s}</span>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 px-4 text-white text-center" style={{ background: "linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%)" }}>
    <h2 className="text-4xl font-black mb-10">Get In Touch</h2>
    <div className="flex justify-center gap-4">
      <a href="mailto:jayasri21072006@gmail.com" className="px-10 py-3 bg-white text-violet-700 rounded-full font-black text-sm shadow-xl">✉️ Email Me</a>
      <a href="https://github.com/jayasri21072006" target="_blank" rel="noopener noreferrer" className="px-10 py-3 border-2 border-white/30 text-white rounded-full font-black text-sm">GitHub</a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-600 text-center py-6 text-[10px] font-black uppercase tracking-widest">
    © {new Date().getFullYear()} Jayasri T · AI & ML Engineer
  </footer>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter basename="/aspiring-ai-engineer-portfolio">
        <Toaster />
        <Routes>
          <Route path="/" element={
            <div className="font-sans antialiased text-slate-900">
              <NavBar /><Hero /><Education /><Experience /><Projects /><Achievements /><Certifications /><Skills /><Contact /><Footer />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
