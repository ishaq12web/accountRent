import React, { useState } from "react";

function SearchBar({ items }) {
  const [searchQuery, setSearchQuery] = useState("");


  return (
     <div className="search-container">
     <input
         type="text"
         placeholder="Search items..."
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
     />
 </div>
  );
}

export default SearchBar;
