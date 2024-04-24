import { IoChevronForward } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import Modal1 from "../components/Modal";
import { FaTrash } from "react-icons/fa6";
import { useState } from "react";

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
      id: 1,
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
        <Modal1 openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <section section className="lg:px-[65px] px-4 lg:mt-20 mt-4">
        <ol
          className="flex items-center whitespace-nowrap font-medium md:text-base text-sm  lg:py-10 pt-28 pb-6 md:ps-0 "
          aria-label="Breadcrumb"
        >
          <li className="inline-flex items-center">
            <Link
              className="flex items-center  text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
              to="#"
            >
              Home
            </Link>
            <IoChevronForward className=" mx-2 size-4 text-textDeep" />
          </li>
          <li className="inline-flex items-center">
            <Link
              className="flex items-center  text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
              to="#"
            >
              Accounts
            </Link>
            <IoChevronForward className=" mx-2 size-4 text-textDeep" />
          </li>
          <li
            className="inline-flex items-center  text-gray-400 "
            aria-current="page"
          >
            Products
          </li>
        </ol>

        <div className="">
          <p className="text-[22px] text-textDeep font-bold">My Products</p>
          <div className="grid grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id} // Ensure each product has a unique key
                className="border border-gray-200 rounded-xl mt-6 px-8 py-6"
              >
                <div className="flex justify-between">
                  <p className="text-gray-700 text-xl font-semibold">
                    {product.name}
                  </p>
                  <div>
                    <FaTrash
                      className="text-gray-600 cursor-pointer"
                      onClick={() => setOpenModal(true)}
                    />
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

                    <p className="text-gray-700 line-clamp-3 w-[500px]">
                      {product.description}
                    </p>

                    <div className="flex justify-between text-sm pt-2">
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
