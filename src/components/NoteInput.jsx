import React from 'react'

const NoteInput = ({ text, setText, addNote }) => {
    return (
        <div className="max-w-2xl mx-auto mt-8 px-3">
            <div className="flex gap-3">

                <textarea
                    className=" w-full h-28 px-4 py-3  bg-white/80 backdrop-blur rounded-2xl border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md resize-none" 
                    placeholder="Write your note..." 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}>
                </textarea>

                <button
                    className="bg-blue-600 text-white px-5 py-3 rounded-2xl shadow-md  hover:bg-blue-500 active:scale-95 transition-all" 
                    onClick={addNote}>
                    Add
                </button>

            </div>
        </div>
    )
}

export default NoteInput
