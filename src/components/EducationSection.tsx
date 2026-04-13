import SectionHeader from "./SectionHeader";
import { ExternalLink, ChevronRight } from "lucide-react";

const courses = [
  {
    name: "MongoDB Developer",
    platform: "MongoDB University",
    summary: "Proficiency in MongoDB indexing, aggregation pipelines, and data modeling for scalable applications.",
    links: [{ label: "View Certificate", url: "https://github.com/jayasri21072006/pro/blob/main/MongoDB.pdf" }]
  },
  {
    name: "Google Data Analytics",
    platform: "Coursera",
    summary: "End-to-end data analysis program covering data cleaning, visualization, and reporting.",
    links: [{ label: "View Certificate", url: "https://github.com/jayasri21072006/pro/blob/main/Google%20Data%20analytics%20professional%20certificate.pdf" }]
  },
  {
    name: "Machine Learning",
    platform: "Coursera & AWS",
    summary: "Core ML concepts and hands-on projects for practical model building.",
    links: [{ label: "View Certificate", url: "https://github.com/jayasri21072006/pro/blob/main/ML%20certification%20-Coursera%2CAWS.pdf" }]
  },
  {
    name: "Data Science & Gen AI",
    platform: "PW Skills & IBM",
    summary: "Comprehensive training combined with hands-on generative AI techniques.",
    links: [{ label: "View Certificate", url: "https://www.coursera.org/account/accomplishments/verify/T9ZQO0EV81S4" }]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-left">
        <SectionHeader title="Education" sub="Academic Timeline" />
        <div className="card-glass rounded-[2.5rem] p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/5 rounded-full -mr-32 -mt-32 blur-[80px]" />
          <div className="flex items-start gap-8 flex-wrap md:flex-nowrap">
            <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-4xl shadow-xl flex-shrink-0 relative z-10"
              style={{ background: "linear-gradient(135deg,#4f46e5,#2563eb)" }}>🎓</div>
            <div className="flex-1 min-w-0 relative z-10">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-black text-white mb-1 leading-tight">B.Tech - Artificial Intelligence & Data Science</h3>
                  <p className="text-violet-400 font-bold text-lg">Anand Institute of Higher Technology, Chennai</p>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-black px-4 py-1.5 rounded-full tracking-widest h-fit">PURSUING</span>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-slate-900 rounded-3xl px-8 py-5 border border-white/5">
                  <p className="text-3xl font-black text-white">9.35</p>
                  <p className="text-xs text-slate-500 mt-1 font-bold uppercase tracking-widest text-[10px]">CGPA · Up to 5th Sem</p>
                </div>
                <div className="bg-slate-900 rounded-3xl px-8 py-5 border border-white/5">
                  <p className="text-3xl font-black text-white">2023–27</p>
                  <p className="text-xs text-slate-500 mt-1 font-bold uppercase tracking-widest text-[10px]">Batch</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeader title="Certifications" sub="Verified Credentials" />
          <div className="grid sm:grid-cols-2 gap-6">
            {courses.map((c, idx) => (
              <div key={idx} className="card-glass p-8 rounded-[2rem] h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-2xl shadow-inner">📜</div>
                  <div>
                    <h4 className="text-white font-black text-sm group-hover:text-violet-400 transition-colors">{c.name}</h4>
                    <p className="text-violet-400 text-[10px] font-black uppercase tracking-widest">{c.platform}</p>
                  </div>
                </div>
                <p className="text-slate-200 text-xs leading-relaxed mb-6 flex-grow font-medium">{c.summary}</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {c.links.map((link, lIdx) => (
                    <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 border border-white/10 text-white rounded-xl text-center text-[10px] font-black hover:bg-white hover:text-slate-950 transition-all uppercase tracking-widest">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
