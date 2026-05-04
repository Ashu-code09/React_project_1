import React from 'react'
import { useState } from 'react'



const App = () => {
  const [num, setNum] = useState(0);

  function increaseNum(){
    setNum(num+1);
  }

  function decreaseNum(){
    setNum(num-1);
  }
  function resetNum(){
    setNum(0);
    console.log("Decreasing!");
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum} className="btn">Increase</button>
      <button onClick={decreaseNum} className="btn">Decrease</button>
      <button onClick={resetNum} className="btn">Reset</button>
    </div>
  )
}

export default App