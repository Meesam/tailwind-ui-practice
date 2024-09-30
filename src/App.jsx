import FilterRail from './components/FilterRail'
import Header from './components/Header'
import CardList from './components/CardList'

function App () {
  return (
    <div className='w-screen h-screen bg-gray-50 grid grid-rows-[4rem,1fr] grid-flow-row grid-cols-2 overflow-y-auto'>
      <header className='col-span-2'>
        <Header />
      </header>
      <div className='col-span-2 row-start-2 row-end-3 px-5 md:px-10 h-full my-4'>
        <CardList />
      </div>
    </div>
  )
}

export default App
