import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Target, Code, Brain, Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by passion for technology and innovation, I'm building my expertise 
            in software engineering while exploring the frontiers of AI and web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-card-gradient shadow-subtle hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">6th Semester B.Tech CSE at GIET University, Gunupur</p>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient shadow-subtle hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Goal</h3>
              <p className="text-muted-foreground">Aspiring Software Engineer focused on innovation</p>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient shadow-subtle hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Focus</h3>
              <p className="text-muted-foreground">Full-stack development & Android applications</p>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient shadow-subtle hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-muted-foreground">AI-powered applications & emerging tech</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card-gradient shadow-medium animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">My Journey</h3>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I'm currently in my 6th semester pursuing B.Tech in Computer Science & Engineering 
                  at GIET University, Gunupur. My academic journey has been complemented by hands-on 
                  experience in various technologies and programming languages.
                </p>
                <p>
                  My interests span across building full-stack web platforms, developing AI-powered 
                  applications, creating real-time chat systems, and building Android utility apps. 
                  I'm particularly fascinated by the intersection of AI and practical applications 
                  that can solve real-world problems.
                </p>
                <p>
                  Beyond coding, I'm exploring cutting-edge areas like ethical hacking, compiler design, 
                  and microprocessor architecture. My research work in personalized dietary recommendations 
                  using deep learning showcases my commitment to applying AI for meaningful impact.
                </p>
                <p>
                  I believe in continuous learning and staying updated with the latest technological 
                  trends. My goal is to become a versatile software engineer who can contribute to 
                  innovative projects that make a difference in people's lives.
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Biswajit_Biswal_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 px-8 py-3 text-lg font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  Get my complete professional profile
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;