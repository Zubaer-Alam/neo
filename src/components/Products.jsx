

import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { FaRegClock, FaTrash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { AiFillEdit } from "react-icons/ai";
import { AuthContext } from "../provider/AuthProvider";
import Input from "../components/Input";
import MultiOptionSelect from "../components/MultiOptionSelect";
import Textarea from "../components/Textarea";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Products = () => {
  const { tokenData, userIdData } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rent, setRent] = useState("");
  const [rent_interval, setRent_interval] = useState("");
  const [productId, setProductId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ category: [] });
  const navigate = useNavigate();
  const [showDates, setShowDates] = useState({});

  useEffect(() => {
    const getMyProductData = async () => {
      try {
        const response = await      fetch(`${import.meta.env.VITE_SERVER}/products/users/${userIdData}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const productsData = await response.json();
        console.log(productsData, "my pro");
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (userIdData) {
      getMyProductData();
    }
  }, [userIdData]);

  const deleteProduct = async () => {
    try {
      const response = await      fetch(`${import.meta.env.VITE_SERVER}/products/${productIdToDelete}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      getMyProductData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleConfirm = async () => {
    await deleteProduct();
    setOpenModal(false);
    window.location.href = "/";
  };

  const handleDeleteClick = (productId) => {
    setProductIdToDelete(productId);
    setOpenModal(true);
  };

  const toggleDescription = (productId) => {
    setExpandedDescriptions({
      ...expandedDescriptions,
      [productId]: !expandedDescriptions[productId],
    });
  };

  const handleEditClick = async (productId) => {
    try {
      const response = await      fetch(`${import.meta.env.VITE_SERVER}/products/${productId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }

      const productData = await response.json();
      setTitle(productData.title);
      setDescription(productData.description);
      setPrice(productData.price);
      setRent(productData.rent);
      setRent_interval(productData.rent_interval);
      setFormData({ category: productData.category });
      setEditingProduct(productId);
      setEditMode(true);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleBackClick = () => {
    setEditingProduct(null);
    setEditMode(false);
  };

  const handleFormSubmit = async () => {
    try {
      const response = await      fetch(`${import.meta.env.VITE_SERVER}/products/${editingProduct}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            price,
            rent,
            rent_interval,
            category: formData.category,
            ownerId: userIdData,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      window.location.href = "/";
      toast.success("Product update successful");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const toggleDates = (productId) => {
    setShowDates((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  if (editMode && editingProduct) {
    return (
      <div>
        <Toaster />
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
            <li className="inline-flex items-center">
              <div
                className="cursor-pointer flex items-center text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
                onClick={handleBackClick}
              >
                My Products
              </div>
              <IoChevronForward className="mx-2 size-4 text-textDeep" />
            </li>
            <li
              className="inline-flex items-center text-gray-400"
              aria-current="page"
            >
              Edit Product
            </li>
          </ol>
          <div>
            <div className="flex justify-between items-center">
              <p className="text-[22px] text-textDeep font-bold">
                Edit Product
              </p>
              <Button
                label="Back to My Products"
                textColor="black"
                bgColor="white"
                width="small"
                focusColor="gray-100"
                hoverColor="teal-900"
                borderColor="black"
                onClick={handleBackClick}
              />
            </div>

            <div className="flex justify-center">
              <div className="border border-gray-200 rounded-xl mt-6 px-8 py-6">
                <div>
                  <Input
                    width="px500"
                    type="text"
                    id="title"
                    label="Title of the product"
                    placeholder=""
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <MultiOptionSelect
                    formData={formData}
                    setFormData={setFormData}
                  />

                  <Textarea
                    width="px500"
                    type="text"
                    id="Description"
                    label="Description of the product"
                    placeholder=""
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <br />
                  <Input
                    width="full"
                    type="text"
                    id="price"
                    label="Product Price"
                    placeholder=""
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />

                  <div className="flex justify-between my-4">
                    <Input
                      width="px350"
                      type="text"
                      id="rent"
                      label="Rent price"
                      placeholder=""
                      value={rent}
                      onChange={(e) => setRent(e.target.value)}
                    />

                    <select
                      value={rent_interval}
                      onChange={(e) => setRent_interval(e.target.value)}
                      className="focus:outline-teal-600 border border-gray-200 rounded-lg text-gray-400 text-sm px-4"
                    >
                      <option>Select Interval</option>
                      <option value="hourly">Hourly</option>
                      <option value="daily">Daily</option>
                    </select>
                  </div>

                  <Button
                    width="full"
                    label="Submit"
                    textColor="white"
                    bgColor="teal-600"
                    focusColor="gray-100"
                    hoverColor="teal-900"
                    borderColor=""
                    onClick={handleFormSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <>
      <div>
        <Modal
          setOpenModal={setOpenModal}
          openModal={openModal}
          title="Delete Product"
          description="Are you sure you want to delete this product?"
          confirmLabel="Delete"
          cancelLabel="Cancel"
          onConfirm={handleConfirm}
        />
      </div>
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
            className="inline-flex items-center text-gray-400"
            aria-current="page"
          >
            My Products
          </li>
        </ol>

        <div className="">
          <div className="justify-between items-center flex">
            <p className="text-[22px] text-textDeep font-bold">My Products</p>
            <Link className="" to="/addProduct">
              <Button
                label="Add Product"
                textColor="white"
                bgColor="teal-600"
                width="small"
                focusColor="gray-100"
                hoverColor="teal-900"
                borderColor=""
              />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {products.length === 0 ? (
              <div className="text-gray-700 font-semibold">
                No products available
              </div>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg border-t border-gray-100"
                >
                  <div className="relative">
                    <div className="absolute top-2.5 right-0 mt-3 mr-5">
                      {product.status === "rented" ? (
                        <div
                          className={`inline-flex items-center bg-blue-800 text-white text-xs font-semibold uppercase px-3 py-1 rounded-full cursor-pointer transition duration-300 ease-in-out ${showDates[product.id] ? "bg-blue-600" : "bg-blue-500"
                            }`}
                          onClick={() => toggleDates(product.id)}
                        >
                          {showDates[product.id] ? (
                            <div className="flex items-center space-x-1">
                              <span>{product.startDate}</span>
                              <span className="mx-1">-</span>
                              <span>{product.endDate}</span>
                            </div>
                          ) : (
                            <span>{product.status}</span>
                          )}
                        </div>
                      ) : (
                        <div className="inline-flex items-center bg-green-700 text-white text-xs font-semibold uppercase px-3 py-1 rounded-full">
                          {product.status}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="px-4 py-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-gray-700">${product.price}</span>
                    </div>
                    <div className="mb-4">
                      {product.category.map((category, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700 mr-2 mb-2"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <p
                      className={`text-gray-600 text-sm ${expandedDescriptions[product.id] ? "" : "line-clamp-3"
                        }`}
                    >
                      {product.description}
                    </p>
                    {product.description.length > 100 && (
                      <button
                        onClick={() => toggleDescription(product.id)}
                        className="text-blue-500 hover:text-blue-600 font-medium mt-2"
                      >
                        {expandedDescriptions[product.id] ? "Show Less" : "Read More"}
                      </button>
                    )}
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-gray-500 text-xs">
                        Date posted: {product.createdAt}
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          className="text-red-500 hover:text-red-600 focus:outline-none"
                          onClick={() => handleDeleteClick(product.id)}
                        >
                          <FaTrash className="h-4 w-4" />
                        </button>
                        <button
                          className="text-gray-600 hover:text-gray-800 focus:outline-none"
                          onClick={() => handleEditClick(product.id)}
                        >
                          <AiFillEdit className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;