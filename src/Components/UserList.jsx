import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import EditUser from "./EditUser";
import { useState, useEffect } from "react";
import axios from "axios";

const columns = [
  { id: "SL", label: "S.L", minWidth: 10 },
  { id: "name", label: "Name", minWidth: 50 },
  { id: "email", label: "Email", minWidth: 10, align: "right" },
  { id: "initials", label: "Initials", minWidth: 10, align: "right" },
  { id: "phone", label: "Phone", minWidth: 100, align: "right" },
  { id: "role", label: "Role", minWidth: 10 },
  { id: "status", label: "Status", minWidth: 10 },
  { id: "title", label: "Title", minWidth: 10 },
  { id: "action", label: "Action", minWidth: 10 },
];

export default function UserList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);

  // Fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const companyId = localStorage.getItem("company_id");

        const res = await axios.get("http://13.210.33.250/api/user?status=1", {
          headers: {
            Authorization: `Bearer ${token}`, // token
            company_id: companyId, // company id
          },
        });

        console.log("Fetched users:", res.data);
        setUsers(res.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const editUser = () => {
    setEdit(!edit);
  };

  const toggleStatus = async (userId, currentStatus) => {
    try {
      const token = localStorage.getItem("token");
      const companyId = localStorage.getItem("company_id");

      // Update status
      const res = await axios.post(
        `http://13.210.33.250/api/user/${userId}/status`,
        { status: currentStatus ? 0 : 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            company_id: companyId,
          },
        }
      );

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, status: currentStatus ? 0 : 1 } : user
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={user.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right">{user.initials}</TableCell>
                    <TableCell align="right">{user.phone}</TableCell>
                    <TableCell>{user.role?.title}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => toggleStatus(user.id, user.status)}
                        className={`px-3 py-2 rounded-full ${
                          user.status
                            ? "bg-gray-300 text-green-500"
                            : "bg-gray-300 text-red-500"
                        }`}
                      >
                        {user.status ? "Active" : "Inactive"}
                      </button>
                    </TableCell>
                    <TableCell>{user.title}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <div className="p-2 bg-red-100 rounded-full">
                          <MdOutlineDelete
                            className="text-red-600 cursor-pointer"
                            size={19}
                          />
                        </div>
                        <div className="p-2 bg-blue-100 rounded-full">
                          <FaRegEdit
                            className="text-blue-600 cursor-pointer"
                            size={19}
                            onClick={editUser}
                          />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {edit && <EditUser onExit={() => setEdit(false)} />}
    </>
  );
}
