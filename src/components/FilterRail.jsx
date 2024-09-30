import React from 'react'
import FilterChip from './FilterChip'

const FilterRail = () => {
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
    <div className='flex items-center gap-3'>
      {filterData.map((item) => {
         return (
           <FilterChip key={item.id} title={item.title} />
         )
       })}
    </div>
  )
}

export default FilterRail
