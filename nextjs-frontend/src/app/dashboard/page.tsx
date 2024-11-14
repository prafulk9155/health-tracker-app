'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { toast } from "@/components/ui/use-toast"
import { Activity, Utensils, Moon, Heart } from 'lucide-react'

export default function DashboardPage() {
  const [steps, setSteps] = useState(0)
  const [calories, setCalories] = useState(0)
  const [sleep, setSleep] = useState(0)
  const [mood, setMood] = useState(5)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    console.log({ steps, calories, sleep, mood })
    toast({
      title: "Data submitted",
      description: "Your health data has been recorded.",
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard icon={Activity} title="Steps" value={steps} unit="steps" />
        <MetricCard icon={Utensils} title="Calories" value={calories} unit="kcal" />
        <MetricCard icon={Moon} title="Sleep" value={sleep} unit="hours" />
        <MetricCard icon={Heart} title="Mood" value={mood} unit="/10" />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Log Daily Health Data</CardTitle>
          <CardDescription>Record your health metrics for today</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="steps">Steps</Label>
              <Input
                id="steps"
                type="number"
                value={steps}
                onChange={(e) => setSteps(Number(e.target.value))}
                placeholder="Number of steps"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="calories">Calories</Label>
              <Input
                id="calories"
                type="number"
                value={calories}
                onChange={(e) => setCalories(Number(e.target.value))}
                placeholder="Calories consumed"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sleep">Sleep (hours)</Label>
              <Input
                id="sleep"
                type="number"
                value={sleep}
                onChange={(e) => setSleep(Number(e.target.value))}
                placeholder="Hours of sleep"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mood">Mood (1-10)</Label>
              <Slider
                id="mood"
                min={1}
                max={10}
                step={1}
                value={[mood]}
                onValueChange={(value) => setMood(value[0])}
              />
              <div className="text-center mt-2">{mood}</div>
            </div>
            <Button type="submit" className="w-full">Submit Daily Data</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function MetricCard({ icon: Icon, title, value, unit }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value} {unit}</div>
      </CardContent>
    </Card>
  )
}