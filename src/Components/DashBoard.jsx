import React from "react";
import UserList from "./UserList";

const DashBoard = () => {
  return (
    <div className="grid grid-cols-4 gap-6 p-6 min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="col-span-1 bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col items-center">
          {/* Logo / Image */}
          <img
            src="public\images.png"
            alt="Logo"
            className="w-25 h-12 mb-4 rounded-full"
          />

          {/* Dashboard Title */}
          <span className="text-xl font-semibold mb-6">Dashboard</span>

          {/* Roles & Users */}
          <div className="w-full">
            <label
              htmlFor="roles"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Roles & Users
            </label>
            <select
              id="roles"
              name="roles"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="users">Users</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-3 space-y-6">
        {/* Top Bar */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold">Bar Section</h2>
        </div>

        {/* User Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <span className="text-2xl font-medium block mb-4">Users</span>
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
