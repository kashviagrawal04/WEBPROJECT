import React from 'react'

export const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className="search">
        <div>
            <img src="search.svg" alt="search"/>
            <input type="text" placeholder="Search movies &#127871;" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}></input>
        </div>
    </div>
  )
}
export default Search