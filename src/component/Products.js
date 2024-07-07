import React from 'react'
import student from "./assets/image/student-male-9DUTMHP8BQ.svg"
import skill from "./assets/image/Skills.svg"
import job from "./assets/image/Job.svg"
import code from "./assets/image/Coding.svg"
import hackathon from "./assets/image/Hackathon.svg"

const Products = () => {
  return (
    <div>
    <div className='h-auto w-full flex flex-wrap flex-col items-center text-center'>
        <h1 className='text-indigo-700 font-extrabold text-2xl md:text-4xl uppercase'>"OUR Products"</h1>
        <div className='h-1 w-36 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12 '></div>
    </div>
        <div className='w-full h-auto flex flex-wrap justify-around'>
            <div className='w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-4'>
                <img src={skill} alt="" className='w-44 h-44 rounded-full' />
                <p className='text-3xl font-bold text-white my-1'>Skill Gain</p>
                <p className='text-3xl font-bold text-gray-500 text-center'>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-4'>
                <img src={job} alt="" className='w-44 h-44 rounded-full' />
                <p className='text-3xl font-bold text-white my-1'>Job Portal</p>
                <p className='text-3xl font-bold text-gray-500 text-center'>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-4'>
                <img src={code} alt="" className='w-44 h-44 rounded-full' />
                <p className='text-3xl font-bold text-white text-center my-1'>Coding Blogs</p>
                <p className='text-3xl font-bold text-gray-500 text-center'>Lorem ipsum dolor sit amet.</p>
            </div>
            
            <div className='w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-4'>
                <img src={student} alt="" className='w-44 h-44 rounded-full' />
                <p className='text-3xl font-bold text-white my-1'>Placement</p>
                <p className='text-3xl font-bold text-gray-500 text-center'>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-4'>
                <img src={hackathon} alt="" className='w-44 h-44 rounded-full' />
                <p className='text-3xl font-bold text-white my-1'>Hackethons</p>
                <p className='text-3xl font-bold text-gray-500 text-center'>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
  )
}

export default Products
