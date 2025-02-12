import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger, // Trigger for the sidebar
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Manage User", url: "/users", icon: Home },
  { title: "Manage Group", url: "/group", icon: Inbox },
  { title: "Manage Regional", url: "/regional", icon: Calendar },
//   { title: "Search", url: "#", icon: Search },
//   { title: "Settings", url: "#", icon: Settings },
];

export default function AppSidebar() {
  return (
    <>


      {/* Sidebar */}
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
