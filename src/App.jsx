import React  from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import CreateArea from "./component/CreateArea";
// import notes from "./notes";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(note) {  
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id){
    setNotes((prevNotes)=>{
      return prevNotes.filter((noteItem,index)=>{
        return index!==id;
      });
    });

  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note key={index} id={index} heading={noteItem.title} description={noteItem.content} onDelete={deleteNote}/>
        );
      })}

      <Footer />
    </>
  );
}

export default App;
