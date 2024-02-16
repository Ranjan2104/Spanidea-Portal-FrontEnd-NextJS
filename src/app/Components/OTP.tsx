"use client"
import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box, CircularProgress, Paper } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useApiotpVerifyMutation } from "../Store/apiMiddleware/otpVerifyAPI";
import SnackBar from "./SnackBar";
import Cookies from 'js-cookie';

interface openSnackBarType {
  open: boolean;
  message: string;
  error: boolean;
  severity: any;
}
const OTP = () => {
  const searchParams = useSearchParams();
  const [apiOtpVerify, result] = useApiotpVerifyMutation();
  const [value, setValue] = useState<string>("");
  const [openSnackbar, setOpenSnackbar] = useState<openSnackBarType>({ 
    open: false, 
    message: "", 
    error: false, 
    severity: 'success'
   });
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleVerifyOTP = async () => {
    try {
      const response: any = await apiOtpVerify({
        email: searchParams.get("email"),
        otp: value,
      });
      if (response.data.success) {
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('name', response.data.name);
        Cookies.set('auth_token', response.data.token)
        parent.window.opener.location = "/routes/dashboard";
        window.close();
      }
    } catch (error: string | any) {
      setOpenSnackbar({
        open: true,
        message: "Invalid OTP",
        error: false,
        severity: 'error'
      });
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 5,
          "& > :not(style)": {
            m: 1,
            width: 500,
            height: 230,
          },
        }}
      >
        <Paper elevation={5}>
          <div className="text-center font-semibold text-2xl pt-3">
            <h5>OTP Verification</h5>
          </div>
          <div className="flex justify-center pt-5 text-base w-auto px-20 pr-20">
            <MuiOtpInput
              value={value}
              onChange={handleChange}
              length={5}
              autoFocus
            />
          </div>
          <div className="text-center pt-10">
            {!result.isLoading ? <button
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleVerifyOTP}
            >
              Submit OTP
            </button>
            :
            <button
              className="bg-slate-400 text-white font-bold py-2 px-4 rounded"
              disabled
            >
              {<CircularProgress color="inherit" size={30}/>}
            </button>}
          </div>
        </Paper>
      </Box>
      <SnackBar setOpenSnackbar={setOpenSnackbar} isOpen={openSnackbar.open} message={openSnackbar.message} severity = {openSnackbar.severity}/>
    </div>
  );
};

export default OTP;
