import React, { useState } from 'react';

const YearSelector = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  
  //const years = Array.from(new Array(0), (val, index) => currentYear - index);
  
  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className='YearSelector'>
      <select value={selectedYear} onChange={handleChange}>
        <option>2024</option>
        <option>2023</option> 
        <option>2022</option>
        {/* {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))} */}
      </select>
    </div>
  );
};

export default YearSelector;
