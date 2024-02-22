import React from 'react'

export const CubePage = () => {
  return (
    <div className='bg my-10'>
      <h1>{'Cube page :3'}</h1>
      <div className="grid grid-cols-10 gap-5">
        {Array.from({ length: 9 }).map((_, index) => (
          <div className={`bg-violet-${index}00 h-16 w-16 hover:scale-125 transition-transform duration-300`} />
        ))}
        
      </div>
    </div>
  )
}
