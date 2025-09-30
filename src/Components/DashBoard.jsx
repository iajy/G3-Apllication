import React, { useState } from "react";
import UserList from "./UserList";
import { IoMdSearch } from "react-icons/io";
import { FaAngleDown, FaBell } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { IoReorderThree } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";

const DashBoard = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="grid grid-cols-4 gap-6 p-6 min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="col-span-1 bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col items-center">
          <img
            src="/images.png"
            alt="Logo"
            className="w-25 h-12 mb-4 rounded-full"
          />
          <span className="text-xl font-semibold mb-6">Dashboard</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-3 space-y-6">
        {/* Top Bar */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between">
            <div className="flex gap-5 items-center">
              <IoReorderThree size={20} />
              <div className="relative">
                <IoMdSearch className="absolute top-3.5 left-1 text-gray-500 " />
                <input
                  type="text"
                  placeholder="Search by name or email"
                  className="border rounded border-gray-500 px-7 py-2 focus:outline-1 focus:outline-blue-600"
                />
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="bg-gray-200 p-3 rounded-full">
                <FaBell className="text-gray-600" size={19} />
              </div>
              <div className="bg-gray-200 p-3 rounded-full">
                <FaUserLarge className="text-gray-600" size={19} />
              </div>
            </div>
          </div>
        </div>

        {/* User Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <span className="text-2xl font-medium block mb-4">Users</span>
          <div className="flex gap-5 justify-between mb-4">
            <div className="flex gap-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name or email"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border rounded border-gray-500 px-7 py-2 focus:outline-1 focus:outline-blue-600"
                />
              </div>
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border rounded border-gray-500 px-7 py-2 focus:outline-1 focus:outline-blue-600"
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-[#145dd1] text-white p-2 rounded font-medium">
                + Add New User
              </button>
              <SlOptionsVertical />
            </div>
          </div>
          <UserList statusFilter={statusFilter} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
