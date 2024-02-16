"use client"
import React, { useState } from "react";
import MeetingDate from "./MeetingDate";
import { Paper, Box, TextField } from "@mui/material";
import { Button } from "@mui/material";
import MeetingTime from "./MeetingTime";
import { useRouter } from "next/navigation";
import SnackBar from "./SnackBar";


interface snackBarType {
  open: boolean;
  message: string;
  severity: string;
}

interface allDataType {
  title: string;
  description: string;
  select_date: string;
  start_time: string;
  end_time: string;
}

const NewMeetingSlot = () => {
  const route = useRouter();
  const [allData, setAllData] = useState<allDataType>({
    title: "",
    description: "",
    select_date: "",
    start_time: "",
    end_time: "",
  });
  
  const [openSnackbar, setOpenSnackbar] = useState<snackBarType>({
    open: false,
    message: '',
    severity: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    const { value } = e.target;
    setAllData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      allData.title &&
      allData.description &&
      allData.select_date &&
      allData.start_time &&
      allData.end_time
    ) {
      setOpenSnackbar({
        open: true,
        message: 'Meeting added successfully',
        severity: 'success'
      })
      route.push("/routes/dashboard/meetingroom");
    }
    else {
      setOpenSnackbar({
        open: true,
        message: 'Please fill all details',
        severity: 'error'
      })  
    }
  };
  

  return (
    <div>
      <SnackBar setOpenSnackbar={setOpenSnackbar} isOpen={openSnackbar.open} message={openSnackbar.message} severity = {openSnackbar.severity}/>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "25px",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: 500,
            height: "auto",
          },
        }}
      >
        <Paper elevation={5} className="p-5">
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            fullWidth
            onChange={(e) => handleChange(e, "title")}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            fullWidth
            onChange={(e) => handleChange(e, "description")}
          />
          <br />
          <br />
          <MeetingDate setAllData={setAllData} />
          <br />
          <MeetingTime setAllData={setAllData} />
          <br />
          <div className="flex justify-center">
            <Button
              variant="contained"
              className="bg-red-800 hover:bg-red-800"
              onClick={handleSubmit}
            >
              Add Meeting
            </Button>
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default NewMeetingSlot;
