"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"

const INITIAL_PASSWORD = "Kesh09it7"

interface TripleClickPromptProps {
  children: React.ReactNode
  onAuthenticated: () => void
}

export function TripleClickPrompt({ children, onAuthenticated }: TripleClickPromptProps) {
  const [clickCount, setClickCount] = useState(0)
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false)
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [stage, setStage] = useState<"password" | "email">("password")
  const [error, setError] = useState("")
  const clickTimerRef = useRef<NodeJS.Timeout>()

  const handleClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1

      if (newCount === 3) {
        setShowPasswordPrompt(true)
        setStage("password")
        setPassword("")
        setEmail("")
        setError("")
        setTimeout(() => {
          const input = document.getElementById("password-input") as HTMLInputElement
          input?.focus()
        }, 100)
        return 0
      }

      if (clickTimerRef.current) clearTimeout(clickTimerRef.current)
      clickTimerRef.current = setTimeout(() => setClickCount(0), 500)

      return newCount
    })
  }

  const handlePasswordSubmit = () => {
    if (password === INITIAL_PASSWORD) {
      setStage("email")
      setPassword("")
      setError("")
      setTimeout(() => {
        const input = document.getElementById("email-input") as HTMLInputElement
        input?.focus()
      }, 100)
    } else {
      setError("Incorrect password")
      setPassword("")
    }
  }

  const handleEmailSubmit = async () => {
    if (email !== "bknglabs.dev@gmail.com") {
      setError("Invalid email address")
      setEmail("")
      return
    }

    // Password prompt for final verification
    const adminPassword = prompt("Enter admin password:", "")
    if (adminPassword === INITIAL_PASSWORD) {
      localStorage.setItem("admin_token", "authenticated_" + Date.now())
      localStorage.setItem("admin_email", email)
      setShowPasswordPrompt(false)
      setClickCount(0)
      onAuthenticated()
    } else {
      setError("Invalid password")
    }
  }

  useEffect(() => {
    return () => {
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current)
    }
  }, [])

  return (
    <>
      <div onClick={handleClick}>{children}</div>

      <Dialog open={showPasswordPrompt} onOpenChange={setShowPasswordPrompt}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              {stage === "password" ? "Enter Password" : "Enter Email Address"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {error && (
              <div className="flex gap-2 p-3 bg-red-50 border border-red-200 rounded">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {stage === "password" ? (
              <>
                <div>
                  <Label htmlFor="password-input" className="text-sm font-medium">
                    Password
                  </Label>
                  <Input
                    id="password-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handlePasswordSubmit()}
                    placeholder="Enter password"
                    className="mt-2"
                  />
                </div>
                <Button
                  onClick={handlePasswordSubmit}
                  disabled={!password}
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                >
                  Continue
                </Button>
              </>
            ) : (
              <>
                <div>
                  <Label htmlFor="email-input" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleEmailSubmit()}
                    placeholder="Enter email"
                    className="mt-2"
                  />
                </div>
                <Button
                  onClick={handleEmailSubmit}
                  disabled={!email}
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                >
                  Verify & Login
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
