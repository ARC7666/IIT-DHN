
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import TaskForm from "@/components/TaskForm";
import Sidebar from "@/components/Sidebar";
import { Share } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    // Always collapse sidebar on mobile by default
    if (isMobile) {
      setSidebarCollapsed(true);
    }
  }, [isMobile]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        sidebarCollapsed={sidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />
      
      <Sidebar isCollapsed={sidebarCollapsed} />
      
      <main className={`transition-all duration-300 ${(!isMobile && !sidebarCollapsed) ? 'ml-64' : 'ml-0'} mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8`}>
        <div className="mb-4 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-2 text-gray-800 dark:text-gray-100">
                <span className="inline-flex items-center justify-center text-blue-600">☰</span>
                Create Tasks
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Streamline and Manage Your Product Team's Workflow with Ease
              </p>
            </div>
            <div className="flex mt-4 sm:mt-0 space-x-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Share size={16} />
                Share
              </button>
              <Select defaultValue="Default">
                <SelectTrigger className="w-[140px] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Default">Default</SelectItem>
                  <SelectItem value="Option1">Option 1</SelectItem>
                  <SelectItem value="Option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
          <TaskForm />
        </div>
      </main>
    </div>
  );
};

export default Index;
