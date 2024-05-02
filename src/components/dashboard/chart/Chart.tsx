"use client"
import React from "react"
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Legend,
} from "recharts"

const data = [
  { name: "Mon", stock: 4000, mf: 2400 },
  { name: "Tue", stock: 3000, mf: 2500 },
  { name: "Wed", stock: 2000, mf: 1800 },
  { name: "Thu", stock: 2780, mf: 3400 },
  { name: "Fri", stock: 1890, mf: 2300 },
  { name: "Sat", stock: 2390, mf: 2800 },
  { name: "Sun", stock: 3490, mf: 1900 },
]

const Chart = () => {
  return (
    <div className="chart-container height-[450px] bg-bgSoft p-5 rounded-xl ">
      <h2 className="title font-extralight text-textSoft mb-5 ">
        Weekly Recap
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          //   margin={{
          //     top: 5,
          //     right: 30,
          //     left: 20,
          //     bottom: 5,
          //   }}
          className=" mt-2 mb-2 pr-5 py-5"
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="stock"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="mf"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
