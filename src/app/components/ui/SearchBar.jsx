"use client";
import react, { useState, useEffect } from "react";
import { X, Search } from "lucide-react";
import ProductCard from "./ProductCard";

const SearchBar = ({ products }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredProducts);
  }, [searchText]);

  return (
    <div className=" flex md:inline-flex w-full max-w-3xl relative ml-4 mr-4 ">
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
      {/* Search product will go here */}
      {searchText && (
        <div className="absolute left-0 top-20 w-full mx-auto max-h-[500px] px-10 py-5 bg-white z-20 overflow-y-scroll text-black shadow-lg shadow-skyText scrollbar-hide">
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {searchResults?.map((item) => (
                <ProductCard
                  key={item?._id}
                  item={item}
                  setSearchText={setSearchText}
                />
              ))}
            </div>
          ) : (
            <div className="py-10 bg-gray-50 w-full flex items-center justify-center border border-gray-600 rounded-md">
              <p className="text-xl font-normal">
                Nothing matches with your search keywords{" "}
                <span className="underline underline-offset-2 decoration-[1px] text-red-500 font-semibold">{`(${searchText})`}</span>
              </p>
              . Please try again
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
