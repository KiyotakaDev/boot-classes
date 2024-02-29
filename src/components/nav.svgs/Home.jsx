import React from 'react'

const Home = ({ text="tooltip" }) => {
  return (
    <div className='sidebar-icon group'>
      <img src="/home.jpg" alt="Home" className='h-16 w-16 rounded-full p-2' />
      <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
    </div>
  )
}

export default Home