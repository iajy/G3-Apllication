import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "SL", label: "S.L", minWidth: 10 },
  { id: "name", label: "Name", minWidth: 50 },
  {
    id: "email",
    label: "Email",
    minWidth: 10,
    align: "right",
  },
  {
    id: "initials",
    label: "Intials",
    minWidth: 10,
    align: "right",
  },
  {
    id: "phone",
    label: "Phone",
    minWidth: 100,
    align: "right",
  },
  { id: "role", label: "Role", minWidth: 10 },
  { id: "status", label: "Status", minWidth: 10 },
  { id: "title", label: "Title", minWidth: 10},
  { id: "action", label: "Action", minWidth: 10 },
];

function createData(
  SL,
  name,
  email,
  initials,
  phone,
  role,
  status,
  title,
  action
) {
  //   const density = population / size;
  return { SL, name, email, initials, phone, role, status, title, action };
}

const rows = [
    createData(1,"AjayBinu","ajaybinuajay2002@gmail.com","Binu",123456667,"User","Active","23-03-25",),
    createData(2,"AjayBinu","ajaybinuajay2002@gmail.com","Binu",123456667,"User","Active","23-03-25",),
    createData(3,"AjayBinu","ajaybinuajay2002@gmail.com","Binu",123456667,"User","Active","23-03-25",),
    createData(4,"AjayBinu","ajaybinuajay2002@gmail.com","Binu",123456667,"User","Active","23-03-25",),
    createData(5,"AjayBinu","ajaybinuajay2002@gmail.com","Binu",123456667,"User","Active","23-03-25",),
    createData(6,"AjayBinu","ajaybinuajay2002@gmail.com","Binu",123456667,"User","Active","23-03-25",),
    createData(7,"AjayBinu","ajaybinuajay2002@gmail.com","Binu",123456667,"User","Active","23-03-25",),
    createData(8,"AjayBinu","ajaybinuajay2002@gmail.com","Binu",123456667,"User","Active","23-03-25",),
    createData(9,"AjayBinu","ajaybinuajay2002@gmail.com","Binu",123456667,"User","Active","23-03-25",),
    createData(10,"AjayBinu","ajaybinuajay2002@gmail.com","Binu",123456667,"User","Active","23-03-25",),
    createData(11,"AjayBinu","ajaybinuajay2002@gmail.com","Binu",123456667,"User","Active","23-03-25",),

];

export default function UserList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
