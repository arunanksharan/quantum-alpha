import React from "react"
import { MdSearch } from "react-icons/md"

interface SearchPropsInterface {
  placeholder: string
}
const Search: React.FC<SearchPropsInterface> = ({
  placeholder,
}: SearchPropsInterface) => {
  return (
    <div className="search flex items-center gap-3 bg-[#2e374a] p-3 rounded-xl w-max">
      <MdSearch />
      <input
        className="px-1 bg-transparent border-0 text-text"
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}

export default Search
