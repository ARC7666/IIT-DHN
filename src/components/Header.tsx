
import React, { useState } from "react";
import { Bell, ChevronDown, ChevronUp, Link, LogOut, Moon, Sun, User, ChevronRight, ChevronLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const { toast } = useToast();

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
    toast({
      title: sidebarCollapsed ? "Sidebar expanded" : "Sidebar collapsed",
      description: "Sidebar visibility toggled",
    });
  };

  const handleNotification = () => {
    toast({
      title: "Notifications",
      description: "You have no new notifications",
    });
  };

  const handleMenuAction = (action: string) => {
    toast({
      title: action,
      description: `You clicked on ${action}`,
    });
    setProfileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center">
        <div className="floww-logo flex items-center font-bold text-lg">
          <span className="text-blue-600 text-xl">ẞ</span>floww
        </div>
        <div className="ml-4">
          <button 
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            onClick={toggleSidebar}
          >
            {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {darkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <button 
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={handleNotification}
        >
          <Bell size={20} />
        </button>
        <div className="relative">
          <div className="flex items-center cursor-pointer" onClick={toggleProfile}>
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <img 
                src="/lovable-uploads/8f785bdc-b34c-4c1e-b3c9-ae0ba1b02fff.png" 
                alt="User" 
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>
            <div className="ml-2 hidden sm:block">
              <div className="text-sm font-medium">andu</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">View Profile</div>
            </div>
            <button className="ml-1">
              {profileOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
          
          {profileOpen && (
            <div className="dropdown-menu dark:bg-gray-800 dark:border dark:border-gray-700">
              <button 
                className="dropdown-item w-full text-left dark:hover:bg-gray-700"
                onClick={() => handleMenuAction("Profile")}
              >
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </button>
              <button 
                className="dropdown-item w-full text-left dark:hover:bg-gray-700"
                onClick={() => handleMenuAction("Shared Links")}
              >
                <Link className="mr-2 h-4 w-4" />
                <span>Shared Links</span>
              </button>
              <button 
                className="dropdown-item w-full text-left dark:hover:bg-gray-700"
                onClick={() => handleMenuAction("Logout")}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
