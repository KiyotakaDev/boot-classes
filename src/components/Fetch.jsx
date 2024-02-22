import React, { useEffect, useState } from 'react'

const Fetch = () => {
  const [results, setResults] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      let randomNumber = Math.floor(Math.random() * 100) + 1

      const response = await fetch(`https://rickandmortyapi.com/api/character/${randomNumber}`)
      const data = await response.json()
      
      console.log(data);
      setResults(data)
    }

    fetchData()
  }, [])

  if (!results) return
  const { image, name, status, species, location, origin } = results
  
  return (
    <div className='h-screen bg-gradient-to-br from-blacky-400 via-blacky-700 to to-blacky-950 relative'>
      <div className='absolute inset-0 m-auto w-[60%] bg-blacky-800 h-1/2 shadow-md rounded-lg flex'>
        <div className='flex-[0.9]'>
          <img src={image} className='w-full h-full object-cover p-4 rounded-[2rem]' />
        </div>
        <div className='flex flex-[1.1] flex-col p-8'>
          <h2 className='font-extrabold text-2xl'>{name}</h2>
          <div className='mt-2 text-lg flex items-center gap-x-3'>
            <span className={`${
              status == "Alive" ? 'bg-green-500'
              : status == "Dead" ? 'bg-red-500'
              : 'bg-white'
            } w-4 h-4 rounded-full`} /> {status} - {species}
          </div>
          <div className='mt-5'>
            <p className='text-blacky-500'>Planet:</p>
            {/* {results.location.name} */}
            {location.name}
          </div>
          <div className='mt-5'>
            <p className='text-blacky-500'>Origin:</p>
            {origin.name}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fetch