import React from 'react'
import Section1 from './components/Section_1/Section1'
import Section2 from './components/Section_2/Section2'

const App = () => {

  const users = [{
    img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:" ",
    tag:"Satisfied",
    color:"red"
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:" ",
    tag:"Underserved",
    color:"orange"
  },
  {
    img:"https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:" ",
    tag:"Underbanked",
    color:"green"
  },
  {
    img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:" ",
    tag:"Underworked",
    color:"black"
  }]

  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
    
  )
}

export default App