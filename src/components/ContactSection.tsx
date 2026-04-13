import SectionHeader from "./SectionHeader";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-4 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px] -z-10" />
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader title="Connect" sub="Let's Work Together" />
        
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="card-glass rounded-[2rem] p-8 md:p-12">
            <h3 className="text-3xl font-black text-white mb-8 tracking-tighter">Get in Touch.</h3>
            <div className="space-y-6">
              <a href="mailto:jayasri21072006@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-xl group-hover:bg-violet-600 transition-colors">📧</div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email</p>
                  <p className="text-white font-bold">jayasri21072006@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-xl group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all">📍</div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300">Tamil Nadu, India</p>
                  <p className="text-sm font-bold text-slate-300 mt-0.5">Chengalpattu Dist.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-glass rounded-[2rem] p-8 md:p-12 flex flex-col justify-center">
            <p className="text-slate-400 text-lg mb-8">I am always looking for collaborative opportunities in AI/ML and Data Science.</p>
            <div className="flex flex-col gap-4">
              <a href="mailto:jayasri21072006@gmail.com" className="w-full py-4 bg-white text-slate-950 rounded-2xl font-black text-center hover:scale-[1.02] transition-transform">Email Me</a>
              <div className="flex gap-4">
                <a href="https://github.com/jayasri21072006" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 border border-white/10 text-white rounded-2xl font-black text-center hover:bg-white/5 transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/jayasri-t-sri" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 border border-white/10 text-white rounded-2xl font-black text-center hover:bg-white/5 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
