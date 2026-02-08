import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function page() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center bg-[#FDFCFB]">
      <div className="w-full max-w-md space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif">Welcome back</h1>
          <p className="text-muted-foreground uppercase tracking-widest text-xs">Enter your details to sign in</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="name@example.com"
              className="rounded-none border-0 border-b border-border bg-transparent px-0 py-6 focus-visible:ring-0 focus-visible:border-primary transition-all placeholder:text-muted-foreground/30"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                Password
              </label>
              <Link href="#" className="text-[10px] uppercase tracking-widest hover:underline">
                Forgot?
              </Link>
            </div>
            <Input
              type="password"
              placeholder="••••••••"
              className="rounded-none border-0 border-b border-border bg-transparent px-0 py-6 focus-visible:ring-0 focus-visible:border-primary transition-all placeholder:text-muted-foreground/30"
            />
          </div>
          <Button className="w-full py-7 rounded-none uppercase tracking-[0.3em] text-xs mt-4">Sign In</Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline font-medium">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
