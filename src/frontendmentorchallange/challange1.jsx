import profilePic from '../assets/images/profile-pic.jfif'
const data = ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram']

const ChallangeOne = () => {

  return ( <div className='bg-gray-800 flex flex-col items-center p-10 rounded-lg shadow-lg'>
             <div>
               <img className='rounded-full border-2 border-gray-700 h-20 w-20 object-cover' src={profilePic} alt='Profile Pic' />
             </div>
             <p className='text-white text-xl font-semibold mt-5'>
               Jessica Randall
             </p>
             <p className='text-yellow-400 text-sm font-medium mt-2'>
               London, United Kingdom
             </p>
             <p className='text-sm text-white font-normal mt-5'>
               "Front-end developer and avid reader."
             </p>
             <div className='flex flex-col items-center justify-center mt-5 space-y-3 w-full'>
               {data.map((item, index) => (
                  <div key={index} className='w-full bg-gray-700 flex items-center justify-center rounded-md p-2'>
                    <p className='text-white font-medium'>
                      {item}
                    </p>
                  </div>
                ))}
             </div>
           </div>
  )
}

export default ChallangeOne
