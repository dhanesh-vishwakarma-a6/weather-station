import React from "react"
import Title from "./Title"
import SearchBox from "./SearchBar"

const Header = () => {
    return (
        <div id="header">
            <Title />
            <SearchBox />
        </div>
    )
}

export default Header