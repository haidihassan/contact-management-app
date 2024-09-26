import React from "react";
import { useFormikContext } from "formik";
import Select from "react-select";
import customSelectStyles from "./customSelectStyles";

const SelectField = ({ fieldName, options }) => {
  const { setFieldValue, values, touched, errors } = useFormikContext();

  return (
    <>
      <Select
        name={fieldName}
        options={options}
        placeholder="Select Contact Type"
        isSearchable={false}
        styles={customSelectStyles(touched[fieldName] && errors[fieldName])}
        onChange={(option) => setFieldValue(fieldName, option ? option.value : null)} 
        value={options.find(option => option.value === values[fieldName]) || null} 
      />
      {touched[fieldName] && errors[fieldName] && (
        <div className="error-message">{errors[fieldName]}</div>
      )}
    </>
  );
};

export default SelectField;
