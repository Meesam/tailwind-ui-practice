import React from 'react'
import blazorLogo from '../assets/images/blazor.jpeg'
import { FaCircleUser } from 'react-icons/fa6'
import { IoMdMore } from 'react-icons/io'

const Card = () => {
  return (
    <div className='group rounded-lg hover:shadow-sm p-3 hover:bg-gray-300'>
      <div className='flex flex-col justify-between'>
        <div>
          <img alt='blazor' src={blazorLogo} className='h-64 w-full rounded-lg h-100 object-cover' />
        </div>
        <div className='flex items-center justify-between mt-3'>
          <FaCircleUser size={24} />
          <div className='flex flex-col items-center justify-center flex-1 w-full px-4'>
            It is a long established fact that a reader will be distracted
          </div>
          <IoMdMore size={24} />
        </div>
      </div>
    </div>
  )
}

export default Card
