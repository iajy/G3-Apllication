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
    role_id: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name || "",
        email: user.email || "",
        phone: user.phone || "",
        title: user.title || "",
        initials: user.initials || "",
        role_id: user.role?.id || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const companyId = localStorage.getItem("company_id");

      const url = user
        ? `http://13.210.33.250/api/user/${user.id}`
        : `http://13.210.33.250/api/user`;
      const method = user ? "put" : "post";

      const payload = {
        first_name: formData.first_name,
        email: formData.email,
        phone: formData.phone || null,
        title: formData.title || null,
        initials: formData.initials || null,
        role_id: Number(formData.role_id),
      };

      const res = await axios({
        method,
        url,
        headers: {
          Authorization: `Bearer ${token}`,
          company_id: companyId,
        },
        data: payload,
      });

      onUpdate(res.data);

      onExit();
    } catch (error) {
      console.error("Error saving user:", error.response?.data || error);
      alert(
        error.response?.data?.message ||
          "Error saving user. Please check the form."
      );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="w-250 p-6 bg-white rounded-2xl shadow-lg relative">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">
            {user ? "Edit User" : "Add New User"}
          </h1>
          <IoCloseOutline
            onClick={onExit}
            className="cursor-pointer text-2xl hover:text-red-600"
          />
        </div>

        <div className="flex flex-col items-center mb-6">
          <div className="relative bg-gray-200 p-3 rounded-full">
            <FaUserLarge className="text-gray-600" size={50} />
            <div className="absolute right-0 bottom-0 bg-gray-300 border border-blue-600 rounded-full p-1">
              <IoCameraOutline className="text-blue-500" size={13} />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full focus:outline-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full focus:outline-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded p-2 w-full focus:outline-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border rounded p-2 w-full focus:outline-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1">Initials</label>
              <input
                type="text"
                name="initials"
                value={formData.initials}
                onChange={handleChange}
                className="border rounded p-2 w-full focus:outline-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1">
                Role <span className="text-red-600">*</span>
              </label>
              <select
                name="role_id"
                value={formData.role_id}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full focus:outline-blue-500"
              >
                <option value="">Select Role</option>
                <option value="1">Admin</option>
                <option value="2">Manager</option>
                <option value="3">User</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              type="submit"
              className="p-3 rounded-xl bg-blue-600 text-white"
            >
              {user ? "Save Changes" : "Add User"}
            </button>
            <button
              type="button"
              onClick={onExit}
              className="p-3 rounded-xl border border-red-600 text-red-600"
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
