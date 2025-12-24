"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function AccountSettings() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="firstname">First Name</Label>
                            <Input id="firstname" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastname">Last Name</Label>
                            <Input id="lastname" defaultValue="Doe" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <Button className="w-full md:w-auto">Save Changes</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Password & Security</CardTitle>
                    <CardDescription>Manage your password and security settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="current">Current Password</Label>
                        <Input id="current" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="new">New Password</Label>
                        <Input id="new" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm">Confirm Password</Label>
                        <Input id="confirm" type="password" />
                    </div>
                    <Button className="w-full md:w-auto">Update Password</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Notifications & Preferences</CardTitle>
                    <CardDescription>Control how you receive updates from us</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <Checkbox id="email-promo" defaultChecked />
                        <label htmlFor="email-promo" className="text-sm cursor-pointer">
                            Promotional emails and special offers
                        </label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Checkbox id="email-orders" defaultChecked />
                        <label htmlFor="email-orders" className="text-sm cursor-pointer">
                            Order and shipping updates
                        </label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Checkbox id="email-newsletter" defaultChecked />
                        <label htmlFor="email-newsletter" className="text-sm cursor-pointer">
                            Weekly newsletter with product recommendations
                        </label>
                    </div>
                    <Button className="w-full md:w-auto">Save Preferences</Button>
                </CardContent>
            </Card>
        </div>
    )
}
