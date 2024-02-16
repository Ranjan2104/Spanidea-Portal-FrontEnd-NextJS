"use client"
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import Link from "next/link";

const PastBooked = dynamic(() => import("./PastBook"), {
  ssr: false,
  loading: () => <p className="text-xl">Loading...</p>,
});
const ActiveBooking = dynamic(() => import("./ActiveBooking"), {
  ssr: false,
  loading: () => <p className="text-xl">Loading...</p>,
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MeetingTab() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Link href="/routes/dashboard/meetingroom/addmeeting">
          <Button
            variant="contained"
            className="bg-blue-800 buttonCustomPosition"
          >
            Book New Meeting
            <AddIcon />
          </Button>
        </Link>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Active Booking" {...a11yProps(0)} />
          <Tab label="Past Booked" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ActiveBooking />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PastBooked />
      </CustomTabPanel>
    </Box>
  );
}
