"use client";


import Stats from "./Stats";
import RecentOrders from "./RecentOrders";
import UserInformation from "./UserInformation";
import Addresses from "./Addresses";


export default function UserDashboard() {
  return (
    <div className="space-y-6">
      <Stats />

      <RecentOrders />
      

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <UserInformation />

        <Addresses />        
      </section>
    </div>
  );
}