import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import notes from "./notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((noteEntry) => (
        <Note
          key={noteEntry.key}
          heading={noteEntry.title}
          description={noteEntry.content}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
