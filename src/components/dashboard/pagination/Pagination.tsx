import React from "react"

const Pagination = () => {
  return (
    <div className="pagination-container p-3 flex justify-between">
      <button
        className="px-3 rounded-lg text-sm cursor-pointer border-none disabled:cursor-not-allowed disabled:opacity-50 text-bg bg-textSoft"
        disabled
        // disabled={!hasPrev}
        // onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className="px-3 py-1 rounded-lg text-sm cursor-pointer border-none disabled:cursor-not-allowed disabled:opacity-50 text-bg bg-textSoft"
        // disabled={!hasNext}
        // onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
