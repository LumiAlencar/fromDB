import React from "react";
import { useState } from "react";

const SearchID = () => {
    const [ searchOutputID, setSearchOutputID ] = useState({})

    return (
        <>
        <h2>Search user by ID:</h2>
        <input type="number" name="ID Input" id="2" placeholder="0" />
        <button onClick={() => {
            let search = document.getElementById("2").value
            fetch(`http://localhost:3000/clients/${search}`).then(result => result.json()).then(json => {setSearchOutputID(json)})
        }}>Search</button>
        <div className="output">
            <p>ID: {searchOutputID.id}</p>
            <p>Name: {searchOutputID.name}</p>
            <p>Username: {searchOutputID.username}</p>
        </div>
        </>
    )
}

export default SearchID