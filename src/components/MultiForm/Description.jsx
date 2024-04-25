import React from "react";
import Input from "../Input";

const Description = ({ formData, setFormData }) => {
  return (
    <div>
      <Input
        width="px500"
        type="text"
        id="Description"
        label="Description of the product"
        placeholder=""
        value={formData.description}
        onChange={(event) =>
          setFormData({ ...formData, description: event.target.value })
        }
      />
    </div>
  );
};

export default Description;
