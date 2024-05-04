import Image from "next/image"
import React from "react"

const css_input_textarea_select =
  "p-5 border-2 border-[#2e374a] rounded-xl bg-bg text-text my-3"
const css_label = "text-md"
const ProductDetail = () => {
  return (
    <div className="user-detail-container flex mt-5 gap-12">
      <div className="info-container basis-1/4 bg-bgSoft p-5 rounded-xl font-bold text-textSoft h-max">
        <div className="image-container w-full h-[300] relative rounded-xl overflow-hidden mb-5">
          <Image src="/noavatar.png" alt="user" width={400} height={400} />
        </div>
        Product Doe
      </div>
      <div className="form-container basis-3/4 bg-bgSoft p-5 rounded-xl">
        <form className="form flex flex-col">
          <input
            type="hidden"
            className={css_input_textarea_select}
            name="id"
            value="123"
          />
          <label className={css_label}>Product Name</label>
          <input
            type="text"
            name="product_name"
            placeholder="Product Doe"
            className={css_input_textarea_select}
          />
          <label className={css_label}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            className={css_input_textarea_select}
          />
          <label className={css_label}>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className={css_input_textarea_select}
          />
          <label className={css_label}>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="+012345"
            className={css_input_textarea_select}
          />
          <label className={css_label}>Address</label>
          <textarea
            name="address"
            placeholder="address"
            className={css_input_textarea_select}
          />
          <label className={css_label}>Is Admin</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className={css_input_textarea_select}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label className={css_label}>Is Active</label>
          <select
            name="isActive"
            id="isActive"
            className={css_input_textarea_select}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <div className="w-full flex justify-center items-center mb-5">
            <button className="w-1/2 bg-teal-600 p-5 rounded-lg cursor-pointer mt-5 text-text border-0">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductDetail
