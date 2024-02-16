import React, { useLayoutEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    textAlign: "center"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "center"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface RowData {
  Name: string;
  Title: string;
  Booking_Date: string;
  Start_Time: string;
  End_Time: string;
}

const rowArray: string[][] = [
  ["Ankit Kumar", "Team Meeting", "15-02-2024", "10:00 AM", "11:30 AM"],
  ["Rajat Sharma", "Scrum Meeting", "16-02-2024", "09:00 AM", "10:30 AM"],
  ["Yash Sharma", "Evening Meeting", "16-02-2024", "11:00 AM", "11:55 AM"],
  ["Jatin Sharma", "Client Meeting", "17-02-2024", "03:00 PM", "04:00 PM"],
  ["Aakash Jain", "Marketing Team Meeting", "18-02-2024", "05:00 PM", "06:00 PM"],
  ["Pankaj Kumar", "Cloud Team Meeting", "18-02-2024", "10:00 AM", "11:30 AM"],
  ["Ankit Agarwal", "Frontend Team Meeting", "20-02-2024", "11:00 AM", "11:40 AM"],
  ["Ritesh Goyal", "Backend Team Meeting", "22-02-2024", "08:00 AM", "10:30 AM"],
];

const createData = (
  Name: string,
  Title: string,
  Booking_Date: string,
  Start_Time: string,
  End_Time: string
): RowData => ({
  Name,
  Title,
  Booking_Date,
  Start_Time,
  End_Time,
});

const ActiveBooking = () => {
  const [tableData, setTableData] = useState<RowData[]>([]);

  useLayoutEffect(() => {
    setTableData(rowArray.map((row: any) => {
      console.log("row", row)
      return (createData(row[0], row[1], 
        row[2], row[3], row[4]));
    }));
  },[rowArray]);

  return (
    <TableContainer component={Paper} style={{ height: 520, width: "100%" }}>
      <Table sx={{ minWidth: 700 }} aria-label="sticky table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Booking Date</StyledTableCell>
            <StyledTableCell align="right">Start Time</StyledTableCell>
            <StyledTableCell align="right">End Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <StyledTableRow key={row.Name}>
              <StyledTableCell component="th" scope="row">
                {row.Name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Title}</StyledTableCell>
              <StyledTableCell align="right">{row.Booking_Date}</StyledTableCell>
              <StyledTableCell align="right">{row.Start_Time}</StyledTableCell>
              <StyledTableCell align="right">{row.End_Time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ActiveBooking;
