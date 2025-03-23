import recipeImage from '../assets/images/image-omelette.jpeg'

const ChallangeTwo = () => {
  return (
    <div className='desktop:bg-[#f3e6d8] flex justify-center items-center desktop:px-10 desktop:py-5'>
      <div className='flex flex-col desktop:p-8 mobile:p-0 bg-white-color rounded-lg gap-7'>
        <img src={recipeImage} alt='recipeimage' className='object-cover desktop:h-[400px] mobile:h-[300px] desktop:rounded-lg mobile:w-full' />
        <div className='flex flex-col gap-7 mobile:px-10 desktop:px-0'>
          <p className='font-semibold text-4xl text-black'>
            Simple Omelette Recipe
          </p>
          <p className='font-normal text-xs text-Stone-900'>
            An easy and quick dish, perfact for any meal. This classics omelette combines beaten eggs coooked to perfaction, optionally filled with your choice of cheese, vegetables,
            or meats.
          </p>
          <div className='flex flex-col bg-[#FFF5FA] p-5 rounded-md gap-2'>
            <p className='text-[#7B284F] font-semibold text-xl'>
              Preparation Time
            </p>
            <ul className='list-disc flex flex-col gap-2 px-10'>
              <li className='inline-flex gap-2 bullet-on-list'>
                <p className='text-base font-semibold text-[#302d2c]'>
                  Total:
                </p>
                <p className='text-base font-normal text-[#5f574e]'>
                  Apploximately 10 minutes
                </p>
              </li>
              <li className=' inline-flex gap-2 bullet-on-list'>
                <p className='text-base font-semibold text-[#302d2c]'>
                  Prepration:
                </p>
                <p className='text-base font-normal text-[#5f574e]'>
                  5 minutes
                </p>
              </li>
              <li className=' inline-flex gap-2 bullet-on-list'>
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
            <ul className='list-none flex flex-col gap-2 px-7'>
              <li className='bullet-on-list before:left-[-25px] before:bg-[#854632]'>
                <p className='text-base font-normal text-[#5f574e]'>
                  2-3 large eggs
                </p>
              </li>
              <li className='bullet-on-list before:left-[-25px] before:bg-[#854632]'>
                <p className='text-base font-normal text-[#5f574e]'>
                  Salt, to taste
                </p>
              </li>
              <li className='bullet-on-list before:left-[-25px] before:bg-[#854632]'>
                <p className='text-base font-normal text-[#5f574e]'>
                  Pepper, to taste
                </p>
              </li>
              <li className='bullet-on-list before:left-[-25px] before:bg-[#854632]'>
                <p className='text-base font-normal text-[#5f574e]'>
                  1 tablespoon of butter or oil
                </p>
              </li>
              <li className='bullet-on-list before:left-[-25px] before:bg-[#854632]'>
                <p className='text-base font-normal text-[#5f574e]'>
                  Optional fillings: cheese, diced vegetables, cooked meats, herbs
                </p>
              </li>
            </ul>
          </div>
          <div className='w-full border'></div>
          <div className='flex flex-col gap-2'>
            <p className='text-xl font-semibold text-[#854632]'>
              Instructions
            </p>
            <ul className='list-none flex flex-col gap-1 px-[2rem]'>
              <li className="number-on-list before:content-['1.']">
                <span className='pr-[5px] text-base font-semibold text-[#5f574e]'>Beat the eggs:</span>
                <span className='text-sm font-normal text-[#5f574e]'>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span>
              </li>
              <li className="number-on-list before:content-['2.']">
                <span className='pr-[5px] text-base font-semibold text-[#5f574e]'>Heat the pan:</span>
                <span className='text-sm font-normal text-[#5f574e]'>Place a non-stick frying pan over medium heat and add butter or oil.</span>
              </li>
              <li className="number-on-list before:content-['3.']">
                <span className='pr-[5px] text-base font-semibold text-[#5f574e]'>Cook the omelette:</span>
                <span className='text-sm font-normal text-[#5f574e]'>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span>
              </li>
              <li className="number-on-list before:content-['4.']">
                <span className='pr-[5px] text-base font-semibold text-[#5f574e]'>Add fillings (optional):</span>
                <span className='text-sm font-normal text-[#5f574e]'>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span>
              </li>
              <li className="number-on-list before:content-['5.']">
                <span className='pr-[5px] text-base font-semibold text-[#5f574e]'>Fold and serve:</span>
                <span className='text-sm font-normal text-[#5f574e]'>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span>
              </li>
              <li className="number-on-list before:content-['6.']">
                <span className='pr-[5px] text-base font-semibold text-[#5f574e]'>Enjoy:</span>
                <span className='text-sm font-normal text-[#5f574e]'>Serve hot, with additional salt and pepper if needed.</span>
              </li>
            </ul>
          </div>
          <div className='w-full border'></div>
          <div className='flex flex-col gap-2'>
            <p className='text-xl font-semibold text-[#854632]'>
              Nutrition
            </p>
            <p className='text-sm font-normal text-[#5f574e]'>
              The table below shows nutritional values per serving without the additional fillings.
            </p>
            <div className='flex flex-col'>
              <div className='flex items-center border-b px-5 py-2'>
                <div className='flex items-center justify-between w-1/2'>
                  <p className='text-base text-[#5f574e] font-medium'>
                    Calories
                  </p>
                  <p className='text-base text-[#854632] font-semibold'>
                    277kcal
                  </p>
                </div>
              </div>
              <div className='flex items-center border-b px-5 py-2'>
                <div className='flex items-center justify-between w-1/2'>
                  <p className='text-base text-[#5f574e] font-medium'>
                    Carbs
                  </p>
                  <p className='text-base text-[#854632] font-semibold'>
                    0g
                  </p>
                </div>
              </div>
              <div className='flex items-center border-b px-5 py-2'>
                <div className='flex items-center justify-between w-1/2'>
                  <p className='text-base text-[#5f574e] font-medium'>
                    Protein
                  </p>
                  <p className='text-base text-[#854632] font-semibold'>
                    20g
                  </p>
                </div>
              </div>
              <div className='flex items-center px-5 py-2'>
                <div className='flex items-center justify-between w-1/2'>
                  <p className='text-base text-[#5f574e] font-medium'>
                    Fat
                  </p>
                  <p className='text-base text-[#854632] font-semibold'>
                    22g
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChallangeTwo
