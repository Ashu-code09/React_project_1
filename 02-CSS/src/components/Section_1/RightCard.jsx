import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    console.log(props.user)
  return (
    <div className='h-full w-80 rounded-4xl shrink-0 overflow-hidden relative'>
        <img className="h-full w-full object-cover" src={props.user.img} alt="" />
        <RightCardContent user={props.user} id={props.id}/>
    </div>
  )
}

export default RightCard