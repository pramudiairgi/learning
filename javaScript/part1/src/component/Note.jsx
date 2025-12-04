import React from "react";

// Komponen Note kecil (jika ingin dipisah sesuai komentar di kode asli)
const Note = ({ note }) => {
  return <li>{note.content}</li>;
};

const Notes = () => {
  const notes = [
    { id: 1, content: "HTML is easy" },
    { id: 2, content: "Browser can execute only JavaScript" },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
    },
  ];

  /* memisahkan tampilan satu catatan menjadi komponen catatan tersendiri */
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default Notes;
