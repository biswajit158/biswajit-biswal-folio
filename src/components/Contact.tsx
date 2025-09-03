import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Github, Linkedin, Send, Facebook, Instagram, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});
  const [fieldTouched, setFieldTouched] = useState<{[key: string]: boolean}>({});
  const { toast } = useToast();

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email address' : '';
      case 'subject':
        return value.length < 3 ? 'Subject must be at least 3 characters' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    if (fieldTouched[name]) {
      const error = validateField(name, value);
      setFieldErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleFieldBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFieldTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setFieldErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const errors: {[key: string]: string} = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) errors[key] = error;
    });

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setFieldTouched({
        name: true,
        email: true,
        subject: true,
        message: true
      });
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://f637d2fe-ff54-4a0b-8a12-a74baf355bef.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you within 24 hours!",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFieldErrors({});
      setFieldTouched({});
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "biswajit143kishan@gmail.com",
      href: "mailto:biswajit143kishan@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gunupur, Odisha, India",
      href: "https://maps.google.com/?q=put the redirect link"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:put the redirect link"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      href: "put the redirect link",
      color: "hover:text-gray-700"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "put the redirect link",
      color: "hover:text-blue-600"
    },
    {
      icon: Facebook,
      title: "Facebook",
      href: "put the redirect link",
      color: "hover:text-blue-500"
    },
    {
      icon: Instagram,
      title: "Instagram",
      href: "put the redirect link",
      color: "hover:text-pink-500"
    },
    {
      icon: Mail,
      title: "Email",
      href: "mailto:biswajit143kishan@gmail.com",
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
                    <Label htmlFor="name" className="flex items-center gap-2">
                      Full Name
                      {fieldTouched.name && !fieldErrors.name && (
                        <CheckCircle size={14} className="text-green-600" />
                      )}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleFieldBlur}
                      required
                      className={`transition-all duration-200 focus:ring-2 focus:ring-primary ${
                        fieldErrors.name ? 'border-red-500' : fieldTouched.name && !fieldErrors.name ? 'border-green-500' : ''
                      }`}
                    />
                    {fieldErrors.name && (
                      <div className="flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle size={14} />
                        {fieldErrors.name}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      Email Address
                      {fieldTouched.email && !fieldErrors.email && (
                        <CheckCircle size={14} className="text-green-600" />
                      )}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleFieldBlur}
                      required
                      className={`transition-all duration-200 focus:ring-2 focus:ring-primary ${
                        fieldErrors.email ? 'border-red-500' : fieldTouched.email && !fieldErrors.email ? 'border-green-500' : ''
                      }`}
                    />
                    {fieldErrors.email && (
                      <div className="flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle size={14} />
                        {fieldErrors.email}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="flex items-center gap-2">
                    Subject
                    {fieldTouched.subject && !fieldErrors.subject && (
                      <CheckCircle size={14} className="text-green-600" />
                    )}
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onBlur={handleFieldBlur}
                    required
                    className={`transition-all duration-200 focus:ring-2 focus:ring-primary ${
                      fieldErrors.subject ? 'border-red-500' : fieldTouched.subject && !fieldErrors.subject ? 'border-green-500' : ''
                    }`}
                  />
                  {fieldErrors.subject && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle size={14} />
                      {fieldErrors.subject}
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    Message
                    {fieldTouched.message && !fieldErrors.message && (
                      <CheckCircle size={14} className="text-green-600" />
                    )}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me more about your project or inquiry..."
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleFieldBlur}
                    required
                    rows={6}
                    className={`transition-all duration-200 focus:ring-2 focus:ring-primary resize-none ${
                      fieldErrors.message ? 'border-red-500' : fieldTouched.message && !fieldErrors.message ? 'border-green-500' : ''
                    }`}
                  />
                  {fieldErrors.message && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle size={14} />
                      {fieldErrors.message}
                    </div>
                  )}
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