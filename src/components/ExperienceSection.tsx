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
                    <h3 className="text-xl font-black text-white group-hover:text-violet-400 transition-colors">{e.title}</h3>
                    <p className="text-violet-400 font-bold text-sm tracking-tight">{e.comp}</p>
                  </div>
                  <span className="ml-auto text-[10px] font-black text-slate-400 tracking-widest uppercase">{e.time}</span>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed mb-6 font-medium">{e.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {e.tags.map(t => <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-black text-slate-300 uppercase tracking-wider">{t}</span>)}
                </div>
                <a href={e.cert} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-violet-400 hover:text-white transition-colors">📄 View Certificate →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
