import { GraduationCap, Award, ExternalLink, ChevronRight } from "lucide-react";

const courses = [
  {
    name: "Google Data Analytics",
    platform: "Coursera",
    links: [{ label: "View Certificate", url: "https://github.com/jayasri21072006/pro/blob/main/Google%20Data%20analytics%20professional%20certificate.pdf" }]
  },
  {
    name: "Machine Learning",
    platform: "Coursera & AWS",
    links: [{ label: "View Certificate", url: "https://github.com/jayasri21072006/pro/blob/main/ML%20certification%20-Coursera%2CAWS.pdf" }]
  },
  {
    name: "MongoDB",
    platform: "MongoDB University",
    links: [{ label: "View Certificate", url: "https://github.com/jayasri21072006/pro/blob/main/MongoDB.pdf" }]
  },
  {
    name: "Data Science & Generative AI",
    platform: "PW Skills & IBM",
    links: [
      { label: "Data Science", url: "https://github.com/jayasri21072006/pro/blob/main/pw%20skills%20DS%20with%20GenAI.pdf" },
      { label: "Generative AI", url: "https://github.com/jayasri21072006/pro/blob/main/Gen%20AI%20certfication.pdf" }
    ]
  },
  {
    name: "SQL Certification",
    platform: "HackerRank & CodeChef",
    links: [{ label: "View Certificate", url: "https://github.com/jayasri21072006/pro/blob/main/SQL%20certification.pdf" }]
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
              <li key={index} className="p-3 -mx-3 rounded-lg hover:bg-primary/5 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {course.name}
                    </p>
                    <p className="text-xs text-muted-foreground mb-2">{course.platform}</p>
                    <div className="flex flex-wrap gap-2">
                      {course.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 hover:underline transition-all duration-300"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
