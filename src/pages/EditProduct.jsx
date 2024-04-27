import { FaTrash } from "react-icons/fa6";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import MultiOptionSelect from "../components/MultiOptionSelect";
import { useState } from "react";
const EditProduct = () => {
    const [formData, setFormData] = useState({
      firstName: "",
  });

  return (
    <div>
      <section section className="lg:px-[65px] px-4">
        <ol
          className="flex items-center whitespace-nowrap font-medium md:text-base text-sm  pb-6 md:ps-0 pt-8 "
          aria-label="Breadcrumb"
        >
          <li className="inline-flex items-center">
            <Link
              className="flex items-center  text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
              to="/"
            >
              Home
            </Link>
            <IoChevronForward className=" mx-2 size-4 text-textDeep" />
          </li>
          <li className="inline-flex items-center">
            <Link
              className="flex items-center  text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
              to="/"
            >
              Product
            </Link>
            <IoChevronForward className=" mx-2 size-4 text-textDeep" />
          </li>
          <li
            className="inline-flex items-center  text-gray-400 "
            aria-current="page"
          >
            Edit Product
          </li>
        </ol>

        <div className="">
          <div className="justify-between flex">
            <p className="text-[22px] text-textDeep font-bold">Edit Products</p>
            <Link className="" to="/addProduct">
              <Button width="small" label="Add Product" />
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="border border-gray-200 rounded-xl mt-6 px-8 py-6">
              <div>
                <Input
                  width="px500"
                  type="text"
                  id="title"
                  label="Title price of the product"
                  placeholder=""
           
                />

                <MultiOptionSelect formData={formData} setFormData={setFormData} />
                
                <div className="flex justify-between mt-4">
                  <Input
                    width="px350"
                    type="text"
                    id="price"
                    label="Rent price of the product"
                    placeholder=""
              
                  />

                  <select
                  
                    className="focus:outline-teal-600 border border-gray-200 rounded-lg text-gray-400 text-sm"
                  >
                    <option>Select Option</option>
                    <option>Hourly</option>
                    <option>Daily</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProduct;
