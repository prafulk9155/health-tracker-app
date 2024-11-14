'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { UserPlus, Mail, Lock } from 'lucide-react'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (event: React.ReactEvent) => {
    event.preventDefault()
    // Here you would typically send this data to your backend API
    console.log({ email, password })
    toast({
      title: "Account created",
      description: "You've successfully signed up!",
    })
    router.push('/dashboard')
  }

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">Sign up for Health Tracker to start your wellness journey</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-white/50 dark:bg-gray-700/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center space-x-2">
                <Lock className="h-4 w-4" />
                <span>Password</span>
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                className="bg-white/50 dark:bg-gray-700/50"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button onClick={handleSubmit} className="w-full bg-gradient-to-r from-purple-600 to-yellow-600 hover:from-purple-700 hover:to-blue-700">
            <UserPlus className="mr-2 h-4 w-4" /> Sign Up
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            Already have an account? <a href="/login" className="text-primary hover:underline">Log in</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}