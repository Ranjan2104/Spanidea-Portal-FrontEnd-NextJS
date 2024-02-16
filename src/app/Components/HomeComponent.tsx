"use client"
import React from "react";
import Button from "@mui/material/Button";

const HomeComponent = () => {
  function popupWindow() {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const windowWidth = 550;
    const windowHeight = 550;
    const left = (screenWidth - windowWidth) / 2;
    const top = (screenHeight - windowHeight) / 2;
    window.open(
      `/routes/login`,
      "popupWindow",
      `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`
    )
  }

  const handleOpen = () => {
    popupWindow();
  };

  return (
    <section className="flex">
      <div className="w-3/5 bg-slate-600">
        <img src={"https://spanidea.com/wp-content/uploads/2023/06/what-we-do-2.webp"} className="object-cover h-[90.8vh]"/>
      </div>
      <div className="w-2/4 text-center grid place-content-center bg-slate-300">
        <h1 className="text-3xl font-semibold text-slate-500">
          Click Button for Login
        </h1>
        <div className="pt-10">
          <Button
            variant="contained"
            className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded w-80 h-11"
            onClick={handleOpen}
          >
            Go For Login Page
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
