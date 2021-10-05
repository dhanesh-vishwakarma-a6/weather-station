import React from "react"

const SearchBox = ({ query, setQuery, search }) => {
    // handle search bar change
    const handleChange = (event) => {
        event.preventDefault()
        setQuery(event.target.value)
    }

    // handle form submit
    const handleSubmit = (event) => {
        event.preventDefault()
        search()
    }

    return (
        // form
        <form onSubmit={handleSubmit}>
            {/* input field */}
            <input
                type="text"
                name="search-bar"
                placeholder="Enter city"
                className="search-bar"
                onChange={handleChange}
                value={query}
            />
            {/* submit button */}
            <button
                type="submit"
                className="search-btn"
            >
                Search
            </button>
        </form>
    )
}

export default SearchBox