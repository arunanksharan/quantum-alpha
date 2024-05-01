"use client"
import React from "react"
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md"

import MenuLink from "./menuLink/MenuLink"
import Image from "next/image"

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: MdDashboard,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: MdSupervisedUserCircle,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: MdShoppingBag,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: MdAttachMoney,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: MdWork,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: MdAnalytics,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: MdPeople,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: MdOutlineSettings,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: MdHelpCenter,
      },
    ],
  },
]

const Sidebar: React.FC = () => {
  return (
    <div className="menu-items-container sticky top-10">
      <div className="user flex items-center gap-5 mb-5">
        <Image
          className="user-avatar rounded-3xl object-cover"
          src="/noavatar.png"
          alt="user-profile-picture"
          width={50}
          height={50}
        />
        <div className="user-detail flex flex-col">
          <span className="name font-medium">John Doe</span>
          <span className="title text-xs text-textSoft">Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat, index) => (
          <li key={index}>
            <span className="title text-textSoft font-bold text-base">
              {cat.title}
            </span>
            {cat.list.map((item, index) => (
              <MenuLink
                key={index}
                Icon={item.icon}
                title={item.title}
                path={item.path}
              />
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
