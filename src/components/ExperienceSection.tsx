import { ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Node.js Intern",
    company: "Askan Technologies",
    period: "Dec 2025",
    description: "Built RESTful APIs, implemented authentication, integrated third-party services, and wrote unit tests to improve backend reliability.",
    certificateUrl: "https://github.com/jayasri21072006/pro/blob/main/Askan%20Node.js%20intern.pdf"
  },
  {
    role: "ML Intern",
    company: "Saiket Systems",
    period: "Jun 2025 - Jul 2025",
    description: "Developed ML pipelines: data cleaning, feature engineering, model training and evaluation; collaborated on model deployment and monitoring.",
    certificateUrl: "https://github.com/jayasri21072006/pro/blob/main/saiket%20Ml%20intern.pdf"
  },
  {
    role: "Python Intern",
    company: "Cognifyz Technologies",
    period: "Feb 2025 - Mar 2025",
    description: "Automated ETL workflows, created reusable Python modules, and implemented tests and CI steps to ensure code quality.",
    certificateUrl: "https://github.com/jayasri21072006/pro/blob/main/cognifyz%20python%20Intern.pdf"
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-16">
        <p className="section-label">
          Career Journey
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Work <span className="text-gradient">Experience</span>
        </h2>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-16 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-4 top-1 timeline-dot" />
              
              <a 
                href={exp.certificateUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 block group cursor-pointer"
              >
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold flex items-center gap-2">
                      {exp.role}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    </h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
