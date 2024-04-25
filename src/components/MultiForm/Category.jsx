import React from "react";
import Input from "../Input";
import MultiSelect from "../MultiSelect";

const Category = ({ formData, setFormData }) => {
  return (
    <div>
      <MultiSelect />

      <Input
        width="px500"
        type="text"
        id="Category"
        label="Category of the product"
        placeholder=""
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
    </div>
  );
};

export default Category;
