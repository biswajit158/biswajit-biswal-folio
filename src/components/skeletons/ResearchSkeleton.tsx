import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ResearchSkeleton = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-card-gradient shadow-medium">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-8">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="w-16 h-16 rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-8 w-96" />
                    <Skeleton className="h-5 w-64" />
                  </div>
                </div>
                <Skeleton className="h-6 w-24" />
              </div>
            </CardHeader>

            <CardContent className="p-8 space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="text-center space-y-3">
                    <Skeleton className="w-12 h-12 rounded-lg mx-auto" />
                    <Skeleton className="h-5 w-32 mx-auto" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <Skeleton className="h-7 w-48" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>

                <div className="space-y-4">
                  <Skeleton className="h-7 w-48" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>

                <div className="space-y-4">
                  <Skeleton className="h-7 w-64" />
                  <div className="grid md:grid-cols-2 gap-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="space-y-3">
                        <Skeleton className="h-5 w-40" />
                        <div className="flex flex-wrap gap-2">
                          {[1, 2, 3, 4].map((j) => (
                            <Skeleton key={j} className="h-6 w-24" />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                <Skeleton className="h-10 w-48" />
                <Skeleton className="h-10 w-48" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchSkeleton;
