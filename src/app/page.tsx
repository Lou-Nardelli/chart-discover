import { Suspense } from "react"

import { BarChartCard } from "@/components/charts/bar-chart-card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Bienvenue sur mon site</h1>
      <div className="flex justify-center gap-8">
        <Suspense fallback={<div>Loading...</div>}>
          <BarChartCard />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <BarChartCard />
        </Suspense>
      </div>
    </div>
  )
}
