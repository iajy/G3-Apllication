import React, { useState, useEffect } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoCameraOutline, IoCloseOutline } from "react-icons/io5";
import axios from "axios";

const EditUser = ({ user, onExit, onUpdate }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    phone: "",
    title: "",
    initials: "",
    role: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name || "",
        email: user.email || "",
        phone: user.phone || "",
        title: user.title || "",
        initials: user.initials || "",
        role: user.role?.title || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const companyId = localStorage.getItem("company_id");

      const res = await axios.post(
        `http://13.210.33.250/api/user/${user.id}`,
        {
          ...formData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            company_id: companyId,
          },
        }
      );

      onUpdate(res.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-end bg-black/60 z-50">
      <div className=" w-250 absolute flex flex-col gap-4 p-4  bg-white rounded-2xl shadow-lg">
        <div className="flex justify-between ">
          <h1 className="text-2xl font-bold ">Edit User</h1>
          <IoCloseOutline
            onClick={onExit}
            className="cursor-pointer text-2xl hover:text-red-600"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="relative bg-gray-200 p-3 rounded-full">
            <FaUserLarge className="text-gray-600" size={50} /><div className="absolute right-1 bg-gray-300 border border-blue-600 rounded-full p-1 "><IoCameraOutline className=" text-blue-500 " size={13} /></div>

          </div>
        </div>
        <br />

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-10">
            <div className="relative">
              <label className="absolute -top-7">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full focus:outline-1 focus:outline-blue-600"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-7">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full focus:outline-1 focus:outline-blue-600"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-7">Phone</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded p-2 w-full focus:outline-1 focus:outline-blue-600"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-7">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border rounded p-2 w-full focus:outline-1 focus:outline-blue-600"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-7">Initials</label>
              <input
                type="text"
                name="initials"
                value={formData.initials}
                onChange={handleChange}
                className="border rounded p-2 w-full focus:outline-1 focus:outline-blue-600"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-7">
                Role <span className="text-red-600">*</span>
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full focus:outline-1 focus:outline-blue-600"
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="User">User</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              type="submit"
              className=" p-4 rounded-xl border border-blue-600 bg-[#145dd1] text-white"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onExit}
              className=" p-4 rounded-xl border border-red-600 text-red-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
