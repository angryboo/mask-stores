import React from 'react';
import './Main.css';

function Search() {
  return (
    <div className="Search">
      <input
        name="localsearch"
        placeholder="지역검색"
        // onChange={onChange}
        // value={LocalSearch}
      />
      <button type="submit">검색</button>
    </div>
  );
}

export default Search;
