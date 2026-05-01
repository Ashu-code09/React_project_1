import React from 'react'

import Card from './Components/Card'
import jobOpenings from './utils/JobData'


const App = () => {
return (
  <div className="parent">
    {jobOpenings.map((el,idx) => {
      return <div key={idx}><Card company={el} /></div> 
    })}
  </div>
)
}

export default App