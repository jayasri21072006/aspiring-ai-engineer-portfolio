import { Brain, Database, Sparkles, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "AI & NLP",
    skills: ["Generative AI", "NLP", "AI"]
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["ML", "Deep Learning", "Scikit-learn", "ML Pipelines"]
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
        <p className="section-label">
          About Me
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Passionate About <span className="text-gradient">AI Innovation</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed text-lg font-semibold">
            I am an aspiring AI & Machine Learning Engineer with a strong foundation in Python, SQL, 
            and applied machine learning, supported by hands-on internships and production-level projects.
          </p>
          <p className="text-muted-foreground leading-relaxed font-semibold">
            I have proven experience in designing, training, evaluating, and deploying ML models, 
            including end-to-end data pipelines and real-world applications. My technical expertise 
            spans machine learning, deep learning, generative AI, and backend integration using Flask and Streamlit.
          </p>
          <p className="text-muted-foreground leading-relaxed font-semibold">
            Through projects such as a Crypto Liquidity Predictor, I have built complete ML solutions 
            involving data preprocessing, exploratory data analysis, feature engineering, and model deployment. 
            I have developed interactive web applications to serve trained models, implemented Random Forest 
            regression, and documented projects with clear EDA and system design reports.
          </p>
          <p className="text-muted-foreground leading-relaxed font-semibold">
            I bring a strong problem-solving mindset, with the ability to translate data into scalable, 
            data-driven solutions, and I actively sharpen my skills through advanced coursework, competitive 
            platforms, and continuous experimentation with modern AI tools and frameworks.
          </p>
          
          <div className="mt-6">
            <div className="rounded-xl p-5 bg-card/60 border border-primary/20 shadow-md flex items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm text-primary/80 font-semibold mb-1">Snapshot</p>
                <h4 className="text-lg font-semibold text-white mb-2">Open to opportunities in AI & Machine Learning</h4>
                <p className="text-sm text-muted-foreground mb-3">Applied ML, model deployment, and generative AI — experienced with end-to-end projects, collaborations, and building production-ready solutions.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">ML Production</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">NLP</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Deployment</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Python</span>
                </div>
              </div>
              <div className="shrink-0">
                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow-sm hover:glow-primary transition">Contact Me</a>
              </div>
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
