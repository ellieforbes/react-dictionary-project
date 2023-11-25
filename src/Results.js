import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
    console.log(props.results);
    if (props.results) {
    return (
        <div className="Results">
            <h2>{props.results.word}</h2>
            <Phonetics phonetics={props.results.phonetic}/>
            {props.results.meanings.map(function (meaning, index) {
                return (
                <div key={index}>
                    <Meaning meaning={meaning}/>
                </div>
                )
            })}
        </div>
    )
} else {
    return null;
}
}