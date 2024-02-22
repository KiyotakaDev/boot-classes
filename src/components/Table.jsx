import React from 'react'
import { games } from '../constants/index'


const col = 'px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'
const td = 'px-6 py-4 whitespace-nowrap'

const Table = () => {
  return (
    <table className='divide-y divide-green-300'>
      <caption className='caption-bottom bg-slate-200 py-2'>Game table</caption>
      <thead className='bg-gray-600'>
        <tr>
          <th scope='col' className={col} > Name </th>
          <th scope='col' className={col} > Release </th>
          <th scope='col' className={col} > Genres </th>
        </tr>
      </thead>

      <tbody className='bg-white divide-y divide-green-400'>
        {games.map((row) => (
          <tr key={row.id} className='hover:bg-slate-200'>
            <td className={td} >{row.name}</td>
            <td className={td} >{row.release}</td>
            <td className={td} >{row.genres}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table