import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "ML Intern",
    company: "Saiket Systems",
    period: "Jun 2025 - Jul 2025",
    description: "Worked on machine learning projects and model development"
  },
  {
    role: "Python Intern",
    company: "Cognifyz Technologies",
    period: "Feb 2025 - Mar 2025",
    description: "Developed Python-based solutions and automation scripts"
  },
  {
    role: "Node.js Intern",
    company: "Askan Technologies",
    period: "Dec 2025",
    description: "Built backend services and API integrations"
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-16">
        <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">
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
              
              <div className="card-glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
