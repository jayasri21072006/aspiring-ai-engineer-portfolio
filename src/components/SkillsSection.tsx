import SectionHeader from "./SectionHeader";
import { Code2, Brain, Box, Wrench } from "lucide-react";

const skillGroups = [
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6 text-cyan-300" />,
    color: "from-cyan-500/20 to-blue-500/20",
    border: "group-hover:border-cyan-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]",
    textGradient: "from-cyan-300 to-blue-300",
    skills: ["Python", "SQL", "Java", "C", "HTML/CSS/JS"]
  },
  {
    category: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6 text-violet-300" />,
    color: "from-violet-500/20 to-purple-500/20",
    border: "group-hover:border-violet-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
    textGradient: "from-violet-300 to-fuchsia-300",
    skills: ["Deep Learning", "Generative AI", "NLP", "Computer Vision", "RAG Pipeline"]
  },
  {
    category: "Frameworks & Libs",
    icon: <Box className="w-6 h-6 text-fuchsia-300" />,
    color: "from-fuchsia-500/20 to-pink-500/20",
    border: "group-hover:border-fuchsia-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(217,70,239,0.2)]",
    textGradient: "from-fuchsia-300 to-pink-300",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "YOLOv8", "FastAPI", "Streamlit"]
  },
  {
    category: "Tools & Engineering",
    icon: <Wrench className="w-6 h-6 text-emerald-300" />,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
    textGradient: "from-emerald-300 to-teal-300",
    skills: ["MongoDB", "Vector DB", "Docker", "Git & GitHub", "Model Quantisation"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader title="Skills" sub="Technical Expertise" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx} 
              className={`card-glass p-8 rounded-[2.5rem] border border-white/10 transition-all duration-500 group hover:-translate-y-2 ${group.border} ${group.glow}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-2xl bg-white/5 shadow-inner transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  {group.icon}
                </div>
                <h3 className={`text-lg font-black text-transparent bg-clip-text bg-gradient-to-r ${group.textGradient} uppercase tracking-tight`}>
                  {group.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[11px] font-black text-white hover:bg-white/10 hover:border-white/20 transition-all uppercase tracking-widest cursor-default"
                  >
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
};

export default SkillsSection;
