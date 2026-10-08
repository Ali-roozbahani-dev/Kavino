"use client";

import Stats from "./Stats";
import RecentOrders from "./RecentOrders";
import { UserInformation } from "../../../Features/User_Profile";


export default function UserDashboard() {
  

  return (
    <div className="space-y-6">
      <Stats />

      <RecentOrders />     

      <UserInformation />
    </div>
  );
}