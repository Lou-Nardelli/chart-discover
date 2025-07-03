"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart } from "recharts"

import { ChartContainer } from "@/components/ui/chart"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

import { chartConfig } from "./utils/charts.config"
import { chartData } from "./utils/charts.data"
import { ChartSkeleton } from "./bar-chart-skeleton"

export function BarChartCard() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (isLoading) {
    return <ChartSkeleton />
  }

  return (
    <Card className="w-[480px]">
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>Recap 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
