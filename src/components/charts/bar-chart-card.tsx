"use client"

import { useEffect } from "react"
import { Bar, BarChart } from "recharts"

import { ChartContainer } from "@/components/ui/chart"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

import { chartConfig } from "./utils/charts.config"
import { chartData } from "./utils/charts.data"

export function BarChartCard() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Data loaded")
    }, 3000)

    return () => {
      clearTimeout(timer)
      console.log("Cleanup on unmount")
    }
  }, [])

  return (
    <Card className="max-w-xl">
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
