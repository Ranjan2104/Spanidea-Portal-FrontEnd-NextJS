"use client"
import React, { ReactNode } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';

interface Props {
  isOpen: boolean;
  message: string;
  severity: any;
  setOpenSnackbar: any;
}

export default function SnackBar({ isOpen, message, severity, setOpenSnackbar }: Props) {

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar((prev: object) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  
  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
