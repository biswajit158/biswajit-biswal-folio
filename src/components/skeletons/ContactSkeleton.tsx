import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ContactSkeleton = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form Skeleton */}
          <Card className="bg-card-gradient shadow-medium">
            <CardHeader>
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-10 w-full" />
              </div>
              
              <div className="space-y-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-32 w-full" />
              </div>
              
              <Skeleton className="h-12 w-full" />
            </CardContent>
          </Card>

          {/* Contact Info Skeleton */}
          <div className="space-y-8">
            <Card className="bg-card-gradient shadow-medium">
              <CardHeader>
                <Skeleton className="h-8 w-48 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <Skeleton className="w-12 h-12 rounded-lg" />
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-24" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card-gradient shadow-medium">
              <CardHeader>
                <Skeleton className="h-8 w-48 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="w-12 h-12 rounded-lg" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient shadow-medium">
              <CardContent className="p-6 space-y-2">
                <Skeleton className="h-6 w-64" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSkeleton;
