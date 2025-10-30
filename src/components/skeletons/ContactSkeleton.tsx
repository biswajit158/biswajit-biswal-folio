import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ContactSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Form Skeleton */}
      <Card className="bg-card-gradient shadow-medium">
        <CardHeader>
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-4 w-full mt-2" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-32 w-full" />
          </div>
          <Skeleton className="h-11 w-full" />
        </CardContent>
      </Card>

      {/* Info Cards Skeleton */}
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="bg-card-gradient shadow-medium">
            <CardHeader>
              <Skeleton className="h-7 w-48" />
              <Skeleton className="h-4 w-full mt-2" />
            </CardHeader>
            <CardContent className="space-y-4">
              {i === 1 ? (
                <>
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="flex items-center space-x-4">
                      <Skeleton className="w-12 h-12 rounded-lg" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    </div>
                  ))}
                </>
              ) : i === 2 ? (
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Skeleton key={j} className="w-12 h-12 rounded-lg" />
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactSkeleton;
