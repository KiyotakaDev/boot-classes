import React from 'react'
import { socialMedia } from '../constants'
import { MediaBtn } from './MediaBtn'

const DevCard = ({ dev }) => {
  const { img_src, name, charge, country, summary } = dev

  return (
    <div className='px-4'>
      <div className='flex justify-center items-center'>
        <div className='bg-blue-200 dark:bg-leveled-600 transition-colors duration-500 ease-out rounded-lg shadow-md p-6 h-[36rem] relative font-semibold text-md'>
          <img src={img_src} alt={name} className="rounded-full w-36 h-36 mx-auto mb-4" />
          <h2 className='text-xl font-semibold text-center mb-2'>{name}</h2>
          <p className='text-gray-600 dark:text-leveled-200 text-center mb-2'>{charge}</p>
          <p className='text-gray-600 dark:text-leveled-100 text-center mb-4'>{country}</p>
          <p className='text-gray-700 dark:text-sky-100'>{summary}</p>
          <div className='flex absolute bottom-6 left-1/2 right-1/2 justify-center items-center gap-8'>
            {socialMedia.map((media, i) => (
              <MediaBtn media={media} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevCard