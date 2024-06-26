import React from "react";
import Input from "../Input";

const Title = ({ formData, setFormData }) => {
  return (
    <div>
      <Input
        width="px500"
        type="text"
        id="title"
        label="Title of the product"
        placeholder=""
        value={formData.title}
        onChange={(event) =>
          setFormData({ ...formData, title: event.target.value })
        }
      />
    </div>
  );
};

export default Title;
