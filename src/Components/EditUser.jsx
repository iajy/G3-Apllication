import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

const EditUser = ({ onExit }) => {
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
          <div className="bg-gray-200 p-3 rounded-full">
            <FaUserLarge className="text-gray-600" size={50} />
          </div>
        </div>
        <br />
        <form action="">
          <div className="grid grid-cols-2 gap-10">
            <div className="relative">
              <label htmlFor="" className="absolute -top-7">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your name"
                required
                className="border rounded p-2 w-full focus:outline-1 focus:outline-blue-600"
              />
            </div>
            <div className="relative">
              <label htmlFor="" className="absolute -top-7">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                required
                className="border rounded p-2 w-full focus:outline-1 focus:outline-blue-600"
              />
            </div>
            <div className="relative">
              <label htmlFor="" className="absolute -top-7">
                Phone
              </label>
              <input
                type="number"
                name=""
                id=""
                placeholder="Enter your Phone"
                className="border rounded p-2 w-full focus:outline-1 focus:outline-blue-600"
              />
            </div>
            <div className="relative">
              <label htmlFor="" className="absolute -top-7">
                Title
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your Title"
                className="border rounded p-2 w-full focus:outline-1 focus:outline-blue-600"
              />
            </div>
            <div className="relative">
              <label htmlFor="" className="absolute -top-7">
                Initials{" "}
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your initials"
                className="border rounded p-2 w-full focus:outline-1 focus:outline-blue-600"
              />
            </div>
            <div className="relative">
              <label htmlFor="" className="absolute -top-7">
                Role <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Select your role"
                required
                className="border rounded p-2 w-full focus:outline-1 focus:outline-blue-600"
              />
            </div>
          </div>
          <div>
            <span>Responsibility</span>
            <br />
            <input type="checkbox" name="" id="" />
            Designer
            <br />
            <input type="checkbox" name="" id="" />
            Project Manager
            <br />
            <input type="checkbox" name="" id="" />
            Production Manager <br />
            <input type="checkbox" name="" id="" />
            Sales Rep
          </div>
          <div className="flex justify-center gap-4">
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
