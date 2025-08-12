import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
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

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Validated expertise through industry-recognized certifications in key technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 hover:scale-105 border-muted bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${cert.color}`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
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

                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border/50">
                  <Calendar className="w-4 h-4" />
                  <span>Certified in {cert.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Continuously expanding my expertise through professional development and industry certifications
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;