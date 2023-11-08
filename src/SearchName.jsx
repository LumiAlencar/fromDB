import React from "react";
import { useState } from "react";

const SearchName = () => {
    const [ searchOutput, setSearchOutput ] = useState({})

    return (
        <>
        <h2>Search user by Name:</h2>
        <input type="text" name="Name Input" id="1" placeholder="Victor Schiavon" />
        <button onClick={() => {
            let search = document.getElementById("1").value
            fetch(`http://localhost:3000/clients?name=${search}`).then(result => result.json()).then(json => {console.log(json); setSearchOutput(json)})
        }}>Search</button>
        <div className="output">
            <p>ID: {searchOutput.id}</p>
            <p>Name: {searchOutput.name}</p>
            <p>Username: {searchOutput.username}</p>
        </div>
        </>
    )
}

export default SearchName