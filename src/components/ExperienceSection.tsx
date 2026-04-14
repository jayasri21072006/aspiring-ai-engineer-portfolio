import SectionHeader from "./SectionHeader";

const experiences = [
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
    title: "Tata Virtual Internship",
    comp: "Tata iQ · Virtual via Forage",
    time: "Completed",
    desc: "Gen AI job simulation covering real-world AI applications, prompt design, and intelligent workflow automation.",
    tags: ["Generative AI", "Prompt Engineering", "AI Workflows"],
    cert: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_jk9FrdQPddzYXuNSH_1753200293130_completion_certificate.pdf",
    icon: "🤖"
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-left">
        <SectionHeader title="Experience" sub="Professional Narrative" />
        <div className="space-y-12">
          {experiences.map((e, idx) => (
            <div key={idx} className="group relative pl-12 border-l-2 border-white/5">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-violet-600 ring-4 ring-slate-950 group-hover:scale-125 transition-transform" />
              <div className="card-glass rounded-[2rem] p-8">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-slate-900">{e.icon}</div>
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-violet-300 transition-colors tracking-tight">{e.title}</h3>
                    <p className="text-violet-300 font-extrabold text-sm tracking-tight">{e.comp}</p>
                  </div>
                  <span className="ml-auto text-[11px] font-black text-white tracking-[0.2em] uppercase">{e.time}</span>
                </div>
                <p className="text-white text-sm leading-relaxed mb-6 font-bold">{e.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {e.tags.map(t => <span key={t} className="px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-[10px] font-black text-violet-300 uppercase tracking-widest">{t}</span>)}
                </div>
                <a href={e.cert} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-black text-violet-300 hover:text-white transition-colors uppercase tracking-widest">📄 View Certificate →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
