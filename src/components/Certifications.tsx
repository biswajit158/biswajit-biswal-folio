import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import { Award, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";

const Certifications = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation({ triggerOnce: true });
  const [certsRef, visibleCerts] = useStaggeredAnimation(4, 200);
  const [socialProofRef, isSocialProofVisible] = useScrollAnimation({ triggerOnce: true });
  
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "2023",
      skills: ["React", "Node.js", "MongoDB", "JavaScript"],
      description: "Comprehensive certification covering modern web development technologies and best practices.",
      link: "#",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Oracle Certified Associate Java SE",
      issuer: "Oracle",
      date: "2023",
      skills: ["Java", "OOP", "Collections", "Exception Handling"],
      description: "Official Java certification demonstrating proficiency in core Java programming concepts.",
      link: "#",
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera - Stanford",
      date: "2024",
      skills: ["Python", "TensorFlow", "Neural Networks", "Deep Learning"],
      description: "Advanced certification in machine learning algorithms and artificial intelligence applications.",
      link: "#",
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Android Developer Certification",
      issuer: "Google",
      date: "2023",
      skills: ["Kotlin", "Android SDK", "Material Design", "Firebase"],
      description: "Official Google certification for Android application development and mobile technologies.",
      link: "#",
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  const socialProofItems = [
    { name: "GIET University", logo: "🎓", type: "University", verified: true },
    { name: "Oracle Certified", logo: "☕", type: "Certification", verified: true },
    { name: "FreeCodeCamp", logo: "🏆", type: "Bootcamp", verified: true },
    { name: "Google Developer", logo: "📱", type: "Program", verified: true }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isTitleVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Validated expertise through industry-recognized certifications in key technologies
          </p>
        </div>

        {/* Social Proof Badges */}
        <div 
          ref={socialProofRef}
          className={`mb-16 transition-all duration-700 delay-300 ${
            isSocialProofVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialProofItems.map((item, index) => (
              <div 
                key={item.name}
                className={`flex items-center gap-2 bg-background/60 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105 ${
                  isSocialProofVisible ? 'animate-scale-in' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-2xl">{item.logo}</span>
                <span className="font-medium text-foreground">{item.name}</span>
                {item.verified && (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div ref={certsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const isVisible = visibleCerts.includes(index);
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-glow transition-all duration-700 hover:scale-105 bg-card ${
                  isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-lg ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <a 
                      href={cert.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {cert.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-primary">{cert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary" 
                        className="text-xs font-medium bg-secondary/50 hover:bg-secondary/80 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;