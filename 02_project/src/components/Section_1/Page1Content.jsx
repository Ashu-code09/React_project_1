import React from 'react'
import RightContent from "./RightContent"
import LeftContent from "./LeftContent"

const Page1Content = (props) => {
  return (
    <div className='flex items-center gap-10 h-[90vh] py-10 px-10 '>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content