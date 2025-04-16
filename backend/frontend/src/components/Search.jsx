import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="px-6 py-4">
      <form action="">
        <div className="flex space-x-3">
        <label class="input">
          <input type="search" class="grow" placeholder="Search" />
        </label>
        <button>
            <FaSearch className="text-4xl p-2 hover:bg-gray-400 rounded-full duration-400" />
        </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
