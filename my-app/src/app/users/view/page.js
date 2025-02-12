"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useRouter } from 'next/navigation';

import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Filter, 
  Download, 
  UserPlus, 
  Search,
  ArrowUpDown
} from "lucide-react";

export default function UsersListPage() {
  const [selectedDomain, setSelectedDomain] = useState("all");
  // In your component
const router = useRouter();

  
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@galaxis.com",
      department: "IT",
      title: "Systems Administrator",
      status: "Active",
      lastLogin: "2024-02-11 09:30",
      domain: "galaxis.com"
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@shopee.com",
      department: "HR",
      title: "HR Manager",
      status: "Active",
      lastLogin: "2024-02-11 08:15",
      domain: "shopee.com"
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike.j@garena.com",
      department: "Finance",
      title: "Financial Analyst",
      status: "Inactive",
      lastLogin: "2024-02-10 17:45",
      domain: "garena.com"
    },
    // Add more mock users as needed
  ];

  return (
    <div className="container mx-auto py-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Directory Users</h1>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <UserPlus className="mr-2 h-4 w-4" />
            Add New User
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-end">
              <div className="flex-1 min-w-[200px]">
                <label className="text-sm font-medium mb-2 block">Search Users</label>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input placeholder="Search by name, email..." className="pl-8" />
                </div>
              </div>
              
              <div className="w-[200px]">
                <label className="text-sm font-medium mb-2 block">Domain</label>
                <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Domains</SelectItem>
                    <SelectItem value="galaxis.com">galaxis.com</SelectItem>
                    <SelectItem value="shopee.com">shopee.com</SelectItem>
                    <SelectItem value="garena.com">garena.com</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-[200px]">
                <label className="text-sm font-medium mb-2 block">Status</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="locked">Locked</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>

              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">
                    <div className="flex items-center gap-2">
                      User
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Domain</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} className="cursor-pointer hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{user.department}</TableCell>
                    <TableCell>{user.title}</TableCell>
                    <TableCell>{user.domain}</TableCell>
                    <TableCell className="text-green-500">
                      <Badge 
                        variant={user.status === "Active" ? "success" : "secondary"}
                        className="capitalize"
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell className="text-right">
                    <Button 
    key={user.id}
    variant="ghost" 
    onClick={() => router.push(`/users/view/${user.id}`)}
  >
    View Details
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