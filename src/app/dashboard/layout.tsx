import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Sidebar from "@/components/dashboard/sidebar/Sidebar"
import Navbar from "@/components/dashboard/navbar/Navbar"

export const metadata: Metadata = {
  title: "Dashboard for all your financial information",
  description: "One stop shop for all your financial information.",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="dashboard-container flex">
      <div className="menu basis-1/5 bg-[var(--bgSoft)] p-5 min-h-screen">
        <Sidebar></Sidebar>
      </div>
      <div className="content basis-4/5 p-5">
        <Navbar></Navbar>
        {children}
      </div>
    </div>
  )
}
