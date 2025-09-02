import { Briefcase, GraduationCap, MapPin, Star, Code, Server, Database, Wrench } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Body Corporate Administration (BCA)',
      location: 'Auckland, NZ',
      period: 'Jan – Jun 2024',
      description: 'Developed responsive websites using React.js, Node.js, and MongoDB. Collaborated with senior developers on full-stack applications.',
      icon: <Code className="h-5 w-5" />
    },
    {
      title: 'Security Officer/Reception Support',
      company: 'Allied Security',
      location: 'Wellington, NZ',
      period: 'Feb 2024 – Present',
      description: 'Providing security services and reception support while continuing professional development in web technologies.',
      icon: <Star className="h-5 w-5" />
    },
    {
      title: 'Assistant Manager – IT Support',
      company: 'Rayat Enterprises',
      location: 'India',
      period: 'Sep 2019 – Feb 2023',
      description: 'Led IT support operations, managed hardware/software troubleshooting, and supervised technical teams.',
      icon: <Wrench className="h-5 w-5" />
    },
    {
      title: 'Sales Manager',
      company: 'ICICI Securities',
      location: 'India',
      period: 'Jun 2018 – Aug 2019',
      description: 'Managed client relationships and sales operations in the financial services sector.',
      icon: <Briefcase className="h-5 w-5" />
    }
  ];

  const education = [
    {
      degree: 'Master of Information Technology (Level 9)',
      institution: 'Whitireia & WelTec Polytechnic',
      location: 'New Zealand',
      year: '2024',
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      degree: 'Postgraduate Diploma in Computer Applications',
      institution: 'Panjab University',
      location: 'India',
      year: '2017',
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      degree: 'Bachelor of Arts',
      institution: 'Panjab University',
      location: 'India',
      year: '2016',
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];

  const skills = [
    {
      category: 'Frontend Development',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
      icon: <Code className="h-6 w-6" />
    },
    {
      category: 'Backend Development',
      technologies: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication'],
      icon: <Server className="h-6 w-6" />
    },
    {
      category: 'Database Management',
      technologies: ['MongoDB', 'MySQL', 'Database Design', 'Data Modeling'],
      icon: <Database className="h-6 w-6" />
    },
    {
      category: 'IT Support & Tools',
      technologies: ['Hardware Troubleshooting', 'Microsoft Office 365', 'Google Workspace', 'Network Monitoring'],
      icon: <Wrench className="h-6 w-6" />
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
                About Me
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                A passionate web developer and IT enthusiast dedicated to creating innovative solutions 
                and solving complex technical challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto animate-slide-up">
              <Card className="gradient-card border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Based in Wellington, New Zealand, I recently completed my Master of Information Technology 
                        from Whitireia and WelTec Polytechnic. During my studies, I gained invaluable hands-on 
                        experience as a Web Developer Intern at Body Corporate Administration (BCA) in Auckland.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        I specialize in both front-end and back-end development, creating responsive, user-friendly 
                        web applications. My passion lies in exploring new technologies, solving complex problems, 
                        and bringing creative ideas to life through clean, efficient code.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        With a strong background in IT support and management, I bring a unique perspective to 
                        web development, understanding both the technical and operational aspects of technology solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive skill set spanning full-stack development and IT operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
              {skills.map((skill, index) => (
                <Card key={skill.category} className="hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg gradient-primary text-white">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-3">{skill.category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {skill.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A diverse background in technology and business operations
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 animate-slide-up">
              {experiences.map((exp, index) => (
                <Card key={exp.title} className="hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg gradient-primary text-white flex-shrink-0">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <h3 className="text-lg font-semibold">{exp.title}</h3>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        <p className="text-primary font-medium mb-1">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                        <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Academic foundation in technology and computer applications
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 animate-slide-up">
              {education.map((edu, index) => (
                <Card key={edu.degree} className="hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg gradient-primary text-white flex-shrink-0">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <h3 className="text-lg font-semibold">{edu.degree}</h3>
                          <span className="text-sm text-muted-foreground">{edu.year}</span>
                        </div>
                        <p className="text-primary font-medium mb-1">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;