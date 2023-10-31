import React from "react";

function Note(props){
    return (
        <div className="note">
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            <button>DELETE</button>
        </div>
    );
}

export default Note;