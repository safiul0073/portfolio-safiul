import React from "react";
import Sidebar from "../../../components/dashboard/Sideber";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}){
  return (
    <div className="flex min-h-screen gap-2 bg-white text-neutral-900 [color-scheme:light]">
      <Sidebar />
      <div className="w-full shadow-lg rounded-lg p-4 flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
};
