import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import CreateArea from "./component/CreateArea";
// import notes from "./notes";

function App() {
  return (
    <>
      <Header />
      <CreateArea />
      {
      /* {notes.map((noteEntry) => (
        <Note
          key={noteEntry.key}
          heading={noteEntry.title}
          description={noteEntry.content}
        />
      ))} */
      }
      <Note key={1} title="Note title" content="Note content" />

      <Footer />
    </>
  );
}

export default App;
