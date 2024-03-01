import React from 'react'

const Home = ({ text="tooltip" }) => {
  return (
    <div className='sidebar-icon group'>
      <img src="/home.jpg" alt="Home" className='h-16 sm:h-24 lg:h-28 w-16 sm:w-24 lg:w-28 rounded-full p-2' />
      <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
    </div>
  )
}

export default Home