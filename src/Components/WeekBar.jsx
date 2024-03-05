import React from 'react'
import SearchBox from './WeekBarComps/SearchBox'
import AddWeekButton from './WeekBarComps/AddWeekButton'
import WeekButton from './WeekBarComps/WeekButton'

function WeekBar() {
  return (
    <div className='WeekBar'>
      <div className='WeekBarTitle'>Weekly Reflections</div>
      <div className='spacer'></div>
      <SearchBox />
      <div className='spacer'>space</div>
      <WeekButton weekNumber={1}/>
      <WeekButton weekNumber={2} />
      <WeekButton weekNumber={3} />
      <WeekButton weekNumber={4} />
      <AddWeekButton />
    </div>
    )
}

export default WeekBar

// <WeekButton weekNumber={1} />
//       <WeekButton weekNumber={2} />
//       <WeekButton weekNumber={3} />
//       <WeekButton weekNumber={4} />