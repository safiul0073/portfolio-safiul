import React from "react";
import dynamic from 'next/dynamic'
import { PageHeader } from "@/components/dashboard/PageHeader";
export default function page() {
  
  return (
    <>
      <PageHeader title="Dashboard" />
      <h3>Dashboard</h3>
    </>
  );
}
