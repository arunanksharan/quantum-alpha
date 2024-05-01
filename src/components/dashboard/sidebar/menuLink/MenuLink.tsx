"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { use } from "react"
import { IconType } from "react-icons"

interface MenuLinkProps {
  Icon: React.ElementType // This accepts a component
  title: string
  path: string
}

const MenuLink: React.FC<MenuLinkProps> = ({
  Icon,
  title,
  path,
}: MenuLinkProps) => {
  const pathname = usePathname()
  //   console.log(pathname)
  return (
    <Link
      className={`menuitem ${
        pathname === path ? "bg-[#2e374a]" : ""
      } flex items-center text-sm p-4 gap-3 hover:bg-[#2e374a] rounded-lg m-2`}
      href={path}
    >
      <Icon size={28} className="mr-4" />
      {title}
    </Link>
  )
}

export default MenuLink
