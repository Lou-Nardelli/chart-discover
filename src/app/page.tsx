import { BarChartCard } from "@/components/charts/bar-chart-card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-12 text-center text-4xl font-bold">Liste de chart</h1>
      <div className="flex justify-center gap-8">
        <BarChartCard />
        <BarChartCard />
      </div>
    </div>
  )
}
