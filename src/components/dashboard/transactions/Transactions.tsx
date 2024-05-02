import Image from "next/image"
import React from "react"

const tableHead = ["Name", "Status", "Date", "Amount"]
const txData = [
  {
    id: 1,
    name: "SBI Blue Chip MF",
    status: "Success",
    date: "12 Jan 2021",
    amount: "$1000",
    image: "/noavatar.png",
  },
  {
    id: 2,
    name: "Tata",
    status: "Pending",
    date: "13 Jan 2021",
    amount: "$2000",
    image: "/noavatar.png",
  },
  {
    id: 3,
    name: "Reliance Industries",
    status: "Success",
    date: "14 Jan 2021",
    amount: "$3000",
    image: "/noavatar.png",
  },
  {
    id: 4,
    name: "ICICI Lombard Health",
    status: "Failed",
    date: "15 Jan 2021",
    amount: "$4000",
    image: "/noavatar.png",
  },
  {
    id: 5,
    name: "HDFC Bank",
    status: "Success",
    date: "16 Jan 2021",
    amount: "$5000",
    image: "/noavatar.png",
  },
]

const statusColors: Record<string, string> = {
  Failed: "bg-failed-500",
  Success: "bg-success-500",
  Pending: "bg-pending-500",
}
const Transactions = () => {
  return (
    <div className="tx-container bg-bgSoft p-5 rounded-xl">
      <h2 className="title mb-5 font-extralight text-textSoft">
        Latest Transactions
      </h2>
      <table className="table w-full">
        <thead>
          <tr>
            {tableHead.map((item, index) => (
              <td className="p-3" key={index}>
                {item}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {txData.map((item) => (
            <tr key={item.id}>
              <td className="p-3">
                <div className="tx-item flex items-center gap-3">
                  <Image
                    className="rounded-3xl object-cover"
                    src={item.image}
                    alt="profile-pic"
                    width={40}
                    height={40}
                  />
                  <td>{item.name}</td>
                </div>
              </td>

              <td>
                <span
                  className={`${
                    statusColors[item.status]
                  } text-white text-sm p-2 rounded-md`}
                >
                  {item.status}
                </span>
              </td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
