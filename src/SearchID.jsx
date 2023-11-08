import React from "react";
import { useState } from "react";

const SearchID = () => {
    const [ searchOutput, setSearchOutput ] = useState({})

    return (
        <>
        <h2>Search user by ID:</h2>
        <input type="number" name="ID Input" id="1" placeholder="0" />
        <button onClick={() => {
            let search = document.getElementById("1").value
            fetch(`http://localhost:3000/clients/${search}`).then(result => result.json()).then(json => {setSearchOutput(json)})
        }}>Search</button>
        <div className="output">
            <p>ID: {searchOutput.id}</p>
            <p>Name: {searchOutput.name}</p>
            <p>Username: {searchOutput.username}</p>
        </div>
        </>
    )
}

export default SearchID