import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  BookOpen, 
  Code, 
  Zap, 
  Target, 
  Calendar,
  ExternalLink,
  Lightbulb,
  TrendingUp
} from "lucide-react";

const WhatImLearning = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation({ triggerOnce: true });
  const [currentLearningRef, isCurrentLearningVisible] = useScrollAnimation({ triggerOnce: true });
  const [goalsRef, isGoalsVisible] = useScrollAnimation({ triggerOnce: true });
  const [achievementsRef, isAchievementsVisible] = useScrollAnimation({ triggerOnce: true });
  const [philosophyRef, isPhilosophyVisible] = useScrollAnimation({ triggerOnce: true });
  const currentLearning = [
    {
      title: "Advanced React & Next.js",
      description: "Diving deep into React Server Components, App Router, and advanced patterns",
      progress: 75,
      timeframe: "3 months",
      resources: ["Next.js Documentation", "React Beta Docs", "Vercel Examples"],
      color: "bg-blue-500"
    },
    {
      title: "System Design & Architecture",
      description: "Learning scalable system design patterns and microservices architecture",
      progress: 60,
      timeframe: "6 months",
      resources: ["System Design Primer", "High Scalability", "AWS Architecture"],
      color: "bg-green-500"
    },
    {
      title: "Machine Learning with Python",
      description: "Exploring TensorFlow, PyTorch, and practical ML applications",
      progress: 45,
      timeframe: "4 months",
      resources: ["Coursera ML Course", "Kaggle Competitions", "Fast.ai"],
      color: "bg-purple-500"
    }
  ];

  const upcomingGoals = [
    {
      icon: Code,
      title: "Full Stack TypeScript",
      description: "Master end-to-end TypeScript development with Node.js and React",
      priority: "High"
    },
    {
      icon: Zap,
      title: "Cloud Architecture (AWS)",
      description: "Get AWS Solutions Architect certification and hands-on experience",
      priority: "High"
    },
    {
      icon: Target,
      title: "Open Source Contributions",
      description: "Contribute to major open-source projects and build developer community presence",
      priority: "Medium"
    },
    {
      icon: Lightbulb,
      title: "DevOps & CI/CD",
      description: "Learn Docker, Kubernetes, and modern deployment strategies",
      priority: "Medium"
    }
  ];

  const recentAchievements = [
    {
      title: "Completed Java Advanced Course",
      date: "Dec 2024",
      description: "Mastered advanced Java concepts including multithreading and design patterns"
    },
    {
      title: "Built First React Portfolio",
      date: "Jan 2025",
      description: "Created this responsive portfolio with modern React and TypeScript"
    },
    {
      title: "Android App Development",
      date: "Nov 2024",
      description: "Developed and deployed my first Android application using Kotlin"
    }
  ];

  const learningPhilosophy = [
    "Learn by building real projects",
    "Focus on fundamentals before frameworks",
    "Stay updated with industry trends",
    "Practice consistent daily coding",
    "Share knowledge through documentation"
  ];

  return (
    <section id="learning" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isTitleVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What I'm Learning</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning is key to staying relevant in tech. Here's my current learning journey and future goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Current Learning */}
          <div className="space-y-6">
            <Card 
              ref={currentLearningRef}
              className={`bg-card-gradient shadow-medium transition-all duration-700 delay-200 ${
                isCurrentLearningVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BookOpen className="text-primary" />
                  Currently Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentLearning.map((item, index) => (
                  <div key={item.title} className="space-y-3 p-4 bg-background/50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {item.timeframe}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-muted-foreground">{item.progress}%</span>
                      </div>
                      <Progress 
                        value={item.progress} 
                        className="h-2"
                        style={{ 
                          animationDelay: `${index * 0.2}s`,
                        }}
                      />
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.resources.map((resource) => (
                        <Badge key={resource} variant="secondary" className="text-xs">
                          {resource}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card 
              ref={achievementsRef}
              className={`bg-card-gradient shadow-medium transition-all duration-700 delay-400 ${
                isAchievementsVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <TrendingUp className="text-primary" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAchievements.map((achievement, index) => (
                  <div key={achievement.title} className="flex items-start gap-3 p-3 bg-background/30 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-foreground">{achievement.title}</h4>
                        <span className="text-xs text-muted-foreground">{achievement.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Goals & Philosophy */}
          <div className="space-y-6">
            <Card 
              ref={goalsRef}
              className={`bg-card-gradient shadow-medium transition-all duration-700 delay-300 ${
                isGoalsVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="text-primary" />
                  Upcoming Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingGoals.map((goal, index) => {
                  const IconComponent = goal.icon;
                  return (
                    <div key={goal.title} className="flex items-start gap-3 p-4 bg-background/50 rounded-lg group hover:bg-background/70 transition-colors">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors`}>
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground">{goal.title}</h4>
                          <Badge 
                            variant={goal.priority === 'High' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {goal.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{goal.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Learning Philosophy */}
            <Card 
              ref={philosophyRef}
              className={`bg-hero-gradient text-primary-foreground shadow-glow transition-all duration-700 delay-500 ${
                isPhilosophyVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Lightbulb className="text-primary-foreground" />
                  Learning Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {learningPhilosophy.map((principle, index) => (
                    <div key={principle} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                      <p className="text-primary-foreground/90">{principle}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20">
                  <p className="text-primary-foreground/90 text-sm leading-relaxed">
                    "The key to mastering technology is not just learning syntax, but understanding 
                    the underlying principles and staying curious about how things work beneath the surface."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatImLearning;