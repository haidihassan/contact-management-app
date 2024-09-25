const customSelectStyles = (isError) => ({
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      height: "30px",
      padding: "0 10px",
      margin: "10px",
      border: isError ? `1px solid red` : `1px solid #ccc`,
      boxShadow: state.isFocused
        ? isError
          ? "0 0 0 1px red"
          : "0 0 0 1px black"
        : "none",
      "&:hover": {
        border: isError ? `1px solid red` : `1px solid black`,
      },
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: "0px",
      marginLeft: "10px",
      paddingLeft: "3px",
      borderRadius: "4px",
      zIndex: 100,
      maxHeight: "none",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "0",
      height: "85px",
      position: "block", 
    }),
    option: (provided, state) => ({
      ...provided,
      padding: "8px 10px",
      backgroundColor: state.isFocused ? "pink" : "white",
      color: "#333",
      cursor: "pointer",
      "&:active": {
        backgroundColor: "pink",
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
    indicatorSeparator: () => null,
  });
  export default customSelectStyles;