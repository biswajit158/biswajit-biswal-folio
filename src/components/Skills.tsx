import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 70 },
        { name: "React", level: 60 },
        { name: "Tailwind CSS", level: 80 }
      ],
      color: "bg-blue-500/10 text-blue-700"
    },
    {
      title: "Programming",
      icon: Code2,
      skills: [
        { name: "Java", level: 90 },
        { name: "OOP", level: 85 },
        { name: "Data Structures", level: 80 },
        { name: "Algorithms", level: 75 }
      ],
      color: "bg-green-500/10 text-green-700"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "Android Dev", level: 75 },
        { name: "Kotlin", level: 70 },
        { name: "XML Layouts", level: 80 },
        { name: "Mobile UI/UX", level: 65 }
      ],
      color: "bg-purple-500/10 text-purple-700"
    },
    {
      title: "Security & Ethical Hacking",
      icon: Shield,
      skills: [
        { name: "Ethical Hacking", level: 60 },
        { name: "Network Security", level: 65 },
        { name: "Penetration Testing", level: 55 },
        { name: "Security Tools", level: 70 }
      ],
      color: "bg-red-500/10 text-red-700"
    },
    {
      title: "Compiler Design",
      icon: Coffee,
      skills: [
        { name: "Lexical Analysis", level: 85 },
        { name: "Syntax Analysis", level: 80 },
        { name: "Semantic Analysis", level: 75 },
        { name: "Code Generation", level: 70 }
      ],
      color: "bg-orange-500/10 text-orange-700"
    },
    {
      title: "Microprocessors",
      icon: Cpu,
      skills: [
        { name: "8085/8086", level: 90 },
        { name: "8051", level: 85 },
        { name: "8255/8257", level: 80 },
        { name: "8259", level: 75 }
      ],
      color: "bg-indigo-500/10 text-indigo-700"
    },
    {
      title: "Digital Signal Processing",
      icon: Signal,
      skills: [
        { name: "Signal Analysis", level: 75 },
        { name: "Digital Filters", level: 70 },
        { name: "DSP Algorithms", level: 65 },
        { name: "Signal Processing", level: 80 }
      ],
      color: "bg-teal-500/10 text-teal-700"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "ML Concepts", level: 60 },
        { name: "Deep Learning", level: 50 },
        { name: "Neural Networks", level: 55 },
        { name: "AI Applications", level: 65 }
      ],
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
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 animate-fade-in"
                          style={{ 
                            animationDelay: `${index * 0.1 + skillIndex * 0.05}s`,
                            animationDuration: '1.5s'
                          }}
                        />
                      </div>
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