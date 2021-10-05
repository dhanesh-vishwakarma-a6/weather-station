import React from "react"

const SearchBox = () => {
    return (
        <form onSubmit="">
            <input type="text" name="search-bar" className="search-bar" placeholder="Enter city" />
            <button type="submit" className="search-btn">Search</button>
        </form>
    )
}

export default SearchBox