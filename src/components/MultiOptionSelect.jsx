// import React from "react";
// import Select from "react-select";
// import makeAnimated from "react-select/animated";
// const animatedComponents = makeAnimated();
// const colourOptions = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

// export default function MultiOptionSelect({ formData, setFormData }) {
//   return (
//     <Select
    
//       styles={{
//         control: (baseStyles, state) => ({
//           ...baseStyles,
//           borderColor: state.isFocused ? "#199771" : "#E5E7EB",
//           borderRadius: "8px",
//           padding: "4px",
//           fontSize: "14px",
//           color: "#A7A0BA",
//           width: "500px",
//           marginTop:"16px",
//           marginBottom:"16px",
       
//         }),
//       }}
//       value={formData.category} // Assuming formData.category holds the selected value(s)
//       onChange={(selectedOption) => setFormData({ ...formData, category: selectedOption })}
//       closeMenuOnSelect={false}
//       components={animatedComponents}
//       defaultValue={[colourOptions[4], colourOptions[5]]}
//       isMulti
//       options={colourOptions}
//     />
//   );
// }

import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();
const colourOptions = [
  { value: "Electronics", label: "Electronics" },
  { value: "Furniture", label: "Furniture" },
  { value: "Home appliances", label: "Home appliances" },
  { value: "Sporting goods", label: "Sporting goods" },
  { value: "Outdoor", label: "Outdoor" },
  { value: "Toys", label: "Toys" }
];

export default function MultiOptionSelect({ formData, setFormData }) {
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
          marginTop: "16px",
          marginBottom: "16px",
        }),
      }}
      value={colourOptions.filter(option => formData.category.includes(option.value))}
      onChange={handleChange}
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}

