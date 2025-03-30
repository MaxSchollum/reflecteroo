import React, { useState } from 'react';
import './App.css';
import ChoiceBar from './Components/ChoiceBar';
import Header from './Components/Header';
import Main from './Components/Main';
import WeekBar from './Components/WeekBar';

function MainApp({ user }) {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [weeks, setWeeks] = useState([1, 2, 3, 4]);

  const defaultWeekData = {
    whatHappened: '',
    happiness: 7,
    workHours: '',
    sportSessions: '',
    summary: '',
    met: '',
    followUp: '',
    dope: '',
    sucked: '',
    project1: '',
    project2: '',
    project3: '',
    learnings: '',
    goals: '',
    cities: '',
    injury: '',
    consumption: ''
  };

  const [dataByWeek, setDataByWeek] = useState({
    1: { ...defaultWeekData },
    2: { ...defaultWeekData },
    3: { ...defaultWeekData },
    4: { ...defaultWeekData }
  });

  return (
    <div className="App">
      <Header />
      <div className='Cover'>
        <ChoiceBar user={user} />
        <WeekBar
          selectedWeek={selectedWeek}
          setSelectedWeek={setSelectedWeek}
          weeks={weeks}
          setWeeks={setWeeks}
          dataByWeek={dataByWeek}
        />
        <Main
          selectedWeek={selectedWeek}
          dataByWeek={dataByWeek}
          setDataByWeek={setDataByWeek}
        />
      </div>
    </div>
  );
}

export default MainApp;
