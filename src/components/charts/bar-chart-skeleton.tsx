import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ChartSkeleton() {
  return (
    <Card className="w-[480px]">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-32" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-24" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex h-[200px] w-full items-end gap-2">
          {Array.from({ length: 12 }).map((_, i) => {
            if (i % 2 === 0) {
              return (
                <Skeleton
                  key={i}
                  className="h-[175px] w-8 rounded-md bg-gray-200 dark:bg-gray-700"
                />
              )
            }
            return (
              <Skeleton key={i} className="h-[100px] w-8 rounded-md bg-gray-200 dark:bg-gray-700" />
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
