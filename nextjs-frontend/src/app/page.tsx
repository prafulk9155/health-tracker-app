import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { HeartPulse, Utensils, Moon } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] p-4 text-center">
      <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-blue-600">Welcome to Health Tracker</h1>
      <p className="text-xl mb-8 max-w-2xl">Track your fitness, nutrition, and wellness journey all in one place. Start your path to a healthier you today!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard icon={HeartPulse} title="Fitness Tracking" description="Log workouts and track your progress over time." />
        <FeatureCard icon={Utensils} title="Nutrition Monitoring" description="Keep track of your meals and nutritional intake." />
        <FeatureCard icon={Moon} title="Sleep Analysis" description="Monitor your sleep patterns for better rest." />
      </div>
      <div className="space-x-4">
        <Button asChild size="lg" className="bg-gradient-to-r from-yellow-600 to-blue-600 hover:from-yellow-700 hover:to-blue-700 text-white">
          <Link href="/signup">Get Started</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/login">Log In</Link>
        </Button>
      </div>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <Icon className="h-12 w-12 text-purple-600 mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}