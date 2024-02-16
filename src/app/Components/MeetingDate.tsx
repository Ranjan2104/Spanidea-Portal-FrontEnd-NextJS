'use client'
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

interface MeetingDateProps {
  setAllData: (data: any) => void;
}

export default function MeetingDate({ setAllData }: MeetingDateProps) {
  const handleDateChange = (date: string | null) => {
    setAllData((prevState: object) => ({
      ...prevState,
      select_date: dayjs(date).format('DD-MM-YYYY')
    }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Select Date"
          onChange={handleDateChange}
          sx={{ width: 500 }}
          disablePast={true}
          format="DD/MM/YYYY"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
