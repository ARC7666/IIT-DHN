
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Calendar } from "lucide-react";
import FileUpload from "./FileUpload";
import { format } from "date-fns";

const TaskForm = () => {
  const { toast } = useToast();
  const [taskName, setTaskName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [addOthers, setAddOthers] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);

  const teamOptions = [
    { name: "Frontend Development", bgColor: "bg-indigo-100" },
    { name: "Backend Development", bgColor: "bg-green-100" },
    { name: "UI/UX Design", bgColor: "bg-purple-100" },
    { name: "Sales", bgColor: "bg-blue-100" },
    { name: "Human Resources (HR)", bgColor: "bg-orange-100" }
  ];

  const handleReset = () => {
    setTaskName("");
    setTeamName("");
    setAssignedTo("");
    setAddOthers("");
    setPriority("");
    setDeadline("");
    setDescription("");
    toast({
      title: "Form Reset",
      description: "All form fields have been reset.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Task Created",
      description: "Your task has been created successfully.",
    });
  };

  const setTimeDeadline = (time: string) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    let dateToUse = today;
    if (time.includes("Tomorrow")) {
      dateToUse = tomorrow;
    }
    
    const hours = time.startsWith("2") ? 14 : 18;
    dateToUse.setHours(hours, 0, 0, 0);
    
    setDeadline(format(dateToUse, "dd/MM/yyyy, HH:mm"));
  };

  const toggleTeamDropdown = () => {
    setTeamDropdownOpen(!teamDropdownOpen);
  };

  const selectTeam = (team: string, bgColor: string) => {
    setTeamName(team);
    setTeamDropdownOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="taskName" className="block text-sm font-medium mb-1 required-field">
          Task Name
        </label>
        <input
          id="taskName"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter Task Name"
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <label htmlFor="teamName" className="block text-sm font-medium mb-1 required-field">
              Team Name
            </label>
            <div className="relative">
              <div
                className="w-full p-2 border rounded-md flex justify-between items-center cursor-pointer"
                onClick={toggleTeamDropdown}
              >
                {teamName || "Select Team Name"}
                <span>▼</span>
              </div>
              {teamDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {teamOptions.map((team) => (
                    <div
                      key={team.name}
                      className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center ${team.bgColor} dark:bg-opacity-20`}
                      onClick={() => selectTeam(team.name, team.bgColor)}
                    >
                      <span className="mr-2">📑</span>
                      {team.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="assignedTo" className="block text-sm font-medium mb-1 required-field">
                Assigned To
              </label>
              <div className="relative">
                <select
                  id="assignedTo"
                  value={assignedTo}
                  onChange={(e) => setAssignedTo(e.target.value)}
                  className="w-full p-2 border rounded-md appearance-none pr-8"
                  required
                >
                  <option value="" disabled>Select Person Name</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <span>▼</span>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="addOthers" className="block text-sm font-medium mb-1 required-field">
                Add others
              </label>
              <div className="relative">
                <select
                  id="addOthers"
                  value={addOthers}
                  onChange={(e) => setAddOthers(e.target.value)}
                  className="w-full p-2 border rounded-md appearance-none pr-8"
                  required
                >
                  <option value="" disabled>Select Person Name</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <span>▼</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="priority" className="block text-sm font-medium mb-1 required-field">
              Select Priority
            </label>
            <div className="relative">
              <select
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full p-2 border rounded-md appearance-none pr-8"
                required
              >
                <option value="" disabled>Select Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <span>▼</span>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="deadline" className="block text-sm font-medium mb-1 required-field">
              Deadline
            </label>
            <div className="mb-2 flex flex-wrap gap-2">
              <button 
                type="button" 
                className="time-button"
                onClick={() => setTimeDeadline("2pm Today")}
              >
                2pm Today
              </button>
              <button 
                type="button" 
                className="time-button"
                onClick={() => setTimeDeadline("6pm Today")}
              >
                6pm Today
              </button>
              <button 
                type="button" 
                className="time-button"
                onClick={() => setTimeDeadline("2pm Tomorrow")}
              >
                2pm Tomorrow
              </button>
              <button 
                type="button" 
                className="time-button"
                onClick={() => setTimeDeadline("6pm Tomorrow")}
              >
                6pm Tomorrow
              </button>
            </div>
            <div className="relative">
              <input
                id="deadline"
                type="text"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                placeholder="dd/mm/yyyy, --:--"
                className="w-full p-2 border rounded-md pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => document.getElementById("datepicker")?.click()}
              >
                <Calendar size={16} />
              </button>
              <input
                id="datepicker"
                type="datetime-local"
                className="hidden"
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  setDeadline(format(date, "dd/MM/yyyy, HH:mm"));
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded-md h-24"
            />
          </div>
        </div>

        <div>
          <FileUpload />
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-8">
        <button type="button" onClick={handleReset} className="reset-btn">
          Reset
        </button>
        <button type="submit" className="create-task-btn">
          Create Task <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
