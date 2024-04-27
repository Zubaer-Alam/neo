import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();
const colourOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function MultiOptionSelect({ formData, setFormData }) {
  return (
    <Select
    
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "#199771" : "#E5E7EB",
          borderRadius: "8px",
          padding: "4px",
          fontSize: "14px",
          color: "#A7A0BA",
          width: "500px",
          marginTop:"16px",
          marginBottom:"16px",
       
        }),
      }}
      value={formData.firstName} // Assuming formData.firstName holds the selected value(s)
      onChange={(selectedOption) => setFormData({ ...formData, firstName: selectedOption })}
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}
