"use client";
import React from "react";
import DashboardCard from "../Components/DashboardCard";
import meetingRoom from "../../../public/meetingRoom.jpg";
import HRMS from "../../../public/HRMS.png";
import examPortal from "../../../public/examPortal.png";
import Link from "next/link";

const Dashboard = () => {
  return (
    <main>
      <div className="grid grid-cols-3 px-72 mt-28">
        <Link href="/routes/dashboard/meetingroom">
          <DashboardCard src={meetingRoom.src} title={"Meeting Room"} />
        </Link>

        <Link href="/routes/dashboard/hrmsportal">
          <DashboardCard src={HRMS.src} title={"HRMS Portal"} />
        </Link>

        <Link href="/routes/dashboard/examportal">
          <DashboardCard src={examPortal.src} title={"Exam Portal"} />
        </Link>
      </div>
    </main>
  );
};

export default Dashboard;
