import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {

    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);
    }

    function search() {
// API documentation: https://www.shecodes.io/learn/apis/dictionary

let apiKey = "b5a70e3dbaf3379o5576fffe161ca0t4";
let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event){
        event.preventDefault();
search();

    }

    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }

    function load(){
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section className="search">
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Search a word..." onChange={handleKeywordChange}/>
            </form>
            <div className="hint">
                e.g. sunset, yoga, appreciate, happy...
            </div>
            </section>
            <Results results={results}/>
            </div>
          
        )
    } else {
        load();
return "Loading..."
    }
   
   
}