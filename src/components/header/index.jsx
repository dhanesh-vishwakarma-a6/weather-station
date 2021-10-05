import React from "react"
import Title from "./Title"
import SearchBox from "./SearchBar"

const Header = ({ query, setQuery, search }) => {
    return (
        <div id="header">
            <Title />
            <SearchBox query={query} setQuery={setQuery} search={search} />
        </div>
    )
}

export default Header