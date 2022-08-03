import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  { name: "Wanda", lastname: "Maximoff", workdays: 17, wage: 500 },
  { name: "Clint", lastname: "Barton", workdays: 20, wage: 520 },
  { name: "Sam", lastname: "Wilson", workdays: 10, wage: 535 },
  { name: "Jessica", lastname: "Jones", workdays: 5, wage: 540 },
  { name: "Phil", lastname: "Coulson", workdays: 9, wage: 560 },
  { name: "Nick", lastname: "Fury", workdays: 8, wage: 580 },
  { name: "Stephen", lastname: "Strange", workdays: 13, wage: 585 },
  { name: "Peter", lastname: "Quill", workdays: 21, wage: 590 },
  { name: "Matt", lastname: "Murdock", workdays: 2, wage: 600 },
  { name: "Peggy", lastname: "Carter", workdays: 18, wage: 620 },
  { name: "Scott", lastname: "Lang", workdays: 2, wage: 630 },
  { name: "Bruce", lastname: "Banner", workdays: 5, wage: 650 },
  { name: "Natasha", lastname: "Romanoff", workdays: 7, wage: 670 },
  { name: "Peter", lastname: "Parker", workdays: 27, wage: 700 },
  { name: "Tony", lastname: "Stark", workdays: 15, wage: 800 },
  { name: "Steve", lastname: "Rogers", workdays: 20, wage: 800 },
];

export default function AddWorkers() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, backgroundColor: "yellow" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: "green" }}>
            <TableCell className="text">Name</TableCell>
            <TableCell align="right" className="text">
              LastName
            </TableCell>
            <TableCell align="right" className="text">
              WorkDays
            </TableCell>
            <TableCell align="right" className="text">
              Wage
            </TableCell>
            <TableCell align="right" className="text">
              Salary
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: "600" }}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "600" }}>
                {row.lastname}
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "600" }}>
                {row.workdays}
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "600" }}>
                {row.wage}
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "600" }}>
                {row.wage * row.workdays}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
