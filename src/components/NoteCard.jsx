import React from 'react'

const NoteCard = ({text,id ,deleteNote }) => {

    const deleteCard = (e)=>{
        document.remove.e.target.value
    }

  return (
    <div className="
      h-60 w-80
      bg-yellow-100/90 backdrop-blur-sm
      rounded-2xl p-4
      shadow-md
      hover:shadow-lg
      transition-all
      hover:scale-[1.02]
    ">
      <p className="text-gray-800 text-base">
        {text}
      </p>
      <div className="flex justify-end mt-3 gap-3">
        <button className="text-red-500 hover:text-red-700 transition" onClick={()=> deleteNote(id)}>🗑</button>
      </div>
    </div>
  )
}

export default NoteCard
