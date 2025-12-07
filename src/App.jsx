import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import NoteInput from './components/NoteInput.jsx'
import NoteCard from './components/NoteCard.jsx'

function App() {
  const [text, setText] = useState("")
  const [notes, setNotes] = useState([])


  useEffect(() => {
    const savedNotes = localStorage.getItem("notes")
    if(savedNotes){
      setNotes(JSON.parse(savedNotes))
    }

  }, [])
  


  const addNote = () => {
    if (!text.trim()) return

    const newNote = { id: Date.now(), text: text.trim() }
    const updatedNotes = [newNote, ...notes]
    setNotes(updatedNotes)

    localStorage.setItem("notes", JSON.stringify(updatedNotes))

    setText("")
  }

  const deleteNote = (id)=>{
    const updatedNotes = notes.filter((note)=> note.id !== id)
    setNotes(updatedNotes)

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    
  }

    return (
      <>
        <Navbar />
        <NoteInput text={text} setText={setText} addNote={addNote} />
        <div className="max-w-5xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard key={note.id} text={note.text} id={note.id} deleteNote={deleteNote} />
          ))}

        </div>

      </>
    )
  }

  export default App
