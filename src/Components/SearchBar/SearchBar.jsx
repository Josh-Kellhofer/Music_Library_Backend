import React, { useState } from 'react';
import './SearchBar.css';
// import handleSubmit from 

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e){
    e.preventDefault()
    props.filterUsers(searchTerm)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' placeholder='Search'></input>
      <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;








// const getFilteredItems = (query, items) => {
//   if (!query) {
//     return items;
//   }
//   return items.filter(song => song.newEntry.includes(query))
// }

// export default function searchBar () {
//   const [query, setQuery] = useState("");

//   const {}

//   const filteredItems = getFilteredItems(query, items);

//   return (
//     <div className="searchBar">
//       <label>Search</label>
//       <input type="text" onChange={e => setQuery(e.target.value)} />
//       <ul>
//         {filteredItems.map(value => <h1 key={value.name}>{value.name}</h1>)}
//       </ul>
//     </div>
//   );
// }



