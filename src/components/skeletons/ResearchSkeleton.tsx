import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ResearchSkeleton = () => {
  return (
    <Card className="bg-card-gradient shadow-medium">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-8">
        <div className="flex items-start space-x-4">
          <Skeleton className="w-16 h-16 rounded-xl" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
          </div>
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
          {[1, 2, 3, 4].map((section) => (
            <div key={section} className="space-y-4">
              <Skeleton className="h-6 w-48" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 pt-6 border-t border-border">
          <Skeleton className="h-10 w-52" />
          <Skeleton className="h-10 w-40" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ResearchSkeleton;
