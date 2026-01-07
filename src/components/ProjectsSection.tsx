import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Crypto Liquidity Predictor 🚀",
    description: "A Machine Learning web app that predicts cryptocurrency liquidity from recent market data. Includes full data preprocessing, EDA, feature engineering, RandomForest regression, model evaluation, and an interactive Streamlit interface for exploration and live predictions.",
    techStack: ["Python 3.11+", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit", "Joblib"],
    features: ["Data preprocessing & feature engineering", "Exploratory Data Analysis (EDA)", "RandomForest regression", "Interactive Streamlit UI", "Model serialization (Joblib)", "Reports: EDA, HLD, LLD, Final Summary"],
    tags: ["Machine Learning", "Python", "Streamlit", "Data Analysis"],
    github: "https://github.com/jayasri21072006/crypto-liquidity-predictor",
    demo: "https://crypto-liquidity-predictor-jorq5yxc3mrkqfeovdcvuq.streamlit.app/"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <p className="section-label">
          Featured Work
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real-world applications showcasing my ML and data science expertise
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="card-glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack (compact) */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack?.slice(0, 6).map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/5 text-primary border border-primary/10">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="text-sm text-primary mb-4 list-disc list-inside space-y-1 font-semibold max-w-md">
                  {project.features?.map((f, fi) => (
                    <li key={fi}>{f}</li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="glow-primary"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
