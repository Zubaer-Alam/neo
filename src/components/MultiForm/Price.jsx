import React from "react";
import Input from "../Input";
const Price = ({ formData, setFormData }) => {
  return (
    <div>
      <Input
        width="px500"
        type="number"
        id="price"
        label="Selling price of the product"
        placeholder=""
        value={formData.price}
        onChange={(event) =>
          setFormData({ ...formData, price: event.target.value })
        }
      />
      <div className="flex justify-between mt-4">
        <Input
          width="px350"
          type="number"
          id="priceR"
          label="Rent price of the product"
          placeholder=""
          value={formData.rent}
          onChange={(event) =>
            setFormData({ ...formData, rent: event.target.value })
          }
        />

        <select
          value={formData.rent_interval}
          onChange={(event) =>
            setFormData({ ...formData, rent_interval: event.target.value })
          }
          className="focus:outline-teal-600 border border-gray-200 rounded-lg text-gray-400 text-sm"
        >
          <option>Select Option</option>
          <option value="hourly">Hourly</option>
          <option value="daily">Daily</option>
        </select>
      </div>
    </div>
  );
};

export default Price;
