import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'nsharma251863@gmail.com',
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:nsharma251863@gmail.com'
    },
    {
      title: 'Phone',
      value: '+64 226 389 626',
      icon: <Phone className="h-5 w-5" />,
      href: 'tel:+64226389626'
    },
    {
      title: 'Location',
      value: 'Wellington, New Zealand',
      icon: <MapPin className="h-5 w-5" />,
      href: '#'
    }
  ];

  const faqs = [
    {
      question: 'What is your typical response time?',
      answer: 'I aim to respond to all inquiries within 24 hours during business days.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, I work with clients globally. I\'m flexible with time zones and communication preferences.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'I typically work with 50% upfront and 50% upon completion for smaller projects. Larger projects can be broken into milestones.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, I offer maintenance and support packages to ensure your solutions continue to work effectively.'
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
                Get In Touch
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Ready to start your next project? I'd love to hear about your ideas and 
                discuss how we can work together to bring them to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slide-up">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Send Me a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            required
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What would you like to discuss?"
                          required
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project or requirements..."
                          rows={6}
                          required
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full gradient-primary text-white border-0 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground">
                    Prefer direct contact? Reach out through any of these channels.
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <Card key={info.title} className="hover-lift">
                      <CardContent className="p-6">
                        <a
                          href={info.href}
                          className={`flex items-center gap-4 group ${
                            info.href !== '#' ? 'hover:text-primary' : ''
                          }`}
                        >
                          <div className="p-3 rounded-xl gradient-primary text-white group-hover:scale-110 transition-transform">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-muted-foreground">{info.value}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Response Time */}
                <Card className="gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl gradient-primary text-white">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Quick Response</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          I typically respond within 24 hours. For urgent inquiries, 
                          please call directly or mention "URGENT" in your subject line.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Common questions about my services and working process.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 animate-slide-up">
              {faqs.map((faq, index) => (
                <Card key={faq.question} className="hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg gradient-primary text-white flex-shrink-0">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="gradient-hero border-0 text-center">
              <CardContent className="p-12">
                <div className="animate-fade-in">
                  <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Ready to Get Started?
                  </h2>
                  <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                    Let's discuss your project requirements and create something amazing together. 
                    I'm excited to hear about your ideas!
                  </p>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                    <a href="mailto:nsharma251863@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me Directly
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;