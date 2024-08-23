"use client";
import react, { useState } from "react";
import { X, Search } from "lucide-react";

const SearchBar = ({ products }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className=" flex items-center md:inline-flex max-w-3xl w-3/5 relative ml-4 mr-4 ">
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        placeholder="Search for products..."
        className="w-2/6 flex-1 rounded-xl  text-gray-900 text-lg placeholder:text-base placeholder:tracking-normal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-10 py-2"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        {searchText ? (
          <X
            onClick={() => setSearchText("")}
            className="text-md hover:text-red-500 cursor-pointer duration-200"
          />
        ) : (
          <Search className="text-md" />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
