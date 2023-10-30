function Note(props){
    return (
        <div className="note">
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Note;