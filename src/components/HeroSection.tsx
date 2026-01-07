import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs - reduced opacity to blend with particle background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="section-container relative z-10 text-center">
        <div className="animate-slide-up">
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">
            Welcome to my portfolio
          </p>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-heading">
            <span className="whitespace-nowrap">Hi, I'm <span className="text-gradient">Jayasri T</span></span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground mb-4 font-display font-semibold">
            AI & ML Engineer
          </p>
          
          <p className="max-w-2xl mx-auto text-foreground mb-8 leading-relaxed font-medium">
            Building intelligent solutions with strong foundations in Python, machine learning, 
            and data science. Passionate about designing, training, and deploying ML models 
            that solve real-world problems.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <Button 
              variant="default" 
              size="lg"
              className="glow-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/jayasri-t-sri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/jayasri21072006" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="mailto:jayasri21072006@gmail.com"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
