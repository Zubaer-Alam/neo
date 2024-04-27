import React, { useEffect, useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import Button from "../components/Button";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details using the ID
    // Example fetch call:
    fetch(`api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

//   if (!product) {
    if (product) {
    return <div>Loading...</div>;
  }

  return (
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
      <div className="flex justify-center">
        <div>
        <div className="border border-gray-200 rounded-xl mt-6 px-8 py-6 hover:shadow-xl   cursor-pointer">
          <div className="">
            <p className="text-gray-700 text-xl font-semibold">
              {/* {product.name} */}
              hjkahsdjhasjkld
            </p>
          </div>

          <div className="">
            <div className="text-sm text-gray-400 font-semibold">
              <div className="py-1">
                {/* <p>Categories: {product.categories}</p> */}
                <p>Categories: skdjksajd</p>
                <div className="flex gap-1">
                  {/* <p>s
                          Price: <span>{product.price}</span>
                        </p> */}

                  <p>
                    Price: <span>ksjdkjskjd</span>
                  </p>
                </div>
              </div>

              <p className="text-gray-700 line-clamp-3 w-[500px]">
                {/* {product.description} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                cupiditate ratione quae quaerat possimus modi maxime nisi
                recusandae voluptates, deserunt ab, dolores, architecto magnam!
                Ipsa accusantium qui eos placeat inventore?
              </p>
            </div>
          </div>
        </div>



<div className="flex gap-4 items-center justify-end mt-4">
<Button          label="Rent"
                      onClick={() => setOpenModal(false)}
                      textColor="white"
                      bgColor="teal-600"
                      width="small"
                      focusColor="gray-100"
                      hoverColor="green-600"
                      borderColor="green-700"/>
                                <Button          label="Buy"
                      onClick={() => setOpenModal(false)}
                      textColor="white"
                      bgColor="teal-600"
                      width="small"
                      focusColor="gray-100"
                      hoverColor="green-600"
                      borderColor="green-700"/>
</div>
        </div>

 
      </div>
    </section>
  );
}

export default SingleProduct;
