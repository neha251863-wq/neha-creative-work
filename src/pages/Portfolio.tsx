import { ExternalLink, Github, Code, Database, Globe, Wrench } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Web Development Internship Project',
      description: 'Comprehensive web application built during my internship at BCA. Features responsive design, interactive UI, and full-stack functionality with modern technologies.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS3'],
      category: 'Full-Stack Development',
      icon: <Globe className="h-6 w-6" />,
      image: '/api/placeholder/600/300',
      demoUrl: '#',
      githubUrl: '#',
      highlights: [
        'Responsive design across all devices',
        'RESTful API integration',
        'User authentication system',
        'Database optimization'
      ]
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, interactive portfolio showcasing my skills and projects. Built with performance optimization and beautiful animations to create an engaging user experience.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Frontend Development',
      icon: <Code className="h-6 w-6" />,
      image: '/api/placeholder/600/300',
      demoUrl: '#',
      githubUrl: '#',
      highlights: [
        'Interactive animations',
        'Optimized performance',
        'SEO friendly',
        'Mobile-first design'
      ]
    },
    {
      title: 'E-commerce Website',
      description: 'Academic project featuring a complete e-commerce solution with product listings, shopping cart functionality, and secure user authentication.',
      technologies: ['React.js', 'MongoDB', 'Express.js', 'JWT Auth'],
      category: 'Full-Stack Development',
      icon: <Database className="h-6 w-6" />,
      image: '/api/placeholder/600/300',
      demoUrl: '#',
      githubUrl: '#',
      highlights: [
        'Product catalog management',
        'Shopping cart functionality',
        'Secure payment integration',
        'User account management'
      ]
    },
    {
      title: 'Help Desk Automation Tool',
      description: 'IT support ticket management system designed to streamline technical support operations with automated routing and priority handling.',
      technologies: ['Node.js', 'MySQL', 'Express.js', 'Bootstrap'],
      category: 'IT Solutions',
      icon: <Wrench className="h-6 w-6" />,
      image: '/api/placeholder/600/300',
      demoUrl: '#',
      githubUrl: '#',
      highlights: [
        'Automated ticket routing',
        'Priority-based queuing',
        'Real-time notifications',
        'Analytics dashboard'
      ]
    }
  ];

  const categories = ['All', 'Full-Stack Development', 'Frontend Development', 'IT Solutions'];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="gradient-hero py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My Portfolio
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                A showcase of projects demonstrating my expertise in web development, 
                full-stack solutions, and IT support systems.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  className={
                    category === 'All'
                      ? 'gradient-primary text-white border-0'
                      : 'hover:gradient-primary hover:text-white hover:border-0'
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-2 gap-8 animate-slide-up">
              {projects.map((project, index) => (
                <Card 
                  key={project.title} 
                  className="overflow-hidden hover-lift group" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-4 rounded-full gradient-primary text-white">
                        {project.icon}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-primary text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        variant="default"
                        size="sm"
                        className="gradient-primary text-white border-0 flex-1"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:gradient-primary hover:text-white hover:border-0"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">
                Interested in Working Together?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's discuss how I can help bring your ideas to life.
              </p>
              <Button size="lg" className="gradient-primary text-white border-0" asChild>
                <a href="/contact">
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;