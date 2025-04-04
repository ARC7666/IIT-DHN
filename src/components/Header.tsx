
import React, { useState } from "react";
import { Bell, ChevronDown, ChevronUp, Link, LogOut, Moon, Sun, User, ChevronRight, ChevronLeft, Menu, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

const Header = ({ darkMode, toggleDarkMode, sidebarCollapsed, toggleSidebar }: HeaderProps) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
    if (notificationOpen) setNotificationOpen(false);
  };

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
    if (profileOpen) setProfileOpen(false);
  };

  const handleMenuAction = (action: string) => {
    toast({
      title: action,
      description: `You clicked on ${action}`,
    });
    setProfileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-3 sm:px-6 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center">
        {isMobile ? (
          <button 
            className="p-2 mr-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
            onClick={toggleSidebar}
          >
            {sidebarCollapsed ? <Menu size={24} /> : <X size={24} />}
          </button>
        ) : (
          <div className="floww-logo flex items-center font-bold text-lg mr-4">
            <span className="text-blue-600 text-xl">ẞ</span>floww
          </div>
        )}
        
        {!isMobile && (
          <button 
            className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors"
            onClick={toggleSidebar}
          >
            {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        )}
        
        {isMobile && (
          <div className="floww-logo flex items-center font-bold text-lg">
            <span className="text-blue-600 text-xl">ẞ</span>floww
          </div>
        )}
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {darkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <div className="relative">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleNotification}
          >
            <Bell size={20} />
          </button>
          
          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <div className="p-2">
                <div className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <p className="text-sm font-medium">No new notifications</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Check back later for updates</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <div className="flex items-center cursor-pointer" onClick={toggleProfile}>
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <img 
                src="/lovable-uploads/8f785bdc-b34c-4c1e-b3c9-ae0ba1b02fff.png" 
                alt="User" 
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>
            {!isMobile && (
              <div className="ml-2 hidden sm:block">
                <div className="text-sm font-medium">andu</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">View Profile</div>
              </div>
            )}
            {!isMobile && (
              <button className="ml-1">
                {profileOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            )}
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
