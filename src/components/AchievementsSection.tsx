import SectionHeader from "./SectionHeader";

const achievements = [
  { 
    icon: "🛍️", 
    title: "Flipkart Grid 7.0", 
    sub: "Selected for Round 2", 
    detail: "Selected for the second round of Flipkart's national engineering challenge, progressing through the initial phase." 
  },
  { 
    icon: "⭐", 
    title: "HackerRank 6-Star Python", 
    sub: "Gold Badge | 2277.5 Points", 
    detail: "Highest proficiency level with a 6-Star Badge and Gold Level in Python, achieving a top score of 2277.5 through advanced problem solving." 
  },
  { icon: "💻", title: "LeetCode 200+", sub: "Data Structures & Algos", detail: "Solved 200+ DSA problems covering Arrays, Linked Lists, Trees, Graphs, Dynamic Programming, and more." },
  { icon: "🏆", title: "SIH 2025 Selected", sub: "College Level Round", detail: "Sentiment Analysis project selected at the Internal SIH 2025 college round, competing with teams across departments." }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Achievements" sub="Milestones" />
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, idx) => (
            <div key={idx} className="card-glass rounded-[2.5rem] p-8 text-center group hover:border-violet-500/30 transition-all">
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">{a.icon}</div>
              <h4 className="text-lg font-black text-white mb-2">{a.title}</h4>
              <p className="text-xs font-black text-violet-500 uppercase tracking-widest mb-4">{a.sub}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
