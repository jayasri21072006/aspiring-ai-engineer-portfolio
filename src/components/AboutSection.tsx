import SectionHeader from "./SectionHeader";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4">
      <div className="max-w-6xl mx-auto text-left">
        <SectionHeader title="About Me" sub="Professional Narrative" />
        
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-3/5 space-y-8">
            <h3 className="text-4xl font-black text-white tracking-tighter leading-tight">
              Bridging Theory and <span className="text-violet-500">Intelligent Deployment.</span>
            </h3>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a focused AI & Machine Learning Engineer specializing in building end-to-end intelligent systems.
                My work centers on the intersection of deep learning, natural language processing, and computer vision,
                aiming to transform raw data into actionable insights through robust, scalable models.
              </p>
              <p>
                Maintaining a <span className="text-white font-bold">9.35 CGPA</span> at Anand Institute of Higher Technology, 
                I combine academic rigor with extensive practical experience gained through four internships across 
                diverse specialties—from Node.js backend architecture to ML pipelines and Python automation.
              </p>
              <p>
                My philosophy is built on three core pillars: <span className="text-violet-400">Precision</span> in data processing, 
                <span className="text-violet-400">Innovation</span> in model selection, and <span className="text-violet-400">Efficiency</span> 
                in deployment. Whether it's predicting crypto liquidity or building real-time proctoring systems, 
                I strive for excellence in every line of code.
              </p>
            </div>
            
            <div className="pt-8 flex gap-8 border-t border-white/5">
              <div>
                <p className="text-3xl font-black text-white">4+</p>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Internships</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">200+</p>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">DSA Problems</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">9.35</p>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">CGPA</p>
              </div>
            </div>
          </div>

          <div className="md:w-2/5 w-full">
            <div className="card-glass rounded-[3rem] p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-violet-600/20 transition-all" />
              <h4 className="text-xl font-black text-white mb-6">Mission Control</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-violet-500 font-black">01</span>
                  <p className="text-sm text-slate-400"><strong className="text-white block mb-1">State-of-the-art AI</strong> Implementing latest architectures like YOLOv8 and Transformer models for real-world impact.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-violet-500 font-black">02</span>
                  <p className="text-sm text-slate-400"><strong className="text-white block mb-1">Production Readiness</strong> Moving models from Jupyter notebooks to scalable production environments using Flask and Docker.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-violet-500 font-black">03</span>
                  <p className="text-sm text-slate-400"><strong className="text-white block mb-1">Cross-Functional Integration</strong> Bridging the gap between intelligent backends and seamless user interfaces.</p>
                </li>
              </ul>
              <a href="#contact" className="mt-10 block w-full py-4 bg-violet-600 text-white text-center rounded-2xl font-black text-xs hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-600/20 transition-all uppercase tracking-widest">Secure Collaboration</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
