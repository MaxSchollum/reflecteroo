import React, { useRef } from 'react';
import './Main.css';

function Main({ selectedWeek, dataByWeek, setDataByWeek }) {
  const mainRef = useRef(null);
  const today = new Date().toLocaleDateString('de-DE');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataByWeek(prev => ({
      ...prev,
      [selectedWeek]: {
        ...prev[selectedWeek],
        [name]: value
      }
    }));
  };

  const weekData = dataByWeek[selectedWeek] || {};

  return (
    <div className="Main" ref={mainRef}>
      <div className="reflection-header">
        <h2>Week {selectedWeek}: How was your week? How did you feel?</h2>
        <div className="reflection-date">{today}</div>
      </div>

      <h3 id="reflect">Reflect on the Week</h3>
      <div className="input-block">
        <label htmlFor="whatHappened">What happened this week?</label>
        <textarea
          id="whatHappened"
          name="whatHappened"
          value={weekData.whatHappened || ''}
          onChange={handleChange}
          placeholder="This is the most important part - laundry list, what you did."
        />
      </div>

      <div className="row-block">
        <div className="row-label">Rate your Happiness:</div>
        <div className="row-slider">
          <input
            type="range"
            min="1"
            max="10"
            name="happiness"
            value={weekData.happiness || 7}
            onChange={handleChange}
          />
        </div>
        <div className="row-value">{weekData.happiness || 7}</div>
      </div>

      <div className="row-block">
        <div className="row-label">How many hours did you work?</div>
        <input
          type="number"
          name="workHours"
          value={weekData.workHours || ''}
          onChange={handleChange}
          className="pill-input"
          placeholder="0"
        />
      </div>

      <div className="row-block">
        <div className="row-label">How many sessions of sport did you do?</div>
        <input
          type="number"
          name="sportSessions"
          value={weekData.sportSessions || ''}
          onChange={handleChange}
          className="pill-input"
          placeholder="0"
        />
      </div>

      <h3 id="summary">Summary & Follow Ups</h3>
      <div className="input-block">
        <label htmlFor="summary">Summarize what happened. How did you feel?</label>
        <textarea
          id="summary"
          name="summary"
          value={weekData.summary || ''}
          onChange={handleChange}
          placeholder="Give me around a bullet a day or less – remind me of what happened."
        />
      </div>

      <div className="input-block-row">
        <div className="input-block">
          <label htmlFor="met">Did you meet anyone new?</label>
          <textarea
            id="met"
            name="met"
            value={weekData.met || ''}
            onChange={handleChange}
          />
        </div>
        <div className="input-block">
          <label htmlFor="followUp">Who to follow up with?</label>
          <textarea
            id="followUp"
            name="followUp"
            value={weekData.followUp || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="input-block-row">
        <div className="input-block">
          <label htmlFor="dope">What was dope?</label>
          <textarea
            id="dope"
            name="dope"
            value={weekData.dope || ''}
            onChange={handleChange}
            placeholder="• Three Bullet Points"
          />
        </div>
        <div className="input-block">
          <label htmlFor="sucked">What sucked?</label>
          <textarea
            id="sucked"
            name="sucked"
            value={weekData.sucked || ''}
            onChange={handleChange}
            placeholder="• Three Bullet Points"
          />
        </div>
      </div>

      <h3 id="review">Review, Evaluation & Forward Outlook</h3>
      <div className="input-block">
        <label>What did you work on?</label>
      </div>

      <div className="input-block-row">
        <div className="input-block">
          <label htmlFor="project1">Project 1</label>
          <textarea
            id="project1"
            name="project1"
            value={weekData.project1 || ''}
            onChange={handleChange}
          />
        </div>
        <div className="input-block">
          <label htmlFor="project2">Project 2</label>
          <textarea
            id="project2"
            name="project2"
            value={weekData.project2 || ''}
            onChange={handleChange}
          />
        </div>
        <div className="input-block">
          <label htmlFor="project3">Project 3</label>
          <textarea
            id="project3"
            name="project3"
            value={weekData.project3 || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="input-block-row">
        <div className="input-block">
          <label htmlFor="learnings">What did you learn?</label>
          <textarea
            id="learnings"
            name="learnings"
            value={weekData.learnings || ''}
            onChange={handleChange}
            placeholder="• Three Bullet Points"
          />
        </div>
        <div className="input-block">
          <label htmlFor="goals">Goals for next week?</label>
          <textarea
            id="goals"
            name="goals"
            value={weekData.goals || ''}
            onChange={handleChange}
            placeholder="• Three Bullet Points"
          />
        </div>
      </div>

      <h3 id="sanity">Sanity Check</h3>
      <div className="input-block-row">
        <div className="input-block project-block">
          <label htmlFor="cities">Which Cities?</label>
          <textarea
            id="cities"
            name="cities"
            value={weekData.cities || ''}
            onChange={handleChange}
          />
        </div>

        <div className="input-block project-block">
          <label htmlFor="injury">Injury or Sickness</label>
          <textarea
            id="injury"
            name="injury"
            value={weekData.injury || ''}
            onChange={handleChange}
          />
        </div>

        <div className="input-block project-block">
          <label htmlFor="consumption">Consumption Habits</label>
          <textarea
            id="consumption"
            name="consumption"
            value={weekData.consumption || ''}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
