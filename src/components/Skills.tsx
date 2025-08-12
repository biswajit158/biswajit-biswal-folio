import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Smartphone, 
  Shield, 
  Brain, 
  Cpu, 
  Signal,
  Code2,
  Coffee
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React (Basics)"],
      color: "bg-blue-500/10 text-blue-700"
    },
    {
      title: "Programming",
      icon: Code2,
      skills: ["Java Programming", "Object-Oriented Programming", "Data Structures", "Algorithms"],
      color: "bg-green-500/10 text-green-700"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Android Development", "Kotlin", "XML Layouts", "Mobile UI/UX"],
      color: "bg-purple-500/10 text-purple-700"
    },
    {
      title: "Security & Ethical Hacking",
      icon: Shield,
      skills: ["Ethical Hacking Basics", "Network Security", "Penetration Testing", "Security Tools"],
      color: "bg-red-500/10 text-red-700"
    },
    {
      title: "Compiler Design",
      icon: Coffee,
      skills: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Code Generation"],
      color: "bg-orange-500/10 text-orange-700"
    },
    {
      title: "Microprocessors",
      icon: Cpu,
      skills: ["8085", "8086", "8051", "8255", "8257", "8259"],
      color: "bg-indigo-500/10 text-indigo-700"
    },
    {
      title: "Digital Signal Processing",
      icon: Signal,
      skills: ["Signal Analysis", "Digital Filters", "DSP Algorithms", "Signal Processing"],
      color: "bg-teal-500/10 text-teal-700"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["ML Concepts", "Deep Learning", "Neural Networks", "AI Applications"],
      color: "bg-pink-500/10 text-pink-700"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set covering web development, mobile apps, AI, and core computer science fundamentals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="bg-skill-gradient shadow-subtle hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-200`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold ml-3 text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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

        <div className="mt-16 text-center">
          <Card className="bg-card-gradient shadow-medium max-w-2xl mx-auto animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Learning Philosophy</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I believe in continuous learning and staying adaptable to new technologies. 
                My diverse skill set reflects my curiosity to explore different domains 
                of computer science, from low-level hardware programming to high-level 
                AI applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;