'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Activity, Utensils, Moon, Heart } from 'lucide-react'

const data = [
  { name: 'Mon', steps: 9000, calories: 2100, sleep: 7, mood: 8 },
  { name: 'Tue', steps: 10000, calories: 2300, sleep: 6.5, mood: 7 },
  { name: 'Wed', steps: 8500, calories: 2000, sleep: 7.5, mood: 9 },
  { name: 'Thu', steps: 11000, calories: 2400, sleep: 8, mood: 8 },
  { name: 'Fri', steps: 9500, calories: 2200, sleep: 7, mood: 7 },
  { name: 'Sat', steps: 7000, calories: 1900, sleep: 9, mood: 9 },
  { name: 'Sun', steps: 8000, calories: 2000, sleep: 8.5, mood: 10 },
]

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Insights</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <InsightCard
          title="Steps"
          description="Your daily step count"
          icon={Activity}
          data={data}
          dataKey="steps"
          stroke="#8884d8"
        />
        <InsightCard
          title="Calories"
          description="Your daily calorie intake"
          icon={Utensils}
          data={data}
          dataKey="calories"
          stroke="#82ca9d"
        />
        <InsightCard
          title="Sleep"
          description="Your nightly sleep duration"
          icon={Moon}
          data={data}
          dataKey="sleep"
          stroke="#ffc658"
        />
        <InsightCard
          title="Mood"
          description="Your daily mood rating"
          icon={Heart}
          data={data}
          dataKey="mood"
          stroke="#ff8042"
        />
      </div>
    </div>
  )
}

function InsightCard({ title, description, icon: Icon, data, dataKey, stroke }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Icon className="h-6 w-6 text-primary" />
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke={stroke} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}