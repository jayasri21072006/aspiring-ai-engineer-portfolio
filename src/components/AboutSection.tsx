import SectionHeader from "./SectionHeader";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-left">
        <SectionHeader title="About Me" sub="Professional Narrative" />
        
        <div className="space-y-6 text-white/90 text-lg leading-relaxed">
          <p>
            I am a focused AI & Machine Learning Engineer specializing in building end-to-end intelligent systems.
            My work centers on the intersection of deep learning, natural language processing, and computer vision,
            aiming to transform raw data into actionable insights through robust, scalable models.
          </p>
          <p>
            Maintaining a <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-300 font-black">9.35 CGPA</span> at Anand Institute of Higher Technology, 
            I combine academic rigor with extensive practical experience gained through four internships across 
            diverse specialties — from Node.js backend architecture to ML pipelines and Python automation.
          </p>
          <p>
            My philosophy is built on three core pillars: <span className="text-violet-300 font-bold">Precision</span> in data processing, 
            <span className="text-violet-300 font-bold">Innovation</span> in model selection, and <span className="text-violet-300 font-bold">Efficiency</span> in deployment. 
            Whether it's predicting crypto liquidity or building real-time proctoring systems, 
            I strive for excellence in every line of code.
          </p>
        </div>

        <div className="flex gap-4 mt-10">
          <a href="#projects" className="px-8 py-4 rounded-2xl text-xs font-black text-white uppercase tracking-widest shadow-xl shadow-violet-600/20 hover:scale-105 transition-all" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>Explore Projects</a>
          <a href="#contact" className="px-8 py-4 rounded-2xl text-xs font-black text-white uppercase tracking-widest border border-white/20 hover:bg-white/10 transition-all bg-white/5">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
