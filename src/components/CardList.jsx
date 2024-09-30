import React from 'react'
import Card from './Card'

const CardList = () => {
  const [filterData, setFilterData] = React.useState([])

  React.useEffect(() => {
    let chipArr = []
    for (var i = 0; i < 21; i++) {
      chipArr.push({
        id: i,
        title: `Chip-${i+1}`
      })
    }
    setFilterData(chipArr)
  }, [])

  return (
    <div className='grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 gap-x-4 gap-y-6 mb-10'>
      {filterData.map((item) => {
         return (
           <Card key={item.id} />
         )
       })}
    </div>
  )
}

export default CardList
