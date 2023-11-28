import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props){
    
    return (
    <div className="Meaning">
    <h4>{props.meaning.partOfSpeech}</h4>
    <p>
       <strong>Definition: 
        </strong> {props.meaning.definition}
        <br />
    <em>{props.meaning.example}</em>
    <br />
    <Synonyms synonyms={props.meaning.synonyms}/>
    </p>
   
    </div>
    )
}