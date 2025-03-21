import recipeImage from '../assets/images/image-omelette.jpeg'

const ChallangeTwo = () => {
  return (<div className='desktop:bg-[#f3e6d8] flex justify-center items-center desktop:px-10 desktop:py-5 '>
            <div className='flex flex-col desktop:p-8 mobile:p-0 bg-white-color rounded-lg gap-7'>
              <img src={recipeImage} alt='recipeimage' className='object-cover h-[400px] desktop:rounded-lg mobile:w-full' />
              <div className='flex flex-col gap-7 mobile:px-10 mobile:p-7'>
                <p className='font-semibold text-4xl text-black'>
                  Simple Omelette Recipe
                </p>
                <p className='font-normal text-xs text-Stone-900'>
                  An easy and quick dish, perfact for any meal. This classics omelette combines beaten eggs coooked to perfaction, optionally filled with your choice of cheese, vegetables,
                  or meats.
                </p>
                <div className='flex flex-col bg-[#FFF5FA] p-5 rounded-md gap-2'>
                  <p className='text-[#7B284F] font-semibold text-xl'>
                    Prepration Time
                  </p>
                  <ul className='list-disc flex flex-col gap-2 px-2'>
                    <li className=' inline-flex gap-2'>
                      <p className='text-base font-semibold text-[#302d2c]'>
                        Total:
                      </p>
                      <p className='text-base font-normal text-[#5f574e]'>
                        Apploximately 10 minutes
                      </p>
                    </li>
                    <li className=' inline-flex gap-2'>
                      <p className='text-base font-semibold text-[#302d2c]'>
                        Prepration:
                      </p>
                      <p className='text-base font-normal text-[#5f574e]'>
                        5 minutes
                      </p>
                    </li>
                    <li className=' inline-flex gap-2'>
                      <p className='text-base font-semibold text-[#302d2c]'>
                        Cooking:
                      </p>
                      <p className='text-base font-normal text-[#5f574e]'>
                        5 minutes
                      </p>
                    </li>
                  </ul>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-xl font-semibold text-[#854632]'>
                    Ingredients
                  </p>
                  <ul className='list-none flex flex-col gap-2 px-2'>
                    <li>
                      <p className='text-base font-normal text-[#5f574e]'>
                        2-3 large eggs
                      </p>
                    </li>
                    <li>
                      <p className='text-base font-normal text-[#5f574e]'>
                        Salt, to taste
                      </p>
                    </li>
                    <li>
                      <p className='text-base font-normal text-[#5f574e]'>
                        Pepper, to taste
                      </p>
                    </li>
                    <li>
                      <p className='text-base font-normal text-[#5f574e]'>
                        1 tablespoon of butter or oil
                      </p>
                    </li>
                    <li>
                      <p className='text-base font-normal text-[#5f574e]'>
                        Optional fillings: cheese, diced vegetables, cooked meats, herbs
                      </p>
                    </li>
                  </ul>
                </div>
                <div className='w-full border-[0.01rem] border-[#e4ded8]'></div>
                {/* Instruction */}
              </div>
            </div>
          </div>)
}

export default ChallangeTwo
