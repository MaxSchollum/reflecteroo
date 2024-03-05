const SearchBox = ({ placeholder, ...props }) => {
    return (
        <div className="SearchBoxContainer">
            <input
                type="text"
                className="search-box"
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
  };
  
  export default SearchBox;
  