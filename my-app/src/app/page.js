import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Search,
  Mail,
  Share2,
  Users,
  Bell,
  Shield,
  Key,
  UserX,
  Clock,
  Building,
  ChevronDown,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"

export default function Dashboard() {
  const domains = ["galaxis.com", "shopee.com", "garena.com"];

  return (
    <div className="border-b">
      <div className="max-w-screen-2xl mx-auto px-4">
        {/* <div className="h-16 flex items-center justify-between"> */}
          {/* Left side - Logo/Brand */}
          {/* <div className="flex items-center space-x-4">
            <Building className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">Active Directory</span>
          </div> */}

          {/* Right side - Actions */}
          {/* <div className="flex items-center space-x-6">
            {/* Domain Selector with improved styling */}
            {/* <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Current Domain:</span>
              <Select>
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
            </div> */} 

            {/* Notifications */}
            {/* <div className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                  3
                </span>
              </Button>
            </div> */}

            {/* User Profile */}
            {/* <DropdownMenu>
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
          </div> */}
        </div> 
       
      {/* <Separator className="my-4" /> */}
    
      {/* </div> */}

      {/* Hero Section with Background */}
      <div className="relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex items-center justify-between py-8">
            {/* Welcome Text */}
            <div className="relative z-10">
              <h1 className="text-3xl font-semibold tracking-tight">
                Good Morning, Yong Bin
              </h1>
              <p className="text-gray-600 mt-2">
                Welcome to your Active Directory Dashboard
              </p>
              <div className="flex items-center gap-4 mt-6">
                <Card className="inline-flex items-center space-x-2 bg-primary/5 border-0">
                  <CardContent className="p-3">
                    <span className="text-sm font-medium">
                      Last login: Today at 9:30 AM
                    </span>
                  </CardContent>
                </Card>
                <Card className="inline-flex items-center space-x-2 bg-green-50 border-0">
                  <CardContent className="p-3">
                    <span className="text-sm font-medium text-green-700">
                      System Status: Healthy
                    </span>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative hidden lg:block">
              {/* Replace with your actual image path */}
              <div className="w-[500px] h-auto relative">
              <Image
            src="/hi.svg"
            alt="Dashboard Illustration"
            layout="intrinsic"
            width={400} 
            height={200} 
            className="max-w-none"
            priority
          />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6 space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Total Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">1,543</span>
                  <span className="text-green-500">↑12</span>
                </div>
                <div className="text-sm text-gray-500">Active Users: 1,450</div>
                <div className="text-sm text-gray-500">Disabled Users: 93</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">95%</span>
                  <span className="text-green-500">Healthy</span>
                </div>
                <Progress value={95} className="h-2" />
                <div className="text-sm text-gray-500">
                  Last scan: 2 hours ago
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <UserX className="h-5 w-5" />
                Account Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl text-red-500 font-bold">30</div>
                <div className="flex flex-col gap-1 text-sm">
                  <span>Locked Accounts: 12</span>
                  <span>Expired Accounts: 8</span>
                  <span>Never Logged In: 10</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Password Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl text-red-500 font-bold">20</div>
                <div className="flex flex-col gap-1 text-sm">
                  <span>Expired: 15</span>
                  <span>Expiring in 7 days: 5</span>
                  <span>No password required: 0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Directory Users
              </CardTitle>
              <div className="flex items-center gap-4">
                <Input
                  type="search"
                  placeholder="Search Users"
                  className="w-64"
                />
                <Button>
                  <Clock className="h-4 w-4 mr-2" />
                  Last Logon Report
                </Button>
                <Button>
                  <Shield className="h-4 w-4 mr-2" />
                  Security Audit
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Display Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Last Logon</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    username: "john.doe",
                    displayName: "John Doe",
                    email: "john.doe@galaxis.com",
                    department: "IT",
                    lastLogon: "2024-02-11 09:30",
                    status: "Active",
                  },
                  // Add more users here
                ].map((user) => (
                  <TableRow key={user.username}>
                    <TableCell>
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                    </TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{user.displayName[0]}</AvatarFallback>
                      </Avatar>
                      {user.displayName}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.department}</TableCell>
                    <TableCell>{user.lastLogon}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-green-50 text-green-600">
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Search className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
