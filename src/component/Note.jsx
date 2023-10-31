import React from "react";

function Note(props){

    function handleClick(){
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}

export default Note;