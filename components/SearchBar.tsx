"use client";

import { SearchManufacturer } from ".";
import { useState } from "react";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = (): void => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    </form>
  );
};

export default SearchBar;
