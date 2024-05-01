import React from "react"

interface CardProps {
  text: string
  amount: string
  Icon: React.ElementType
  changeLast7Days: string
  isPositive: boolean
}

const Card: React.FC<CardProps> = ({
  text,
  Icon,
  amount,
  changeLast7Days,
  isPositive,
}: CardProps) => {
  return (
    <div className="card-container bg-bgSoft hover:bg-[#2e374a] p-5 rounded-xl gap-5 flex cursor-pointer w-full">
      <Icon size={28} className="bg-red-300" />
      <div className="card-text flex flex-col gap-5">
        <span className="title">{text}</span>
        <span className="amount text-2xl font-medium">{amount}</span>
        <span className="title text-sm font-light">
          <span className={`${isPositive ? "text-green-500" : "text-red-500"}`}>
            {changeLast7Days}
          </span>{" "}
          (Last 7 days)
        </span>
      </div>
    </div>
  )
}

export default Card
