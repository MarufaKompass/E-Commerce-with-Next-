"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit2, LogOut } from "lucide-react"

export function ProfileHeader() {
    return (
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <Avatar className="h-24 w-24 border-4 border-white">
                            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User avatar" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                            <p className="text-slate-300 mb-3">john.doe@example.com</p>
                            <div className="flex gap-2">
                                <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">Premium Member</span>
                                <span className="bg-slate-700 text-white text-xs px-3 py-1 rounded-full">Member since 2023</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                        <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                            <Edit2 className="w-4 h-4 mr-2" />
                            Edit Profile
                        </Button>
                        <Button variant="ghost" className="text-white hover:bg-white/10">
                            <LogOut className="w-4 h-4 mr-2" />
                            Sign Out
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
