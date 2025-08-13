import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Github, Linkedin, Send, Facebook, Instagram } from "lucide-react";

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
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "biswajit.biswal@example.com",
      href: "mailto:biswajit.biswal@example.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gunupur, Odisha, India",
      href: "#"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXX"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      href: "https://github.com/biswajit-biswal",
      color: "hover:text-gray-700"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://linkedin.com/in/biswajit-biswal",
      color: "hover:text-blue-600"
    },
    {
      icon: Facebook,
      title: "Facebook",
      href: "https://facebook.com/biswajit.biswal",
      color: "hover:text-blue-500"
    },
    {
      icon: Instagram,
      title: "Instagram",
      href: "https://instagram.com/biswajit.biswal",
      color: "hover:text-pink-500"
    },
    {
      icon: Mail,
      title: "Email",
      href: "mailto:biswajit.biswal@example.com",
      color: "hover:text-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having 
            a conversation about technology and innovation. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card-gradient shadow-medium animate-slide-in">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me more about your project or inquiry..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full hover:scale-[1.02] transition-all duration-200"
                  size="lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send size={18} />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-card-gradient shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.title} className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <a 
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="bg-card-gradient shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Connect on Social</CardTitle>
                <p className="text-muted-foreground">
                  Follow my journey and latest projects on social media.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.title}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${link.color}`}
                        aria-label={link.title}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-hero-gradient text-white shadow-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Let's Build Something Amazing</h3>
                <p className="text-white/90 leading-relaxed">
                  Whether you have a project in mind, need consultation, or just want to 
                  discuss the latest in technology, I'm always excited to connect with 
                  fellow innovators and creators.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;