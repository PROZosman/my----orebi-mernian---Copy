import React from "react";
import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className="search-container flex justify-center items-center">
      <input type="search" placeholder="search" className="lg:w-[300px] w-[200px] border-0 outline-0 lg:py-2 pl-5 pr-[42px]"/>
      <IoSearch className="lg:text-2xl translate-x-[-38px] fill-[#bfbfbf]" />
    </div>
  );
};

export default Search;
