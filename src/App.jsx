import Header from './components/Header'

function App () {
  return (
    <div className='w-screen h-screen bg-gray-50 grid grid-rows-[4rem,1fr,2rem] grid-flow-row grid-cols-2'>
      <header className='col-span-2'>
        <Header />
      </header>
      <div className='col-span-2 row-start-2 row-end-5 auto-rows-max'>
        <div className='grid grid-rows-[4rem, 1fr] grid-flow-row grid-cols-5'>
          <div className='col-span-5 bg-blue-500 px-5 md:px-10'>
            Hello
          </div>
        </div>
      </div>
      <div className='col-span-2 h-20 row-span-1 bg-blue-600'>
        Footer
      </div>
    </div>
  )
}

export default App
