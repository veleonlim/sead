"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Filter, 
  Download, 
  UserPlus,
  Users,
  Search,
  ArrowUpDown,
  MoreHorizontal,
  UserMinus,
  Shield,
  Lock,
  Key
} from "lucide-react";

export default function UsersListPage() {
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [selectedUsers, setSelectedUsers] = useState(new Set());
  
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@galaxis.com",
      department: "IT",
      title: "Systems Administrator",
      status: "Active",
      lastLogin: "2024-02-11 09:30",
      domain: "galaxis.com",
      groups: ["IT Admins", "VPN Users"]
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@shopee.com",
      department: "HR",
      title: "HR Manager",
      status: "Active",
      lastLogin: "2024-02-11 08:15",
      domain: "shopee.com",
      groups: ["HR Team", "Policy Makers"]
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike.j@garena.com",
      department: "Finance",
      title: "Financial Analyst",
      status: "Inactive",
      lastLogin: "2024-02-10 17:45",
      domain: "garena.com",
      groups: ["Finance Team"]
    },
  ];

  const handleUserSelect = (userId) => {
    const newSelected = new Set(selectedUsers);
    if (newSelected.has(userId)) {
      newSelected.delete(userId);
    } else {
      newSelected.add(userId);
    }
    setSelectedUsers(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedUsers.size === users.length) {
      setSelectedUsers(new Set());
    } else {
      setSelectedUsers(new Set(users.map(user => user.id)));
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">Directory Users</h1>
            <p className="text-sm text-gray-500 mt-1">Manage users and group assignments</p>
          </div>
          <div className="flex gap-2">
            <Button className="text-white bg-blue-500 text-white hover:bg-blue-600">
              <UserPlus className="mr-2 h-4 w-4" />
              Add New User
            </Button>
            <Button className="text-black bg-white hover:bg-gray-50" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Manage Groups
            </Button>
          </div>
        </div>

        {/* Bulk Actions (visible when users are selected) */}
        {selectedUsers.size > 0 && (
          <Card className="bg-blue-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{selectedUsers.size} users selected</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Users className="mr-2 h-4 w-4" />
                    Add to Group
                  </Button>
                  <Button variant="outline" size="sm">
                    <UserMinus className="mr-2 h-4 w-4" />
                    Remove from Group
                  </Button>
                  <Button variant="outline" size="sm">
                    <Shield className="mr-2 h-4 w-4" />
                    Update Permissions
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Lock className="mr-2 h-4 w-4" />
                    Disable Accounts
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-end">
              <div className="flex-1 min-w-[200px]">
                <label className="text-sm font-medium mb-2 block">Search Users</label>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input placeholder="Search by name, email, group..." className="pl-8" />
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
                <label className="text-sm font-medium mb-2 block">Group</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Groups</SelectItem>
                    <SelectItem value="it-admins">IT Admins</SelectItem>
                    <SelectItem value="hr-team">HR Team</SelectItem>
                    <SelectItem value="finance-team">Finance Team</SelectItem>
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
                  <TableHead className="w-[30px]">
                    <Checkbox
                      checked={selectedUsers.size === users.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead className="w-[300px]">
                    <div className="flex items-center gap-2">
                      User
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Groups</TableHead>
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
                      <Checkbox
                        checked={selectedUsers.has(user.id)}
                        onCheckedChange={() => handleUserSelect(user.id)}
                      />
                    </TableCell>
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
                    <TableCell>
                      <div className="flex gap-1 flex-wrap">
                        {user.groups.map((group) => (
                          <Badge key={group} variant="outline" className="text-xs">
                            {group}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{user.domain}</TableCell>
                    <TableCell>
                      <Badge
                        variant={user.status === "Active" ? "success" : "secondary"}
                        className={`capitalize ${
                          user.status === "Active" ? "text-green-700" : "text-gray-500"
                        }`}
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Users className="mr-2 h-4 w-4" />
                            Add to Group
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <UserMinus className="mr-2 h-4 w-4" />
                            Remove from Group
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Shield className="mr-2 h-4 w-4" />
                            Manage Permissions
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Key className="mr-2 h-4 w-4" />
                            Reset Password
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Lock className="mr-2 h-4 w-4" />
                            Disable Account
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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