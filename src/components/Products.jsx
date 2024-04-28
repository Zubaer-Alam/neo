import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { FaTrash } from "react-icons/fa6";
import { useState } from "react";
import Button from "./Button";
import { AiFillEdit } from "react-icons/ai";

const Products = () => {
  const [openModal, setOpenModal] = useState(false);

  const products = [
    {
      id: 1,
      name: "iPhone 13 Pro Max",
      categories: "Electronics",
      price: "1500$",
      description:
        "Latest iphone 13 max. Bought from the Apple store. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae",
      datePosted: "21st Sept 2021",
      views: "17177117 Views",
    },
    {
      id: 2,
      name: "iPhone 13 Pro Max",
      categories: "Electronics",
      price: "1500$",
      description:
        "Latest iphone 13 max. Bought from the Apple store. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae",
      datePosted: "21st Sept 2021",
      views: "17177117 Views",
    },

    {
      id: 3,
      name: "iPhone 13 Pro Max",
      categories: "Electronics",
      price: "1500$",
      description:
        "Latest iphone 13 max. Bought from the Apple store. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae",
      datePosted: "21st Sept 2021",
      views: "17177117 Views",
    },
    {
      id: 4,
      name: "iPhone 13 Pro Max",
      categories: "Electronics",
      price: "1500$",
      description:
        "Latest iphone 13 max. Bought from the Apple store. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae",
      datePosted: "21st Sept 2021",
      views: "17177117 Views",
    },
    // Add more products as needed
  ];

  return (
    <>
      <div>
        <Modal  setOpenModal={setOpenModal}         openModal={openModal}
        title="Delete Product"
        description="Are you sure you want to delete this product?"
        confirmLabel="Delete"
        cancelLabel="Cancel"
     />
      </div>
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
          {/* <li className="inline-flex items-center">
            <Link
              className="flex items-center  text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
              to="#"
            >
              Accounts
            </Link>
            <IoChevronForward className=" mx-2 size-4 text-textDeep" />
          </li> */}
          <li
            className="inline-flex items-center  text-gray-400 "
            aria-current="page"
          >
            Products
          </li>
        </ol>

        <div className="">
          <div className="justify-between flex">
            <p className="text-[22px] text-textDeep font-bold">My Products</p>
            <Link className="" to="/addProduct">
              {" "}
              <Button label="Add Product"   
                      textColor="white"
                      bgColor="teal-600"
                      width="small"
                      focusColor="gray-100"
                      hoverColor="teal-900"
                      borderColor="" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-3">
            {products.map((product) => (
              <div
                key={product.id} // Ensure each product has a unique key
                className="border border-gray-200 rounded-xl mt-6 md:px-8 px-4 py-6"
              >
                <div className="flex justify-between">
                  <p className="text-gray-700 md:text-xl text-lg font-semibold">
                    {product.name}
                  </p>
                  <div className="flex items-center gap-3">
                    <FaTrash
                      className="text-gray-600 cursor-pointer"
                      onClick={() => setOpenModal(true)}
                    />

                    <Link to="/editProduct">
                      <AiFillEdit className="text-gray-600 cursor-pointer text-xl" />
                    </Link>
                  </div>
                </div>

                <div className="">
                  <div className="text-sm text-gray-400 font-semibold">
                    <div className="py-1">
                      <p>Categories: {product.categories}</p>
                      <div className="flex gap-1">
                        <p>
                          Price: <span>{product.price}</span>
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 md:text-base text-sm line-clamp-3">
                      {product.description}
                    </p>

                    <div className="flex justify-between md:text-sm text-xs pt-2">
                      <p>Date posted: {product.datePosted}</p>
                      <p>{product.views}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
