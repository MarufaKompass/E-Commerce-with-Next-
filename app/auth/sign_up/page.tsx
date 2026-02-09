import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function page() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center bg-[#FDFCFB]">
      <div className="w-full max-w-md space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif">Join Luxe</h1>
          <p className="text-muted-foreground uppercase tracking-widest text-xs">
            Create an account for a tailored experience
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                First Name
              </label>
              <Input
                placeholder="Jane"
                className="rounded-none border-0 border-b border-border bg-transparent px-0 py-6 focus-visible:ring-0 focus-visible:border-primary transition-all placeholder:text-muted-foreground/30"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                Last Name
              </label>
              <Input
                placeholder="Doe"
                className="rounded-none border-0 border-b border-border bg-transparent px-0 py-6 focus-visible:ring-0 focus-visible:border-primary transition-all placeholder:text-muted-foreground/30"
              />
            </div>
          </div>
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
            <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">Password</label>
            <Input
              type="password"
              placeholder="Create a password"
              className="rounded-none border-0 border-b border-border bg-transparent px-0 py-6 focus-visible:ring-0 focus-visible:border-primary transition-all placeholder:text-muted-foreground/30"
            />
          </div>
          <Button className="w-full py-7 rounded-none uppercase tracking-[0.3em] text-xs mt-4">Create Account</Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
