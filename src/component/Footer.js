import React from 'react'
import appcode from "./assets/image/eye-code_render_.png"

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-gray-600 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-around">
        <div className='flex flex-col bg-bl'>
            <img className="w-40 h-40 rounded-full" src={appcode} alt="" />
            <p className='my-4 font-bold'>Email Us: support@codingmaster.com</p>
        </div>

        <div>
            <div className='h-auto w-full flex flex-wrap flex-col items-center text-center'>
                <h1 className='text-xl font-bold'>Coding Master Skill</h1>
                <div className='h-1 w-36 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-3 '></div>
            </div>
            <div className='mb-12 text-center '>
                <p>About Us</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
            </div>
        </div>

        <div>
            <div className='h-auto w-full flex flex-wrap flex-col items-center text-center'>
                <h1 className='text-xl font-bold'>Products</h1>
                <div className='h-1 w-36 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-4 '></div>
            </div>
            <div className='mb-12 text-center '>
                <p>Coding Master Skill</p>
                <p>Job Portal</p>
                <p>Experience portal</p>
                <p>Become an affilite</p>
                <p>Hall of fame</p>
            </div>
        </div>
        
        <div>
            <div className='h-auto w-full flex flex-wrap flex-col items-center text-center'>
                <h1 className='text-xl font-bold'>Links</h1>
                <div className='h-1 w-36 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-4 '></div>
            </div>
            <div className='mb-12 text-center '>
                <p>Discord Channel</p>
                <p>CM Youtube</p>
                <p>carrers</p>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
