import React from 'react'
import { socialMedia } from '../constants'
import { MediaBtn } from './MediaBtn'

const DevCard = ({ dev }) => {
  const { img_src, name, charge, country, summary } = dev

  return (
    <div className='px-4'>
      <div className='flex justify-center items-center'>
        <div className='bg-cyan-200 dark:bg-leveled-600 transition-colors duration-500 ease-out rounded-lg shadow-xl dark:shadow-leveled-300 p-6 h-[36rem] relative font-semibold text-md'>
          <img src={img_src} alt={name} className="rounded-full w-36 h-36 mx-auto mb-4" />
          <h2 className='text-2xl text-white light-neon-shadow dark:dark-neon-shadow font-semibold text-center mb-2'>{name}</h2>
          <p className='text-xl text-cyan-600 dark:text-leveled-200 text-center mb-2'>{charge}</p>
          <p className='text-xl text-cyan-600 dark:text-leveled-100 text-center mb-4'>{country}</p>
          <div className='h-1/2 overflow-y-scroll'>
            <p className='text-xl px-2 sm:px-8 lg:px-14 text-gray-700 dark:text-sky-100'>{summary}</p>
            <div className='flex justify-center items-center gap-10 mt-10 pb-6'>
              {socialMedia.map((media, i) => (
                <MediaBtn media={media} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevCard