"use client"

import type React from "react"

import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function page() {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setSubmitted(true)
        setIsLoading(false)
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <Card className="border border-border bg-card p-8">
                    {!submitted ? (
                        <>
                            <div className="mb-8">
                                <h1 className="text-2xl font-light tracking-tight text-foreground mb-2">Reset Password</h1>
                                <p className="text-sm text-muted-foreground">
                                    Enter your email address and we'll send you a link to reset your password.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        required
                                        className="w-full px-4 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-10 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                                >
                                    {isLoading ? "Sending..." : "Send Reset Link"}
                                </Button>
                            </form>

                            <div className="mt-6 pt-6 border-t border-border">
                                <a
                                    href="/login"
                                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Login
                                </a>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="text-center mb-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-foreground mb-2">Check Your Email</h2>
                                <p className="text-sm text-muted-foreground">
                                    We've sent a password reset link to <span className="font-medium text-foreground">{email}</span>
                                </p>
                            </div>

                            <div className="bg-secondary/50 border border-border rounded-lg p-4 mb-6">
                                <p className="text-xs text-muted-foreground">
                                    If you don't see the email, check your spam folder or try requesting another link in a few minutes.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <Button
                                    onClick={() => {
                                        setSubmitted(false)
                                        setEmail("")
                                    }}
                                    variant="outline"
                                    className="w-full h-10 border-border bg-transparent hover:bg-secondary/50 transition-colors"
                                >
                                    Try Another Email
                                </Button>
                                <a
                                    href="/login"
                                    className="block text-center px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                                >
                                    Back to Login
                                </a>
                            </div>
                        </>
                    )}
                </Card>

                <p className="text-center text-xs text-muted-foreground mt-6">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-primary hover:text-primary/80 transition-colors font-medium">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    )
}
