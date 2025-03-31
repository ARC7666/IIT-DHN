
import React, { useState } from "react";
import { Home, Inbox, Calendar, Users, Settings, BookOpen, BarChart, ChevronDown, ChevronUp, Plus, Eye, List, PieChart, DollarSign, Building, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    Home: true,
    Task: false,
    "Employee Management": false,
    "Attendance Management": false,
    "Payroll Management": false,
    Configurations: false
  });

  const handleMenuClick = (name: string) => {
    toast({
      title: `${name} clicked`,
      description: `You clicked on the ${name} menu item`,
    });
  };

  const toggleMenu = (menuName: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  if (isCollapsed && !isMobile) return null;

  const sidebarContent = (
    <div className={`${isMobile ? 'fixed inset-0 z-50 bg-white dark:bg-gray-800' : 'fixed left-0 top-16 z-40 h-[calc(100vh-64px)] w-64'} bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto transition-all duration-300`}>
      {isMobile && (
        <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <div className="floww-logo flex items-center font-bold text-lg">
            <span className="text-blue-600 text-xl">ẞ</span>floww
          </div>
          <button 
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            onClick={() => handleMenuClick("Close")}
          >
            <X size={20} />
          </button>
        </div>
      )}
      
      <div className="p-4">
        {isMobile && (
          <div className="mb-4 p-3 border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 rounded-md flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white mr-3">
              <Users size={16} />
            </div>
            <span className="text-lg">Atom HR</span>
          </div>
        )}
        
        <nav className="space-y-1">
          {/* Home Section */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
            <button
              className="flex items-center justify-between w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => toggleMenu("Home")}
            >
              <span>Home</span>
              {expandedMenus["Home"] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {expandedMenus["Home"] && (
              <div className="ml-6 mt-1 space-y-1">
                <button
                  className="flex items-center w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleMenuClick("Home")}
                >
                  <Home className="mr-3 h-5 w-5" />
                  <span>Home</span>
                </button>
              </div>
            )}
          </div>
          
          {/* Task Section */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
            <button
              className="flex items-center justify-between w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => toggleMenu("Task")}
            >
              <span>Task</span>
              {expandedMenus["Task"] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {expandedMenus["Task"] && (
              <div className="ml-6 mt-1 space-y-1">
                <button
                  className="flex items-center w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/20 bg-blue-50 dark:bg-blue-900/10"
                  onClick={() => handleMenuClick("Create Task")}
                >
                  <Plus className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-blue-600">Create Task</span>
                </button>
                <button
                  className="flex items-center w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleMenuClick("View Task")}
                >
                  <Eye className="mr-3 h-5 w-5" />
                  <span>View Task</span>
                </button>
              </div>
            )}
          </div>
          
          {/* Employee Management */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
            <button
              className="flex items-center justify-between w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => toggleMenu("Employee Management")}
            >
              <span>Employee Management</span>
              {expandedMenus["Employee Management"] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {expandedMenus["Employee Management"] && (
              <div className="ml-6 mt-1 space-y-1">
                <button
                  className="flex items-center w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleMenuClick("Add Employee")}
                >
                  <Plus className="mr-3 h-5 w-5" />
                  <span>Add Employee</span>
                </button>
                <button
                  className="flex items-center w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleMenuClick("View Employee")}
                >
                  <Eye className="mr-3 h-5 w-5" />
                  <span>View Employee</span>
                </button>
              </div>
            )}
          </div>
          
          {/* Attendance Management */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
            <button
              className="flex items-center justify-between w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => toggleMenu("Attendance Management")}
            >
              <span>Attendance Management</span>
              {expandedMenus["Attendance Management"] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {expandedMenus["Attendance Management"] && (
              <div className="ml-6 mt-1 space-y-1">
                <button
                  className="flex items-center w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleMenuClick("List")}
                >
                  <List className="mr-3 h-5 w-5" />
                  <span>List</span>
                </button>
                <button
                  className="flex items-center w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleMenuClick("Summary")}
                >
                  <PieChart className="mr-3 h-5 w-5" />
                  <span>Summary</span>
                </button>
              </div>
            )}
          </div>
          
          {/* Payroll Management */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
            <button
              className="flex items-center justify-between w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => toggleMenu("Payroll Management")}
            >
              <span>Payroll Management</span>
              {expandedMenus["Payroll Management"] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {expandedMenus["Payroll Management"] && (
              <div className="ml-6 mt-1 space-y-1">
                <button
                  className="flex items-center w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleMenuClick("Create")}
                >
                  <List className="mr-3 h-5 w-5" />
                  <span>Create</span>
                </button>
                <button
                  className="flex items-center w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleMenuClick("List Payroll")}
                >
                  <List className="mr-3 h-5 w-5" />
                  <span>List</span>
                </button>
                <button
                  className="flex items-center w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleMenuClick("Expense Manager")}
                >
                  <DollarSign className="mr-3 h-5 w-5" />
                  <span>Expense Manager</span>
                </button>
              </div>
            )}
          </div>
          
          {/* Configurations */}
          <div>
            <button
              className="flex items-center justify-between w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => toggleMenu("Configurations")}
            >
              <span>Configurations</span>
              {expandedMenus["Configurations"] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {expandedMenus["Configurations"] && (
              <div className="ml-6 mt-1 space-y-1">
                <button
                  className="flex items-center w-full py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleMenuClick("Office")}
                >
                  <Building className="mr-3 h-5 w-5" />
                  <span>Office</span>
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );

  return isMobile ? (
    !isCollapsed ? sidebarContent : null
  ) : (
    sidebarContent
  );
};

export default Sidebar;
