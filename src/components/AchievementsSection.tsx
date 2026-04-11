import { Trophy, Lightbulb, ShoppingCart } from "lucide-react";

const achievements = [
  {
    icon: ShoppingCart,
    title: "Flipkart Grid 7.0",
    subtitle: "Qualified Round 2",
    detail: "Cleared Round 2 of Flipkart Grid 7.0 — one of India's most competitive engineering challenges, testing skills in software engineering, problem solving, and system design.",
    tags: ["Competitive Programming", "Software Engineering", "System Design"]
  },
  {
    icon: Lightbulb,
    title: "LeetCode — 200+ Problems Solved",
    subtitle: "Data Structures & Algorithms · Java",
    detail: "Solved 200+ DSA problems on LeetCode in Java, covering Arrays, Linked Lists, Trees, Graphs, Dynamic Programming, and more.",
    tags: ["Java", "DSA", "Problem Solving"]
  },
  {
    icon: Trophy,
    title: "Smart India Hackathon 2025",
    subtitle: "Selected — College Level (Internal Round)",
    detail: "Sentiment Analysis project selected at the Internal SIH 2025 college round, competing with teams across departments.",
    tags: ["AI/ML", "NLP", "Hackathon"]
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-container">
      <div className="text-center mb-16">
        <p className="section-label">
          Recognition
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          My <span className="text-gradient">Achievements</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <div key={index} className="card-glass p-8 rounded-2xl hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-primary font-semibold text-sm mb-4">{item.subtitle}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.detail}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/5 text-primary border border-primary/10 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
