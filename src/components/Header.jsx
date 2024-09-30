import { FaBars, FaYoutube, FaRegBell, FaMicrophone } from 'react-icons/fa'
import { RiVideoAddLine } from 'react-icons/ri'
import { FaCircleUser } from 'react-icons/fa6'
import { IoSearchOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <nav className='h-full flex items-center justify-between px-5 md:px-10'>
      <div className='flex items-center gap-2'>
        <FaBars size={20} />
        <FaYoutube size={26} className=' text-red-500' />
        <p className=' text-lg font-bold'>
          YouTube
        </p>
      </div>
      <div className='flex items-center gap-4 flex-1 justify-center'>
        <div className='hidden md:block max-w-[750px] min-w-[450px] px-4 py-2 rounded-full border border-gray-300'>
          <div className='flex items-center gap-2'>
            <input type='text' className=' bg-transparent w-full outline-none' />
            <div>
              <IoSearchOutline />
            </div>
          </div>
        </div>
        <div className='hidden md:block bg-slate-500 p-3 rounded-full cursor-pointer group'>
          <FaMicrophone size={20} className=' group-hover:text-white' />
        </div>
      </div>
      <div className='flex items-center gap-6'>
        <div className='md:hidden'>
          <IoSearchOutline size={24} />
        </div>
        <RiVideoAddLine size={24} />
        <FaRegBell size={24} />
        <FaCircleUser size={24} />
      </div>
    </nav>
  )
}

export default Header
