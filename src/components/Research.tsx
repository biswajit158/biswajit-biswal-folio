import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Award, BookOpen, Brain, TrendingUp } from "lucide-react";
import { useLazyLoad } from "@/hooks/use-lazy-load";
import ResearchSkeleton from "./skeletons/ResearchSkeleton";

const Research = () => {
  const [elementRef, isInView] = useLazyLoad({ threshold: 0.1, rootMargin: '50px' });
  
  if (!isInView) {
    return <ResearchSkeleton />;
  }

  return (
    <section id="research" className="py-20 bg-background" ref={elementRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Research Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of artificial intelligence and healthcare through innovative 
            research in personalized nutrition and dietary recommendations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-card-gradient shadow-medium hover:shadow-glow transition-all duration-300 animate-scale-in overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-8">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl text-foreground">
                      NutriMate: A Deep Learning-Based Personalized Dietary Recommender
                    </CardTitle>
                    <p className="text-muted-foreground mt-2 text-lg">
                      Using Lifestyle and Health Metrics for Optimal Nutrition Planning
                    </p>
                  </div>
                </div>
                <Badge variant="default" className="text-sm px-3 py-1">
                  Research Project
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-8 space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-foreground">Personalized AI</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Advanced algorithms for individual nutrition needs
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-foreground">Health Focus</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Improving dietary habits through technology
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-foreground">Deep Learning</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Neural networks for pattern recognition
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Research Abstract</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    NutriMate represents a groundbreaking approach to personalized nutrition through the application 
                    of deep learning technologies. This research project focuses on developing an intelligent system 
                    that analyzes individual lifestyle patterns, health metrics, and dietary preferences to generate 
                    customized nutrition recommendations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Key Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    The system leverages advanced neural network architectures to process complex health data, 
                    including metabolic rates, activity levels, medical history, and food preferences. By utilizing 
                    deep learning algorithms, NutriMate can identify subtle patterns and correlations that traditional 
                    rule-based systems might miss, resulting in more accurate and effective dietary recommendations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Technologies & Methodologies</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Machine Learning:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Neural Networks</Badge>
                        <Badge variant="secondary">Deep Learning</Badge>
                        <Badge variant="secondary">Pattern Recognition</Badge>
                        <Badge variant="secondary">Data Mining</Badge>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Data Science:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Health Analytics</Badge>
                        <Badge variant="secondary">Nutritional Data</Badge>
                        <Badge variant="secondary">Lifestyle Metrics</Badge>
                        <Badge variant="secondary">Predictive Modeling</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Impact & Applications</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    This research contributes to the growing field of AI-driven healthcare solutions, particularly 
                    in preventive medicine and personalized wellness. The findings have potential applications in 
                    clinical nutrition, fitness applications, and public health initiatives, demonstrating the 
                    practical value of applying artificial intelligence to improve human health outcomes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                <Button 
                  className="flex items-center space-x-2 hover:scale-105 transition-transform"
                  onClick={() => {
                    // Create a downloadable research paper PDF
                    const link = document.createElement('a');
                    link.href = '/research/nutrimate-research-paper.pdf';
                    link.download = 'NutriMate-Research-Paper.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  aria-label="Download NutriMate research paper"
                >
                  <Download size={16} />
                  <span>Download Research Paper</span>
                </Button>
                <Button 
                  variant="outline"
                  className="flex items-center space-x-2 hover:scale-105 transition-transform"
                  onClick={() => window.open('https://arxiv.org/abs/your-paper-id', '_blank')}
                  aria-label="View research abstract on arXiv"
                >
                  <FileText size={16} />
                  <span>View Abstract</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Card className="bg-card-gradient shadow-subtle max-w-2xl mx-auto animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Future Research Directions</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm actively exploring new research opportunities in AI applications for healthcare, 
                  real-time health monitoring systems, and the integration of IoT devices with machine 
                  learning for comprehensive wellness solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;