import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16">
        <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">
          Get In Touch
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="card-glass rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="font-display text-xl font-semibold mb-4">Contact Information</h3>
              
              <a 
                href="mailto:jayasri21072006@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-primary transition-all duration-300">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">jayasri21072006@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+919342531156"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-primary transition-all duration-300">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground">+91 93425 31156</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Chengalpet, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-display text-xl font-semibold mb-4">Social Links</h3>
              
              <div className="flex flex-col gap-4">
                <Button 
                  variant="outline" 
                  className="justify-start h-14 px-6"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/jayasri-t-sri" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-3 h-5 w-5 text-primary" />
                    LinkedIn Profile
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="justify-start h-14 px-6"
                  asChild
                >
                  <a 
                    href="https://github.com/jayasri21072006" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-3 h-5 w-5 text-primary" />
                    GitHub Profile
                  </a>
                </Button>
                
                <Button 
                  className="justify-start h-14 px-6 glow-primary"
                  asChild
                >
                  <a href="mailto:jayasri21072006@gmail.com">
                    <Send className="mr-3 h-5 w-5" />
                    Send an Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
