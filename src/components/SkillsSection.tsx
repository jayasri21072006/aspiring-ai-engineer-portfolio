import SectionHeader from "./SectionHeader";

const skills = [
  "Python (Intermediate/Advanced)", "SQL", "Java", "C",
  "HTML CSS JS (Intermediate)",
  "Machine Learning", "Deep Learning", "Generative AI", "NLP", "Computer Vision",
  "Scikit-learn", "TensorFlow", "PyTorch", "MediaPipe", "YOLOv8",
  "RAG Pipeline", "Model Quantisation", "CNN", "Data Analysis",
  "Flask API", "FastAPI", "Streamlit",
  "MongoDB", "Vector DB", "Git & GitHub", "Docker", "Problem Solving"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Skills" sub="Technical Expertise" />
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="px-6 py-3 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300 group cursor-default"
            >
              <span className="text-sm font-black text-slate-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-indigo-400 uppercase tracking-widest transition-all">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
