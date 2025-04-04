"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Check, ChevronsUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// Move domains data outside of any component
const domains = [
  { value: "m@example.com", label: "m@example.com" },
  { value: "m@google.com", label: "m@google.com" },
  { value: "m@support.com", label: "m@support.com" },
];

const labels = [
  "CIT-Infra",
  "CIT-Tech",
  "CIT-HR"
];

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  userLogonName: z
    .string()
    .min(2, "User logon name must be at least 2 characters."),
  domain: z.string().min(1, "Please select a domain"),
  profileImage: z.any().optional(),
});

export default function CreateUserPage() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [script, setScript] = useState("");

  const handleSubmit = () => {
    if (script.trim()) {
      console.log("Submitted Script:", script);
      alert("PowerShell Script Submitted!");
      setScript("");
    } else {
      alert("Please enter a PowerShell script.");
    }
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      fullName: "",
      userLogonName: "",
      domain: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
      form.setValue("profileImage", file);
    }
  };
  const [open, setOpen] = useState(false);

  const [selectedLabel, setSelectedLabel] = useState("feature");
  return (
    <div className="min-h-screen mt-2">
      <div className="mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-medium">User Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John"
                            {...field}
                            className="bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Doe"
                            {...field}
                            className="bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        SamAccount Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="userLogonName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        User Logon Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="johndoe"
                          {...field}
                          className="bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="domain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="grid">Group</FormLabel>
                      <DropdownMenu open={open} onOpenChange={setOpen}>
                        <DropdownMenuTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className="justify-between"
                            >
                              {field.value
                                ? domains.find((d) => d.value === field.value)
                                    ?.label ?? "Select group..."
                                : "Select group..."}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-[200px]">
                         

                          {/* DropdownMenuSub for applying label */}
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              Guardians
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="p-0">
                              <Command>
                                <CommandInput
                                  placeholder="Filter group..."
                                  autoFocus={true}
                                  className="h-9"
                                />
                                <CommandList>
                                  <CommandEmpty>No label found.</CommandEmpty>
                                  <CommandGroup>
                                    {labels.map((label) => (
                                      <CommandItem
                                        key={label}
                                        value={label}
                                        onSelect={(value) => {
                                          setSelectedLabel(value); // Update the selected label state
                                          setOpen(false);
                                        }}
                                      >
                                        {label}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end space-x-4 pt-4">
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                  <Button className="bg-blue-500" type="submit">
                    Create User
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-medium">Bulk Upload</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden">
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Upload className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-4 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-medium">
          Insert PowerShell Script
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Script Input */}
          <textarea
            className="w-full p-2 border rounded-lg font-mono text-sm bg-gray-100"
            rows="8"
            placeholder="Enter your PowerShell script here..."
            value={script}
            onChange={(e) => setScript(e.target.value)}
          />
          
          {/* Submit Button */}
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            onClick={handleSubmit}
          >
            Submit Script
          </Button>
        </div>
      </CardContent>
    </Card>

      </div>
    </div>
  );
}
