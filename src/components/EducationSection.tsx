import { GraduationCap, Award } from "lucide-react";

const courses = [
  "Google Data Analytics - Coursera",
  "Supervised Learning: Regression & Classification - Stanford (Coursera)",
  "Generative AI - IBM (Coursera) & LinkedIn Learning",
  "MongoDB - MongoDB University",
  "Python - GUVI",
  "SQL (Basic & Intermediate) - HackerRank",
  "Advanced SQL & Python - CodeChef AI for India (GUVI)"
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
          
          <ul className="space-y-3">
            {courses.map((course, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm">{course}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
