const skills = [
  "Python",
  "SQL",
  "Java",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "Scikit-learn",
  "CNN",
  "Data Analysis",
  "Flask API",
  "MongoDB",
  "Vector DB",
  "Git",
  "Problem Solving"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <p className="section-label">
          My Expertise
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="skill-tag hover:bg-primary/10 hover:glow-primary cursor-default"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
