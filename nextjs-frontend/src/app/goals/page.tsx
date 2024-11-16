import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { PlusCircle, Trophy } from 'lucide-react'

export default function GoalsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Your Goals</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Goals</CardTitle>
            <CardDescription>Track your progress towards your health and fitness goals.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Daily Steps</Label>
                <span className="text-sm text-muted-foreground">8,000 / 10,000</span>
              </div>
              <Slider defaultValue={[80]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Weight Loss</Label>
                <span className="text-sm text-muted-foreground">3 kg / 5 kg</span>
              </div>
              <Slider defaultValue={[60]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Workout Sessions</Label>
                <span className="text-sm text-muted-foreground">3 / 5 per week</span>
              </div>
              <Slider defaultValue={[60]} max={100} step={1} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Set New Goal</CardTitle>
            <CardDescription>Define a new health or fitness goal to work towards.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="goal-type">Goal Type</Label>
              <Select>
                <SelectTrigger id="goal-type">
                  <SelectValue placeholder="Select goal type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="steps">Daily Steps</SelectItem>
                  <SelectItem value="weight">Weight Loss</SelectItem>
                  <SelectItem value="workout">Workout Sessions</SelectItem>
                  <SelectItem value="nutrition">Nutrition</SelectItem>
                  <SelectItem value="sleep">Sleep</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="goal-value">Target Value</Label>
              <Input id="goal-value" type="number" placeholder="Enter your target" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="goal-deadline">Deadline</Label>
              <Input id="goal-deadline" type="date" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Receive goal reminders</Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Goal
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((_, index) => (
            <Card key={index}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="space-y-1">
                  <CardTitle>Goal Achieved</CardTitle>
                  <CardDescription>Completed 10,000 steps for 7 days</CardDescription>
                </div>
                <Trophy className="h-8 w-8 text-yellow-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}