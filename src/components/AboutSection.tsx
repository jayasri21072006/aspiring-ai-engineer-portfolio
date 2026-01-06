import { Brain, Database, Sparkles, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["ML", "Deep Learning", "Scikit-learn", "ML Pipelines"]
  },
  {
    icon: Sparkles,
    title: "AI & NLP",
    skills: ["Generative AI", "NLP", "AI"]
  },
  {
    icon: BarChart3,
    title: "Data Science",
    skills: ["Statistics", "Data Analysis"]
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["SQL", "MongoDB", "Vector DB"]
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="text-center mb-16">
        <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">
          About Me
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Passionate About <span className="text-gradient">AI Innovation</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm an aspiring AI & ML Engineer with a strong foundation in Python, SQL, and applied 
            machine learning, backed by hands-on internships and production-level projects.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I have proven ability to design, train, and deploy ML models, including end-to-end 
            data pipelines and real-world applications. Experienced in deep learning, generative AI, 
            and backend integration with Flask APIs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With a problem-solving mindset, I consistently deliver scalable, data-driven solutions 
            and actively sharpen my skills through advanced coursework, competitive platforms, 
            and continuous experimentation.
          </p>
          
          <div className="pt-4">
            <div className="flex items-center gap-4 text-sm">
              <span className="text-muted-foreground">📍 Chengalpet, Tamil Nadu</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-primary font-medium">CGPA: 9.40/10</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="card-glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>
              <div className="flex flex-wrap gap-1">
                {item.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="text-xs text-muted-foreground bg-primary/5 px-2 py-0.5 rounded">
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

export default AboutSection;
