
import React from "react";
import { Home, Inbox, Calendar, Users, Settings, BookOpen, BarChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const { toast } = useToast();

  const handleMenuClick = (name: string) => {
    toast({
      title: `${name} clicked`,
      description: `You clicked on the ${name} menu item`,
    });
  };

  if (isCollapsed) return null;

  return (
    <div className="fixed left-0 top-16 z-40 h-[calc(100vh-64px)] w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto transition-all duration-300">
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Menu</h2>
        </div>
        <nav className="space-y-1">
          {[
            { name: "Home", icon: Home },
            { name: "Inbox", icon: Inbox },
            { name: "Calendar", icon: Calendar },
            { name: "Team", icon: Users },
            { name: "Settings", icon: Settings },
            { name: "Documentation", icon: BookOpen },
            { name: "Reports", icon: BarChart },
          ].map((item) => (
            <button
              key={item.name}
              className="flex items-center w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => handleMenuClick(item.name)}
            >
              <item.icon className="mr-3 h-5 w-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
