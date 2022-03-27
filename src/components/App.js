import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
function createNote(notes) {
  return <Note key={notes.id} heading={notes.title} subtitle={notes.content} />;
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Note />
      <Footer />
    </div>
  );
}

export default App;
