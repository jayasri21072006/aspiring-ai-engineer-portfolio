import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 text-center pt-20">
      <div className="relative z-10 max-w-4xl mx-auto">


        <h1 className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-100 to-white mb-4 tracking-tighter leading-[0.9] animate-slide-up">
          Jayasri T
        </h1>
        <p className="text-3xl sm:text-4xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400 animate-slide-up">
          AI & ML Engineer
        </p>
        <p className="max-w-2xl text-white text-lg leading-relaxed mb-10 animate-fade-in-delayed mx-auto font-bold">
          Aspiring AI & ML Engineer with a strong foundation in deep learning, natural language processing, and computer vision. 
          Proven track record of building end-to-end intelligent systems, from real-time monitoring solutions to 
          predictive analytics platforms. Maintaining academic excellence with a CGPA of{" "}
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-orange-400 border-b-2 border-amber-400/60">9.35</span> (up to 5th Semester).
        </p>

        <div className="flex gap-4 flex-wrap justify-center mb-16 animate-fade-in-delayed">
          <a href="#projects" className="px-8 py-4 rounded-2xl text-sm font-black text-white shadow-2xl shadow-violet-600/30 hover:scale-105 hover:rotate-1 transition-all" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>EXPLORE PROJECTS</a>
          <a href="#contact" className="px-8 py-4 rounded-2xl text-sm font-black text-white border border-white/20 hover:bg-white/10 transition-all uppercase tracking-widest bg-white/5">GET IN TOUCH</a>
          <a href="https://github.com/jayasri21072006/pro/raw/main/CV_Jayasri.pdf" download className="px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400/10 hover:border-emerald-400/70 transition-all bg-emerald-400/5 flex items-center gap-2">⬇ DOWNLOAD CV</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mx-auto animate-fade-in-delayed">
          {[
            { label: "CGPA", value: "9.35", icon: "💎", color: "from-blue-400 to-cyan-400" },
            { label: "DSA SOLVED", value: "200+", icon: "🔥", color: "from-orange-400 to-red-400" },
            { label: "INTERNSHIPS", value: "4", icon: "🏢", color: "from-violet-400 to-fuchsia-400" },
            { label: "PROJECTS", value: "3", icon: "🚀", color: "from-emerald-400 to-teal-400" },
          ].map(({ label, value, icon, color }) => (
            <div key={label} className="card-glass rounded-[2.5rem] p-6 text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="text-3xl mb-3 filter grayscale group-hover:grayscale-0 transition-all">{icon}</div>
              <p className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${color} tracking-tighter`}>{value}</p>
              <p className="text-[12px] text-white font-black uppercase tracking-widest mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
