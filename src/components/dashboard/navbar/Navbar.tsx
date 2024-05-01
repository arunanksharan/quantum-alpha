"use client"
import { usePathname } from "next/navigation"
import React from "react"
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className="navbar-container p-5 rounded-xl bg-[var(--bgSoft)] flex items-center justify-between">
      <div className="page-title text-textSoft font-bold capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="navbar-menu flex items-center gap-5">
        <div className="search flex items-center gap-3 bg-[#2e374a] p-3 rounded-xl">
          <MdSearch />
          <input
            className="px-1 bg-transparent border-0 text-text"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="icons flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
