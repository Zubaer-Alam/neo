import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userIdData, isUserDataLoaded } = useContext(AuthContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (!isUserDataLoaded) {
          return;
        }

        const response = await fetch(`${import.meta.env.VITE_SERVER}/products/getAll`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: userIdData }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, [isUserDataLoaded, userIdData]);

  return (
    <>
      <section className="lg:px-[65px] px-4">
        <ol
          className="flex items-center whitespace-nowrap font-medium md:text-base text-sm pb-6 md:ps-0 pt-8"
          aria-label="Breadcrumb"
        >
          <li className="inline-flex items-center">
            <Link
              className="flex items-center text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
              to="/"
            >
              Home
            </Link>
            <IoChevronForward className="mx-2 size-4 text-textDeep" />
          </li>
          <li
            className="inline-flex items-center  text-gray-400 "
            aria-current="page"
          >
            All Products
          </li>
        </ol>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <div>Loading...</div>
            ) : products.length === 0 ? (
              <div>No products available</div>
            ) : (
              products.map((product) => (
                <Link
                  to={`/allProduct/${product.id}`}
                  key={product.id}
                  className="bg-white rounded-b-xl shadow-md hover:shadow-lg transition duration-300 border-t rounded-lg border-blue-700 flex flex-col"
                >
                  <div className="flex-grow px-8 py-6">
                    <div className="font-bold text-lg mb-2 text-gray-800 transition duration-300">
                      {product.title}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {product.category.map((category, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <span className="text-gray-600 font-bold text-base mr-1">Price:</span>
                        <span className="text-green-600 font-bold text-lg">${product.price}</span>
                      </div>
                      {product.rent && (
                        <div className="flex items-center">
                          <span className="text-gray-600 font-bold text-base mr-1">Rent:</span>
                          <span className="text-blue-600 font-bold text-lg">
                            ${product.rent} {product.rent_interval}
                          </span>
                        </div>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      id={`description-toggle-${product.id}`}
                      className="hidden"
                    />
                    <p
                      className={`text-gray-700 text-sm ${product.descriptionExpanded ? "" : "line-clamp-3"} mb-3`}
                    >
                      {product.description}
                    </p>
                  </div>
                  <div className="px-8 py-4 bg-gray-100 mt-auto">
                    <div className="flex justify-between items-center text-xs text-gray-600">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{product.ownerName}</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{product.createdAt}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

        </div>
      </section>

    </>
  );
};


export default AllProducts;