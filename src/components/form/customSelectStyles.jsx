const errorColor = '#FF3B30';
const customSelectStyles = (isError) => ({
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    height: "40px",
    margin: "5px 0",
    border: `1px solid ${isError ? errorColor : '#ccc'}`, 
    boxShadow: state.isFocused ? `0 0 0 1px ${isError ? errorColor : 'black'}` : "none",
    "&:hover": {
      border: `1px solid ${isError ? errorColor : 'black'}`, 
    },
    borderRadius: "4px",
    fontFamily: 'Georgia, serif',
    fontSize: "16px",
    padding: "0 10px",
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: "1px",
    width: "100%",
    borderRadius: "4px",
    maxHeight: "90px",
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "0",
    height: "85px",
    position: "relative",
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "8px 10px",
    backgroundColor: state.isFocused ? "#1565C0" : "white",
    color: "#333",
    cursor: "pointer",
    "&:active": {
      backgroundColor: "#1565C0",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0px",
  }),
  input: (provided) => ({
    ...provided,
    margin: "0px",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#999",
    fontFamily: 'Georgia, serif',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#333",
    fontFamily: 'Georgia, serif',
  }),
  indicatorSeparator: () => null,
});

export default customSelectStyles;
