import './AddWeekButton.css'; // at the top of AddWeekButton.jsx

const AddWeekButton = ({ weeks, setWeeks, setSelectedWeek }) => {
    const handleClick = () => {
      const nextWeek = Math.max(...weeks) + 1;
      setWeeks([...weeks, nextWeek]);
      setSelectedWeek(nextWeek);
    };
  
    return (
      <div className="AddWeekButtonContainer">
        <button className="add-week-button" onClick={handleClick}>
          Add Week
        </button>
      </div>
    );
  };
  
  export default AddWeekButton;
  