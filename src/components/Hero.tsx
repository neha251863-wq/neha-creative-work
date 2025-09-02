import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import nehaProfile from '@/assets/neha-profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Neha
                <span className="block text-white/90">Web Developer &</span>
                <span className="block text-white/90">IT Support Specialist</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                Passionate full-stack developer and IT enthusiast from Wellington, New Zealand. 
                Creating responsive, user-friendly applications and providing technical solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 transition-all duration-300 group"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-white/60 text-sm">Connect with me:</span>
              <div className="flex gap-3">
                <a
                  href="mailto:nsharma251863@gmail.com"
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full gradient-card p-1">
                <div className="w-full h-full rounded-full bg-white overflow-hidden">
                  <img
                    src={nehaProfile}
                    alt="Neha - Web Developer & IT Support Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 p-3 rounded-full bg-white shadow-card animate-bounce delay-1000">
                <div className="w-3 h-3 bg-accent-teal rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 rounded-full bg-white shadow-card animate-bounce delay-500">
                <div className="w-4 h-4 bg-accent-coral rounded-full"></div>
              </div>
              <div className="absolute top-8 -left-8 p-2 rounded-full bg-white shadow-card animate-bounce delay-300">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mt-16 animate-slide-up">
          <div className="text-center mb-8">
            <p className="text-white/60 text-sm uppercase tracking-wider">Specializing In</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'React.js',
              'Node.js',
              'MongoDB',
              'IT Support'
            ].map((skill, index) => (
              <div
                key={skill}
                className="p-4 rounded-xl gradient-card text-center hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-primary font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;