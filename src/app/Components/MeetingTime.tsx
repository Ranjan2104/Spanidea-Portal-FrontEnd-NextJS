"use client"
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";

interface MeetingTimeProps {
  setAllData: (data: any) => void;
}

export default function BasicTimePicker({ setAllData  }: MeetingTimeProps) {

  const handleTimeChange = (type: string, date: string | null) => {

    setAllData((prevState: object) => ({
      ...prevState,
      [type]: dayjs(date).format("HH:mm")
    }));
  };
 
  return (
    <div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Start Time"
            onChange={(date: string | null) => handleTimeChange("start_time", date)}
            sx={{ width: 460 }}
          />
        </LocalizationProvider>
      </div>
      <br/>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="End Time"
            onChange={(date: string | null) => handleTimeChange("end_time", date)}
            sx={{ width: 460 }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}
