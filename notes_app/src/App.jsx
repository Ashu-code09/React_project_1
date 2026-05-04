import React, { useState } from 'react'

const App = () => {

  const [allNotes, setAllNotes] = useState([]);
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const submitHandler = (e)=>{
    e.preventDefault();
    const newNote = {title,desc}
    setAllNotes((prev) =>([...prev,newNote]));
    setTitle("");
    setDesc("");
  }

  const deleteNote = (idx) => {
    const sampleNotes = [...allNotes];
    sampleNotes.splice(idx,1);
    setAllNotes(sampleNotes);
  }


  return (
    <div  className=' h-screen lg:flex bg-[#111] gap-2 text-white px-8 '>
      <div className='lg:w-1/2 py-10 lg:border-r lg:border-white p-5'>
      <h1 
      className='text-3xl font-bold mb-5 text-center'>
        Notes Making App
      </h1>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}
      className='flex flex-col gap-5  p-3 bg-[#222]'
      >
        <input onChange={(e) => {
          setTitle(e.target.value)
        }}
        className="border px-5 py-2 rounded outline-none font-bold" 
        type="text" 
        placeholder='Enter notes title'
        value={title}
        />
        <textarea 
        onChange={(e) => {
          setDesc(e.target.value)
        }}
        className="border px-5 py-2 h-32 outline-none rounded font-semibold" 
        name="" 
        id=""
        placeholder='Write notes'
        value={desc}>
        </textarea>
        <button 
        className="border text-2xl px-5 py-2 cursor-pointer bg-white active:scale-95 text-black rounded" >
          Submit
        </button>
      </form>
      </div>
      <div className='lg:w-1/2 py-10 px-8 h-full overflow-hidden flex flex-col'>
        <h1 className='text-4xl mb-4 text-center'>Your notes</h1>
        <div className=' flex flex-wrap items-start gap-3 overflow-auto flex-1 justify-evenly scroll_container'>
        {allNotes.map((note,index) => (

        <div key={index} className="h-52 bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] relative justify-between w-40 pt-8 pb-3 flex flex-col rounded-2xl text-black px-5">

          <div className='flex flex-col flex-1 overflow-hidden'>
            
            <h2 className="leading-tight text-center font-bold text-lg">{note.title}</h2>
            <p className="font-medium flex-1 text-sm overflow-auto scroll_container mt-2 text-gray-500 ">{note.desc}</p>

          </div>

          <button onClick={() => {
            deleteNote(index);
          }} className='w-full cursor-pointer bg-red-600 active:scale-95 text-white text-xs py-1 px-5 rounded-full font-bold'>
            Delete
          </button>
          
        </div>

            )
          )
        }
        </div>
      </div>
    </div>
  )
}

export default App