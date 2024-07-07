import React from 'react'
import book from "./assets/image/premium_photo-1677187301535-b46cec7b2cc8.avif"
import student from "./assets/image/student-male-9DUTMHP8BQ.svg"
import card from "./assets/image/Transition.svg"

const Student = () => {
  return (
    <div>
        {/* Hedding Div */}
      <div className='h-auto w-100 flex flex-wrap flex-col item-center p-10 text-center'>
        <div className='h-auto w-full flex flex-wrap flex-col items-center text-center'>
            <h1 className='text-indigo-700 font-extrabold text-2xl md:text-4xl uppercase'>"Pure Hardwork,No Shortcut!"</h1>
            <div className='h-1 w-36 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12 '></div>
        </div>
        {/* Hedding Div End */}

        {/* Statics Content */}
        <div className='w-full h-auto flex flex-wrap justify-evenly'>
            <div className='w-46 flex flex-col items-center mb-12'>
                <img src={book} alt="" className='w-44 h-44 rounded-full' />
                <p className='text-3xl font-bold text-white mt-3'>600+</p>
                <p className='text-3xl font-bold text-gray-500'>Different Courses</p>
            </div>
            
            <div className='w-46 flex flex-col items-center mb-12'>
                <img src={student} alt="" className='w-44 h-44 rounded-full' />
                <p className='text-3xl font-bold text-white mt-3'>700,000+</p>
                <p className='text-3xl font-bold text-gray-500'>Students Enrolled</p>
            </div>

            <div className='w-46 flex flex-col items-center mb-12'>
                <img src={card} alt="" className='w-44 h-44 rounded-full' />
                <p className='text-3xl font-bold text-white mt-3'>10000+</p>
                <p className='text-3xl font-bold text-gray-500'>Transitions</p>
            </div>
        </div>
        {/* Statics Content Ended*/}

      </div>
    </div>
  )
}

export default Student
