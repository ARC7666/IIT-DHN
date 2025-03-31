
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import TaskForm from "@/components/TaskForm";
import { Share } from "lucide-react";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center">☰</span>
                Create Task
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Streamline and Manage Your Product Team's Workflow with Ease
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-md">
                <Share size={16} />
                Share
              </button>
              <div className="relative">
                <select className="appearance-none bg-white border rounded-md py-2 pl-4 pr-10">
                  <option>Default</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <span>▼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6">
          <TaskForm />
        </div>
      </main>
    </div>
  );
};

export default Index;
