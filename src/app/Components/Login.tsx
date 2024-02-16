"use client"
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Input as BaseInput, InputProps } from "@mui/base/Input";
import { styled } from "@mui/system";
import { useRouter } from "next/navigation";
import SnackBar from "./SnackBar";
import { useApiLoginMutation } from "../Store/apiMiddleware/loginAPI";
import { CircularProgress } from "@mui/material";

const Input = React.forwardRef(function CustomInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

interface openSnackBarType {
  open: boolean;
  message: string;
  error: boolean;
  severity: any;
}

const Login = () => {
  const [apiLogin, result] = useApiLoginMutation();
  const router = useRouter();
  const [getEmail, setEmail] = useState<string>("");
  const [openSnackbar, setOpenSnackbar] = useState<openSnackBarType>({ 
    open: false, 
    message: "", 
    error: false, 
    severity: 'success'
   });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handlegetOTP = async () => {
    if (getEmail.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      try {
        const response: any = await apiLogin({ email: getEmail });
        if (response.data.success) {
          setOpenSnackbar({
            open: true,
            message: "OTP send successfully",
            error: false,
            severity: 'success'
          });
          router.push(`/routes/otpverification?email=${getEmail}`);
        }
      } catch (error: any) {
        setOpenSnackbar({
          open: true,
          message: 'user not found, enter valid ID',
          error: false,
          severity: 'error'
        });
      }
    } else {
      setOpenSnackbar({ open: false, message: "please enter valid email", error: true, severity: 'error' });
    }
  };
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 5,
          "& > :not(style)": {
            m: 1,
            width: 500,
            height: 230,
          },
        }}
      >
        <Paper elevation={5} className="max-[800px]:w-3/4">
          <div className="text-center font-semibold text-2xl pt-3">
            <h5>Login</h5>
          </div>
          <div className="text-center pt-5 h-20 text-base">
            <Input
              aria-label="Demo input"
              placeholder="Enter Email ID"
              onChange={handleChange}
            />
            {openSnackbar.error && (
              <div className="pt-1 text-red-500">please enter valid email</div>
            )}
          </div>
          <div className="text-center pt-10">
            {!result.isLoading ? <button
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handlegetOTP}
            >
             OTP send
            </button>
            :
            <button className="bg-slate-400 text-white font-bold py-2 px-4 rounded"
              disabled >
             {<CircularProgress color="inherit" size={30}/>}
            </button>}
          </div>
        </Paper>
      </Box>
      <SnackBar setOpenSnackbar={setOpenSnackbar} isOpen={openSnackbar.open} message={openSnackbar.message} severity = {openSnackbar.severity}/>
    </>
  );
};

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const InputElement = styled("input")(
  ({ theme }) => `
width: 400px;
font-family: 'IBM Plex Sans', sans-serif;
font-size: 0.999rem;
font-weight: 400;
line-height: 1.8;
padding: 8px 12px;
border-radius: 8px;
color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
box-shadow: 0px 2px 2px ${theme.palette.mode === "dark" ? grey[900] : grey[50]};

&:hover {
    border-color: ${blue[400]};
}

&:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
}

&:focus-visible {
    outline: 0;
}
`
);

export default Login;
