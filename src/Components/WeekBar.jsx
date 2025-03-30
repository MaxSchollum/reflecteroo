import React, { useState, useEffect } from 'react';
import WeekButton from './WeekBarComps/WeekButton';
import SearchBox from './WeekBarComps/SearchBox';
import AddWeekButton from './WeekBarComps/AddWeekButton';

function WeekBar({ selectedWeek, setSelectedWeek, weeks, setWeeks, dataByWeek }) {
  const [openWeek, setOpenWeek] = useState(selectedWeek);

  const handleToggle = (weekNumber) => {
    setOpenWeek(prev => (prev === weekNumber ? null : weekNumber));
    setSelectedWeek(weekNumber);
  };

  useEffect(() => {
    setOpenWeek(selectedWeek);
  }, [selectedWeek]);

  return (
    <div className='WeekBar'>
      <div className='WeekBarTitle'>Weekly Reflections</div>
      <div className='spacer'></div>
      <SearchBox />
      <div className='spacer'>space</div>

      {weeks.map((week) => {
        const hasData = !!dataByWeek?.[week]?.whatHappened?.trim();
        return (
          <WeekButton
            key={week}
            weekNumber={week}
            isOpen={openWeek === week}
            onToggle={() => handleToggle(week)}
            highlightEmpty={!hasData}
          />
        );
      })}

      <AddWeekButton
        weeks={weeks}
        setWeeks={setWeeks}
        setSelectedWeek={setSelectedWeek}
      />
    </div>
  );
}

export default WeekBar;
