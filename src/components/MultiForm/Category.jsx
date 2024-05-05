

import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();
const categoryOptions = [
  { value: "Electronics", label: "Electronics" },
  { value: "Furniture", label: "Furniture" },
  { value: "Home appliances", label: "Home appliances" },
  { value: "Sporting goods", label: "Sporting goods" },
  { value: "Outdoor", label: "Outdoor" },
  { value: "Toys", label: "Toys" }
];

export default function Category({ formData, setFormData }) {
  const handleChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map(option => option.value);
    setFormData({ ...formData, category: selectedValues });
  };

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
        }),
      }}
      value={categoryOptions.filter(option => formData.category.includes(option.value))}
      onChange={handleChange}
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={categoryOptions}
    />
  );
}
