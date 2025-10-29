import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectsSkeleton = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="bg-card-gradient shadow-subtle">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Skeleton className="w-12 h-12 rounded-lg" />
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-48" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>

                <div className="space-y-3">
                  <Skeleton className="h-5 w-32" />
                  <div className="grid grid-cols-1 gap-2">
                    {[1, 2, 3].map((j) => (
                      <Skeleton key={j} className="h-4 w-full" />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Skeleton className="h-5 w-32" />
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((j) => (
                      <Skeleton key={j} className="h-6 w-20" />
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Skeleton className="h-9 w-32" />
                  <Skeleton className="h-9 w-32" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSkeleton;
