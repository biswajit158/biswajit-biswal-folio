import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, FileText, BookOpen, MessageCircle, Utensils } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PDF-to-eBook Android App",
      description: "A comprehensive Android application that converts PDF files to eBook format with advanced features including bookmarks, last-read page saving, search functionality, zoom capabilities, and night mode for enhanced reading experience.",
      technologies: ["Android", "Kotlin", "PDF Processing", "SQLite", "Material Design"],
      icon: FileText,
      category: "Mobile App",
      features: ["Bookmark Management", "Auto-save Reading Position", "Full-text Search", "Zoom Controls", "Dark/Night Mode"],
      githubUrl: "https://github.com/yourusername/pdf-ebook-android",
      liveUrl: "https://play.google.com/store/apps/details?id=com.yourapp.pdfebook"
    },
    {
      title: "AI Language Learning Platform",
      description: "An innovative language learning platform featuring a talking AI avatar powered by advanced technologies. Uses WebRTC for real-time communication, Supabase for backend services, Hugging Face for AI models, and MediaPipe for gesture recognition.",
      technologies: ["WebRTC", "Supabase", "Hugging Face", "MediaPipe", "React", "AI/ML"],
      icon: BookOpen,
      category: "AI Platform",
      features: ["Talking AI Avatar", "Real-time Communication", "Gesture Recognition", "Progress Tracking", "Interactive Lessons"],
      githubUrl: "https://github.com/yourusername/ai-language-learning",
      liveUrl: "https://ai-language-learning.vercel.app"
    },
    {
      title: "Real-Time Chat Platform",
      description: "An Omegle-inspired real-time chat application enabling anonymous conversations between users. Built with modern web technologies including Supabase Authentication, Socket.IO for real-time messaging, and WebRTC for video calls.",
      technologies: ["Socket.IO", "WebRTC", "Supabase Auth", "React", "Node.js", "Real-time"],
      icon: MessageCircle,
      category: "Web Application",
      features: ["Anonymous Chat", "Real-time Messaging", "Video Calls", "User Authentication", "Room Management"],
      githubUrl: "https://github.com/yourusername/realtime-chat",
      liveUrl: "https://realtime-chat-platform.vercel.app"
    },
    {
      title: "NutriMate: Dietary Recommender",
      description: "A cutting-edge research project utilizing deep learning algorithms to provide personalized dietary recommendations based on individual lifestyle patterns and health metrics. This system analyzes user data to suggest optimal nutrition plans.",
      technologies: ["Deep Learning", "Python", "TensorFlow", "Data Analysis", "Health Tech"],
      icon: Utensils,
      category: "Research Project",
      features: ["Personalized Recommendations", "Health Metrics Analysis", "Lifestyle Assessment", "Nutrition Planning", "ML Algorithms"],
      githubUrl: "https://github.com/yourusername/nutrimate-ai",
      liveUrl: "https://nutrimate-demo.herokuapp.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover my portfolio of innovative projects spanning mobile development, AI applications, 
            web platforms, and research initiatives that showcase my technical expertise and creativity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="bg-card-gradient shadow-subtle hover:shadow-medium transition-all duration-300 hover:scale-[1.02] animate-scale-in group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button 
                      variant="default" 
                      size="sm"
                      className="flex items-center space-x-2 hover:scale-105 transition-transform"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center space-x-2 hover:scale-105 transition-transform"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-card-gradient shadow-medium max-w-2xl mx-auto animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">More Projects Coming Soon</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm constantly working on new projects and exploring emerging technologies. 
                Stay tuned for more innovative solutions and creative applications!
              </p>
              <Button 
                variant="default"
                className="hover:scale-105 transition-transform"
                onClick={() => window.open('https://github.com/yourusername', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View All on GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;