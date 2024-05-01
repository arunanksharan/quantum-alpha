import Card from "@/components/dashboard/card/Card"
import Chart from "@/components/dashboard/chart/Chart"
import Rightbar from "@/components/dashboard/rightbar/Rightbar"
import Transactions from "@/components/dashboard/transactions/Transactions"
import React from "react"
import { AiOutlineStock } from "react-icons/ai"
import { RiRefund2Fill } from "react-icons/ri"
import { LuShieldCheck } from "react-icons/lu"

const cardItems = [
  {
    text: "Mutual Funds",
    id: 1,
    Icon: RiRefund2Fill,
    amount: "$ 1123679",
    changeLast7Days: "12%",
    isPositive: true,
  },
  {
    text: "Stocks",
    id: 2,
    Icon: AiOutlineStock,
    amount: "$ 67965",
    changeLast7Days: "23%",
    isPositive: true,
  },
  {
    text: "Insurance",
    id: 3,
    Icon: LuShieldCheck,
    amount: "$ 2594",
    changeLast7Days: "1%",
    isPositive: false,
  },
]

const DashboardPage = () => {
  return (
    <div className="dashboard-wrapper flex gap-5 mt-5">
      <div className="dashboard-main flex flex-col gap-5 basis-3/4">
        <div className="cards flex gap-5 justify-between">
          {cardItems.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="dashboard-sidebar basis-1/4 bg-blue-200">
        <Rightbar />
      </div>
    </div>
  )
}

export default DashboardPage
