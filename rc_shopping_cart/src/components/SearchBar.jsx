import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

function SearchBar({
  elements,
  setFilteredElements,
  searchKeys,
  placeholder = "Search Store",
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

    const filtered = elements.filter((element) =>
      searchKeys.some((key) => {
        const value = element[key];
        if (typeof value === "number") {
          return value.toString().includes(newSearchTerm);
        } else if (typeof value === "string") {
          return value.toLowerCase().includes(newSearchTerm);
        }
        return false;
      })
    );
    setFilteredElements(filtered);
  };

  return (
    <div className="flex rounded-lg p-2 text-zinc-400 bg-gray-800/50 items-center w-[400px]">
      <CiSearch className="mr-4 h-6 w-6" />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent p-2 w-full"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
