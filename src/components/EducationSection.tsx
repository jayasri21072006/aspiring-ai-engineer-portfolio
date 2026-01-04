import { GraduationCap, Award, ExternalLink, ChevronRight } from "lucide-react";

const courses = [
  {
    name: "Google Data Analytics",
    platform: "Coursera",
    link: "#"
  },
  {
    name: "Supervised Learning: Regression & Classification",
    platform: "Stanford (Coursera)",
    link: "#"
  },
  {
    name: "Generative AI",
    platform: "IBM (Coursera) & LinkedIn Learning",
    link: "#"
  },
  {
    name: "MongoDB",
    platform: "MongoDB University",
    link: "#"
  },
  {
    name: "Python",
    platform: "GUVI",
    link: "#"
  },
  {
    name: "SQL (Basic & Intermediate)",
    platform: "HackerRank",
    link: "#"
  },
  {
    name: "Advanced SQL & Python",
    platform: "CodeChef AI for India (GUVI)",
    link: "#"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="section-container">
      <div className="text-center mb-16">
        <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">
          Learning Journey
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Education & <span className="text-gradient">Certifications</span>
        </h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Education */}
        <div className="card-glass rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold">Education</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">B.Tech - Artificial Intelligence & Data Science</h4>
              <p className="text-primary">Anand Institute of Higher Technology, Chennai</p>
              <p className="text-muted-foreground text-sm mt-1">Aug 2023 - Pursuing</p>
              <div className="mt-3 inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-bold">CGPA: 9.40/10</span>
                <span className="text-muted-foreground text-sm">(up to 4th semester)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="card-glass rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Award className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-display text-xl font-bold">Certifications</h3>
          </div>
          
          <ul className="space-y-2">
            {courses.map((course, index) => (
              <li key={index}>
                <a 
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 p-3 -mx-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                        {course.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{course.platform}</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 flex-shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
