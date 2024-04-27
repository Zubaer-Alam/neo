import React from "react";
import Input from "../Input";
const Price = ({ formData, setFormData }) => {
  return (
    <div>
      <Input
        width="px500"
        type="text"
        id="price"
        label="Purchased price of the product"
        placeholder=""
        value={formData.purchasedPrice}
        onChange={(event) =>
          setFormData({ ...formData, purchasedPrice: event.target.value })
        }
      />
      <div className="flex justify-between mt-4">
        <Input
          width="px350"
          type="text"
          id="price"
          label="Rent price of the product"
          placeholder=""
          value={formData.rentPrice}
          onChange={(event) =>
            setFormData({ ...formData, rentPrice: event.target.value })
          }
        />

        <select
          value={formData.rentPriceOption}
          onChange={(event) =>
            setFormData({ ...formData, rentPriceOption: event.target.value })
          }
          className="focus:outline-teal-600 border border-gray-200 rounded-lg text-gray-400 text-sm"
        >
          <option>Select Option</option>
          <option>Hourly</option>
          <option>Daily</option>
        </select>
      </div>
    </div>
  );
};

export default Price;
