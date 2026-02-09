"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountSettings } from "./account-settings"
import { OrderHistory } from "./order-history"
import { AddressBook } from "./address-book"

export function ProfileTabs() {
    const [activeTab, setActiveTab] = useState("orders")

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="orders">Order History</TabsTrigger>
                <TabsTrigger value="addresses">Addresses</TabsTrigger>
                <TabsTrigger value="settings">Account Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="orders">
                <OrderHistory />
            </TabsContent>

            <TabsContent value="addresses">
                <AddressBook />
            </TabsContent>

            <TabsContent value="settings">
                <AccountSettings />
            </TabsContent>
        </Tabs>
    )
}
