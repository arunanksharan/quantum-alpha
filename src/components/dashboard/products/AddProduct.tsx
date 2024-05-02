import React from "react"

const AddProduct = () => {
  return (
    <div className="add-product-container bg-bgSoft p-5 rounded-xl mt-5">
      <form className="add-form flex flex-wrap justify-between" action="">
        <input
          className="p-8 w-5/12 bg-transparent text-text mb-8  border-[#2e374a] border-2 rounded-xl"
          type="text"
          placeholder="title"
          name="title"
          required
        />
        <select
          className="p-8 w-5/12 bg-transparent text-text mb-8 border-[#2e374a] border-2 rounded-xl"
          name="category"
          id="category"
          required
        >
          <option value="general">Choose a Category</option>
          <option value="Mutual Fund">Mutual Fund</option>
          <option value="Mutual Fund">Stocks</option>
          <option value="Mutual Fund">Insurance</option>
          <option value="Mutual Fund">F&O</option>
        </select>
        <input
          className="p-8 w-5/12 bg-transparent text-text mb-8 border-[#2e374a] border-2 rounded-xl"
          type="number"
          placeholder="price"
          name="price"
        />
        <input
          className="p-8 w-5/12 bg-transparent text-text mb-8 border-[#2e374a] border-2 rounded-xl"
          type="number"
          placeholder="quantity"
          name="quantity"
        />
        <input
          className="p-8 w-5/12 bg-transparent text-text mb-8 border-[#2e374a] border-2 rounded-xl"
          type="text"
          placeholder="advisor"
          name="advisor"
        />
        <textarea
          name="description"
          id="description"
          cols={30}
          rows={16}
          placeholder="description"
          className="p-8 bg-transparent text-text mb-8 border-[#2e374a] border-2 w-full rounded-xl"
        ></textarea>
        <button
          className="btn w-1/4 p-8 bg-teal-600 text-text border-0 rounded-lg cursor-pointer"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct
