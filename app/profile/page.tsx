import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileTabs } from "@/components/profile/profile-tabs"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "My Profile",
    description: "Manage your account and view your orders",
}

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-background mt-18">
            <ProfileHeader />
            <div className="max-w-5xl mx-auto px-4 py-8">
                <ProfileTabs />
            </div>
        </div>
    )
}
