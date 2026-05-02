import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full overflow-auto no-scrollbar flex gap-10 w-2/3 p-6'>
        {props.users.map((el,idx) =>{
            return <RightCard key={idx} id={idx} user={el}/>
        })}
    </div>
  )
}

export default RightContent