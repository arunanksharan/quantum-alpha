import React from "react"
import Search from "../search/Search"
import Link from "next/link"
import Image from "next/image"
import Pagination from "../pagination/Pagination"

const productHeaders = ["Name", "Created At", "Role", "Status"]
const productData = [
  {
    name: "HDFC Securities",
    createdAt: "2021-09-01",

    role: "Admin",
    status: "Active",
    id: 1,
    image: "/noavatar.png",
  },
  {
    name: "SBI MF",
    createdAt: "2021-09-01",
    role: "User",
    status: "Inactive",
    id: 2,
    image: "/noavatar.png",
  },
]

const Products = () => {
  return (
    <div className="users-container text-textSoft p-5 rounded-xl mt-5">
      <div className="top flex items-center justify-between">
        <Search placeholder="Search for a product" />
        <Link href="/dashboard/products/add">
          <button className="add-user p-3 bg-[#5d57c9] text-text border-0 rounded-md cursor-pointer">
            Add Product
          </button>
        </Link>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            {productHeaders.map((header, index) => (
              <td className="p-3" key={index}>
                {header}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <tr key={product.id}>
              <td className="p-3">
                <div className="tx-item flex items-center gap-3">
                  <Image
                    className="rounded-3xl object-cover"
                    src={product.image}
                    alt="profile-pic"
                    width={40}
                    height={40}
                  />
                  {product.name}
                </div>
              </td>
              <td className="p-3">{product.createdAt}</td>
              <td className="p-3">{product.role}</td>
              <td className="p-3">{product.status}</td>
              <td>
                <div className="buttons flex gap-3">
                  <Link href="">
                    <button className="bg-teal-600 px-3 py-1 rounded text-text border-none cursor-pointer">
                      View
                    </button>
                  </Link>

                  <Link href="">
                    <button className="bg-red-500 px-3 py-1 rounded text-text border-none cursor-pointer">
                      Delete
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default Products
