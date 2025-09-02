import { Code, Server, Wrench, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Designing and developing responsive, modern websites with cutting-edge front-end and back-end solutions.',
      icon: <Code className="h-8 w-8" />,
      features: [
        'Responsive web design',
        'React.js applications',
        'Progressive Web Apps (PWA)',
        'E-commerce solutions',
        'Content Management Systems',
        'API integration'
      ],
      pricing: 'Starting from $500',
      popular: true
    },
    {
      title: 'IT Support',
      description: 'Comprehensive hardware and software troubleshooting, network monitoring, and help desk assistance.',
      icon: <Wrench className="h-8 w-8" />,
      features: [
        'Hardware troubleshooting',
        'Software installation & setup',
        'Network configuration',
        'System optimization',
        'Remote technical support',
        'Security assessments'
      ],
      pricing: 'Starting from $50/hour',
      popular: false
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete end-to-end application development with modern technologies and best practices.',
      icon: <Server className="h-8 w-8" />,
      features: [
        'Database design & optimization',
        'RESTful API development',
        'User authentication systems',
        'Cloud deployment',
        'Performance optimization',
        'Maintenance & updates'
      ],
      pricing: 'Starting from $1000',
      popular: false
    },
    {
      title: 'Technical Training & Consulting',
      description: 'Professional training on Microsoft Office 365, Google Workspace, and modern collaboration tools.',
      icon: <GraduationCap className="h-8 w-8" />,
      features: [
        'Microsoft Office 365 training',
        'Google Workspace setup',
        'Team collaboration tools',
        'Workflow optimization',
        'Documentation & processes',
        'One-on-one mentoring'
      ],
      pricing: 'Starting from $75/hour',
      popular: false
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your requirements, goals, and timeline to understand your project needs.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'I create a detailed project plan with milestones, deliverables, and technical specifications.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Implementation phase with regular updates and feedback sessions to ensure quality.'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Final testing, deployment, and handover with documentation and training if needed.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="gradient-hero py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Professional web development and IT support services tailored to meet your 
                business needs and technical requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className={`relative overflow-hidden hover-lift ${
                    service.popular ? 'ring-2 ring-primary shadow-glow' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl gradient-primary text-white">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm">
                            <CheckCircle className="h-4 w-4 text-accent-teal flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-sm text-muted-foreground">Starting from</span>
                        <p className="text-lg font-bold text-primary">{service.pricing}</p>
                      </div>
                      <Button 
                        className={
                          service.popular 
                            ? 'gradient-primary text-white border-0' 
                            : 'hover:gradient-primary hover:text-white hover:border-0'
                        }
                        asChild
                      >
                        <a href="/contact">
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">My Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to ensure your project is delivered on time, 
                within budget, and exceeds your expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
              {processSteps.map((step, index) => (
                <div 
                  key={step.step} 
                  className="text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full gradient-primary text-white font-bold text-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 -translate-x-8"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Why Choose Me?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Combining technical expertise with a commitment to excellence and customer satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
              {[
                {
                  title: 'Quality Focused',
                  description: 'Every project is built with attention to detail, following best practices and modern standards.',
                  icon: <CheckCircle className="h-6 w-6" />
                },
                {
                  title: 'Timely Delivery',
                  description: 'Committed to meeting deadlines while maintaining high quality standards.',
                  icon: <ArrowRight className="h-6 w-6" />
                },
                {
                  title: 'Ongoing Support',
                  description: 'Continued support and maintenance to ensure your solutions remain effective.',
                  icon: <Wrench className="h-6 w-6" />
                }
              ].map((benefit, index) => (
                <Card key={benefit.title} className="text-center hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="p-3 rounded-xl gradient-primary text-white w-fit mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center animate-fade-in">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss your requirements and create a solution that perfectly fits your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                  <a href="/contact">
                    Get Free Consultation
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <a href="/portfolio">
                    View My Work
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;