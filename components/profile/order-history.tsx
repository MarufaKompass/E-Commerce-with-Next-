"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, ChevronRight } from "lucide-react"

const orders = [
    {
        id: "ORD-001",
        date: "Dec 15, 2024",
        status: "Delivered",
        items: 3,
        total: "$129.99",
        statusColor: "bg-emerald-100 text-emerald-800",
    },
    {
        id: "ORD-002",
        date: "Dec 10, 2024",
        status: "Processing",
        items: 1,
        total: "$49.99",
        statusColor: "bg-blue-100 text-blue-800",
    },
    {
        id: "ORD-003",
        date: "Dec 05, 2024",
        status: "Delivered",
        items: 2,
        total: "$89.99",
        statusColor: "bg-emerald-100 text-emerald-800",
    },
]

export function OrderHistory() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View and manage your recent orders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {orders.length > 0 ? (
                    orders.map((order) => (
                        <div
                            key={order.id}
                            className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                            <div className="flex items-center gap-4 flex-1">
                                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                                    <Package className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <p className="font-semibold text-sm">{order.id}</p>
                                        <Badge className={order.statusColor}>{order.status}</Badge>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {order.date} • {order.items} item{order.items > 1 ? "s" : ""}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 ml-4">
                                <div className="text-right">
                                    <p className="font-semibold text-sm">{order.total}</p>
                                </div>
                                <ChevronRight className="w-5 h-5 text-muted-foreground" />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12">
                        <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">No orders yet</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
