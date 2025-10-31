import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLazyLoad } from "@/hooks/use-lazy-load";
import { Mail, MapPin, Phone, Github, Linkedin, Send, Facebook, Instagram, CheckCircle, AlertCircle, PartyPopper } from "lucide-react";
import ContactSkeleton from "@/components/skeletons/ContactSkeleton";
import emailjs from '@emailjs/browser';
import { z } from 'zod';

// Zod validation schema
const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  subject: z.string()
    .trim()
    .min(3, { message: "Subject must be at least 3 characters" })
    .max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [elementRef, isInView] = useLazyLoad({ threshold: 0.1, rootMargin: '50px' });
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [fieldTouched, setFieldTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});

  const validateField = (name: keyof ContactFormData, value: string) => {
    try {
      contactSchema.shape[name].parse(value);
      return '';
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.errors[0]?.message || '';
      }
      return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (fieldTouched[name as keyof ContactFormData]) {
      const error = validateField(name as keyof ContactFormData, value);
      setFieldErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleFieldBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFieldTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof ContactFormData, value);
    setFieldErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields using Zod schema
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setFieldErrors(newErrors);
        setFieldTouched({
          name: true,
          email: true,
          subject: true,
          message: true
        });
        toast({
          title: "Validation Error",
          description: "Please fix the errors in the form before submitting.",
          variant: "destructive"
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Sanitize and encode data before sending
      const sanitizedData = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        to_email: 'biswajit143kishan@gmail.com',
      };

      // EmailJS configuration
      const serviceId = 'service_ihbrnil';
      const templateId = 'template_40ro7di'; 
      const publicKey = 'gNLeEX6vNNOL07jxw';

      emailjs.init(publicKey);

      await emailjs.send(serviceId, templateId, sanitizedData, publicKey);

      // Show success animation
      setIsSubmitSuccess(true);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you within 24 hours!",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFieldErrors({});
      setFieldTouched({});

      // Reset success state after 2 seconds
      setTimeout(() => {
        setIsSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      // Enhanced error handling
      let errorTitle = "Failed to Send Message";
      let errorDescription = "There was an error sending your message. Please try again later.";

      if (error instanceof Error) {
        // Network errors
        if (error.message.includes('network') || error.message.includes('fetch')) {
          errorTitle = "Network Error";
          errorDescription = "Please check your internet connection and try again.";
        }
        // EmailJS configuration errors
        else if (error.message.includes('Invalid') || error.message.includes('not found')) {
          errorTitle = "Configuration Error";
          errorDescription = "There's an issue with the email service. Please contact directly via email.";
        }
        // Rate limit/quota errors
        else if (error.message.includes('quota') || error.message.includes('limit')) {
          errorTitle = "Service Limit Reached";
          errorDescription = "The email service is temporarily unavailable. Please try again later or contact directly.";
        }
        
        // Development-only logging
        if (import.meta.env.DEV) {
          console.error('EmailJS Error:', error);
        }
      }

      toast({
        title: errorTitle,
        description: errorDescription,
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
    <section id="contact" className="py-20 bg-muted/30" ref={elementRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4">
        {!isInView ? (
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get In Touch</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or just having 
                a conversation about technology and innovation. Let's connect!
              </p>
            </div>
            <ContactSkeleton />
          </div>
        ) : (
          <>
            <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having 
            a conversation about technology and innovation. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className={`bg-card-gradient shadow-medium animate-slide-in relative overflow-hidden transition-all duration-300 ${
            isSubmitSuccess ? 'ring-2 ring-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]' : ''
          }`}>
            {/* Success Overlay */}
            {isSubmitSuccess && (
              <div className="absolute inset-0 bg-green-500/10 backdrop-blur-sm z-10 flex items-center justify-center animate-fade-in">
                <div className="text-center space-y-4 animate-scale-in">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <CheckCircle className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <PartyPopper className="w-6 h-6 text-green-600" />
                      <h3 className="text-2xl font-bold text-green-700">Message Sent!</h3>
                      <PartyPopper className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-green-600">I'll get back to you soon!</p>
                  </div>
                </div>
              </div>
            )}
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
                  aria-label="Send message"
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

            <Card className="bg-hero-gradient text-primary-foreground shadow-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Let's Build Something Amazing</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Whether you have a project in mind, need consultation, or just want to 
                  discuss the latest in technology, I'm always excited to connect with 
                  fellow innovators and creators.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        </>
      )}
      </div>
    </section>
  );
};

export default Contact;