"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./components/app-sidebar";
import { Button } from "@/components/ui/button";
import { useState } from "react"; // Import useState
import {
  Building,
  Bell,
  ChevronDown,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const domains = ["galaxis.com", "shopee.com", "garena.com"];

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex h-screen">
          <SidebarProvider>
            {/* Sidebar */}
            <AppSidebar selectedDomain={selectedDomain} />

            {/* Main Content Container including Navigation */}
            <div className="flex-1 flex flex-col">
              {/* Top Navigation */}
              <div className="border-b px-4 py-6 flex items-center justify-between z-10 bg-white">
                <div className="flex items-center space-x-4">
                  <Building className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-lg">Active Directory</span>
                </div>

                {/* Domain Selector */}
                <div className="flex items-end space-x-12">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">Current Domain:</span>
                    <Select onValueChange={setSelectedDomain}>
                      <SelectTrigger className="w-[180px] border-gray-200">
                        <SelectValue placeholder="Select Domain" />
                      </SelectTrigger>
                      <SelectContent>
                        {domains.map((domain) => (
                          <SelectItem key={domain} value={domain}>
                            <div className="flex items-center">
                              <Building className="h-4 w-4 mr-2 text-gray-500" />
                              {domain}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Notifications */}
                  <div className="relative">
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                        3
                      </span>
                    </Button>
                  </div>

                  {/* User Profile */}
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          TS
                        </AvatarFallback>
                      </Avatar>
                      <div className="hidden md:block text-sm text-right">
                        <div className="font-medium">Yong Bin</div>
                        <div className="text-gray-500 text-xs">Administrator</div>
                      </div>
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="flex items-center">
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <span>Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Main content */}
              <main className="flex-1 bg-gradient-to-b from-white to-[#1c6efc]/15 overflow-auto p-6">
                <SidebarTrigger />
                {children}
              </main>
            </div>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
