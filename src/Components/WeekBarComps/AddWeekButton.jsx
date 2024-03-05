const AddWeekButton = ({ children, ...props }) => {
    return (
        <div className="AddWeekButtonContainer">
            <button className="add-week-button" {...props}>
                {children}
            </button>
        </div>
    );
  };
  
  export default AddWeekButton;
  