import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white text-black flex flex-col">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-white/20">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          <SidebarLink href="/users">Manage Users</SidebarLink>
          <SidebarLink href="/groups">Manage Operators</SidebarLink>
          <SidebarLink href="/operators">Manage Regional VPN Accounts</SidebarLink>
        </div>
      </nav>
    </aside>
  );
}

// Custom Sidebar Link Component for better styling
function SidebarLink({ href, children }) {
    return (
      <Button
        variant="ghost"
            className="w-full justify-start text-black hover:text-[#478EF7] hover:bg-gradient-to-r hover:from-[#478EF7]/20 hover:to-white/50 transition-all"
        asChild
      >
        <Link href={href}>{children}</Link>
      </Button>
    );
  }