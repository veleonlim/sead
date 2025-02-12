import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Key, Clock, Building, User, Mail, Phone, MapPin, Lock, Users } from "lucide-react";

export default function UserInformationPage() {
  const userInfo = {
    firstName: "John",
    lastName: "Doe",
    fullName: "John Doe",
    userLogonName: "john.doe",
    email: "john.doe@galaxis.com",
    department: "IT Department",
    title: "Systems Administrator",
    status: "Active",
    location: "Singapore",
    phone: "+65 9123 4567",
    manager: "Jane Smith",
    created: "2023-05-15",
    lastLogon: "2024-02-11 09:30:45",
    passwordLastSet: "2024-01-15",
    passwordExpires: "2024-04-15"
  };

  return (
    <div className="min-h-screen mt-2">
      <div className="mx-auto space-y-6">
        {/* User Profile Header Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="text-2xl">{userInfo.firstName[0]}{userInfo.lastName[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-semibold">{userInfo.fullName}</h2>
                  <p className="text-gray-500">{userInfo.userLogonName}</p>
                  <div className="flex text-green-500 gap-2 mt-2">
                    <Badge variant={userInfo.status === "Active" ? "success" : "destructive"}>
                      {userInfo.status}
                    </Badge>
                    <Badge variant="outline">{userInfo.department}</Badge>
                  </div>
                </div>
              </div>
              <div className="space-x-2">
                <Button variant="outline">
                  <Lock className="w-4 h-4 mr-2" />
                  Reset Password
                </Button>
                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                  Disable Account
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="groups">Member Of</TabsTrigger>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Information</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium">{userInfo.fullName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{userInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{userInfo.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Department</p>
                      <p className="font-medium">{userInfo.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{userInfo.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Manager</p>
                      <p className="font-medium">{userInfo.manager}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Key className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Password Last Set</p>
                        <p className="font-medium">{userInfo.passwordLastSet}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Password Expires</p>
                        <p className="font-medium">{userInfo.passwordExpires}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Account Created</p>
                        <p className="font-medium">{userInfo.created}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Last Logon</p>
                        <p className="font-medium">{userInfo.lastLogon}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="groups">
            <Card>
              <CardHeader>
                <CardTitle>Group Memberships</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Domain Users", "IT Staff", "VPN Users", "Remote Desktop Users"].map((group) => (
                    <div key={group} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span>{group}</span>
                      </div>
                      <Button variant="ghost" size="sm">View Group</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Password changed", date: "2024-02-11 09:30:45", icon: Key },
                    { action: "Logged in from 192.168.1.100", date: "2024-02-11 09:30:00", icon: Shield },
                    { action: "Group membership updated", date: "2024-02-10 15:45:22", icon: Users },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg">
                      <activity.icon className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-gray-500">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}