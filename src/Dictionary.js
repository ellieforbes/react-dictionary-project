import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {

    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function handleImagesResponse(response) {
       
        setPhotos(response.data.photos);
    }

    function search() {
// API documentation: https://www.shecodes.io/learn/apis/dictionary

let apiKey = "b5a70e3dbaf3379o5576fffe161ca0t4";
let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);

let imagesApiKey = "b5a70e3dbaf3379o5576fffe161ca0t4";
let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
   axios.get(imagesApiUrl).then(handleImagesResponse);
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
                    <h1>What word do you want to look up?</h1>
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Search a word..." onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
            </form>
            <div className="hint">
                e.g. sunset, yoga, appreciate, happy...
            </div>
            </section>
            <Results results={results}/>
            <Photos photos={photos}/>
            </div>
          
        )
    } else {
        load();
return "Loading..."
    }
   
   
}