import React from 'react'

const Home = (props) => {
  return (
    <>
      <div className="w-full h-full">
        <img className='w-full hidden md:block md:max-h-[39.9rem] object-cover' src="https://images.unsplash.com/photo-1605514449459-5a9cfa0b9955?q=80&w=1818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="" />
        <img className='w-full md:hidden object-cover max-h-[39.9rem]' src="https://images.unsplash.com/photo-1582727807014-5b320f436d33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="" />
      </div>
    </>
  )
}

export default Home
