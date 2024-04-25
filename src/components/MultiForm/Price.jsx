import React from "react";

const Price = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="other-info-container">
        <input
          type="text"
          placeholder="Nationality..."
          value={formData.nationality}
          onChange={(e) => {
            setFormData({ ...formData, nationality: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default Price;
