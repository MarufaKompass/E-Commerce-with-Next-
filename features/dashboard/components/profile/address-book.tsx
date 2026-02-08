"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Edit2, Trash2, Plus } from "lucide-react"

const addresses = [
    {
        id: 1,
        type: "Home",
        name: "John Doe",
        address: "123 Main Street",
        city: "New York",
        state: "NY",
        zip: "10001",
        isDefault: true,
    },
    {
        id: 2,
        type: "Work",
        name: "John Doe",
        address: "456 Business Ave",
        city: "New York",
        state: "NY",
        zip: "10002",
        isDefault: false,
    },
]

export function AddressBook() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                    <CardTitle>Addresses</CardTitle>
                    <CardDescription>Manage your shipping and billing addresses</CardDescription>
                </div>
                <Button size="sm" className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Address
                </Button>
            </CardHeader>
            <CardContent className="space-y-4">
                {addresses.map((addr) => (
                    <div key={addr.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex gap-3 flex-1">
                                <MapPin className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-sm">{addr.type}</h3>
                                        {addr.isDefault && (
                                            <Badge variant="secondary" className="text-xs">
                                                Default
                                            </Badge>
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">{addr.name}</p>
                                    <p className="text-sm text-muted-foreground">{addr.address}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {addr.city}, {addr.state} {addr.zip}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2 flex-shrink-0">
                                <Button variant="ghost" size="sm">
                                    <Edit2 className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
