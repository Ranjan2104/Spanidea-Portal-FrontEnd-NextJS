"use client"
import { Box, Paper } from "@mui/material";
import React from "react";

interface DashboardCardProps {
  src: string;
  title: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ src, title }) => {
  
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          cursor: "pointer",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 280,
            height: 280,
          },
        }}
      >
        <Paper elevation={10}>
          <div>
            <img 
                src={src} 
                alt={title}
                className="h-56 object-cover"
            />
          </div>
          <div className="text-center pt-3 font-semibold text-base">
            <h2>{ title }</h2>
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default DashboardCard;
