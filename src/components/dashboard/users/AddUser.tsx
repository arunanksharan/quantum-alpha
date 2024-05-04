import React from "react"

const AddUser = () => {
  return (
    <div className="add-product-container bg-bgSoft p-5 rounded-xl mt-5">
      <form className="add-form flex flex-wrap justify-between" action="">
        <input
          className="p-8 w-5/12 bg-bg text-text mb-8  border-[#2e374a] border-2 rounded-xl"
          type="text"
          placeholder="name"
          name="name"
          required
        />
        <select
          className="p-8 w-5/12 bg-bg text-text mb-8 border-[#2e374a] border-2 rounded-xl"
          name="category"
          id="category"
          required
        >
          <option value="general">Choose a Role</option>
          <option value="Mutual Fund">Admin</option>
          <option value="Mutual Fund">User</option>
          <option value="Mutual Fund">Agent</option>
          <option value="Mutual Fund">Advisor</option>
        </select>
        <input
          className="p-8 w-5/12 bg-bg text-text mb-8 border-[#2e374a] border-2 rounded-xl"
          type="email"
          placeholder="email"
          name="email"
        />
        <select
          className="p-8 w-5/12 bg-bg text-text mb-8 border-[#2e374a] border-2 rounded-xl"
          name="category"
          id="category"
          required
        >
          <option value="general">Choose Status</option>
          <option value="Mutual Fund">Active</option>
          <option value="Mutual Fund">Inactive</option>
          <option value="Mutual Fund">Unverified</option>
          <option value="Mutual Fund">Verified</option>
        </select>
        <textarea
          name="description"
          id="description"
          cols={30}
          rows={16}
          placeholder="description"
          className="p-8 bg-bg text-text mb-8 border-[#2e374a] border-2 w-full rounded-xl"
        ></textarea>
        <button
          className="btn w-1/4 p-8 bg-teal-600 text-text border-0 rounded-lg cursor-pointer"
          type="submit"
        >
          Add User
        </button>
      </form>
    </div>
  )
}

export default AddUser
