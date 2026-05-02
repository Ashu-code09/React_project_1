import React from 'react'

const RightCardContent = (props) => {
    return (
        <div>
            <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
                <h2 className='bg-white text-lg font-semibold rounded-full h-10  w-10 flex justify-center items-center'>
                    {props.id + 1}
                </h2>
                <div>
                    <p className='text-lg leading-relaxed text-white mb-14'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente voluptatibus totam ipsa, quo tempora adipisci.
                    </p>
                    <div className='flex justify-between'>
                        <button style={{backgroundColor:props.user.color}} className=' hover:bg-blue-900 transition ease-in-out duration-300 text-white font-medium px-8 py-2 rounded-full'>{props.user.tag}</button>
                        <button className=' text-white font-medium px-8 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent