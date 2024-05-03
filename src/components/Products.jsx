// import { IoChevronForward } from "react-icons/io5";
// import { Link, useNavigate } from "react-router-dom";
// import Modal from "./Modal";
// import { FaTrash } from "react-icons/fa6";
// import { useContext, useEffect, useState } from "react";
// import Button from "./Button";
// import { AiFillEdit } from "react-icons/ai";
// import { AuthContext } from "../provider/AuthProvider";
// const Products = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const { userIdData } = useContext(AuthContext);
//   console.log(userIdData)
//   useEffect(() => {
//     const getMyProductData = async () => {
//       try {
//         const response = await fetch(`http://162.0.237.97:3000/products/users/${userIdData}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Sign In failed');
//         }

//         // If response is successful, you might want to handle the data here
//         const data = await response.json();
//         console.log(data); // Logging the data for further processing

//       } catch (error) {
//         // Handling network errors or unexpected errors
//         console.error('Error signing in:', error);
//         toast.error('Sign In failed');
//       }
//     };

//     // Call getMyProductData when userIdData changes
//     if (userIdData) {
//       getMyProductData();
//     }
//   }, [userIdData]); // Add userIdData as a dependency

// import { IoChevronForward } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import Modal from "./Modal";
// import { FaTrash } from "react-icons/fa6";
// import { useContext, useEffect, useState } from "react";
// import Button from "./Button";
// import { AiFillEdit } from "react-icons/ai";
// import { AuthContext } from "../provider/AuthProvider";

// const Products = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const [products, setProducts] = useState([]); // State to store products
//   const { userIdData } = useContext(AuthContext);
//   const [productIdToDelete, setProductIdToDelete] = useState(null);

//   useEffect(() => {
//     const getMyProductData = async () => {
//       try {
//         const response = await fetch(`http://162.0.237.97:3000/products/users/${userIdData}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }

//         // If response is successful, parse the products and set them in state
//         const productsData = await response.json();
//         setProducts(productsData);
//         console.log(productsData[0].id,"ssususu")

//       } catch (error) {
//         console.error('Error fetching products:', error);
//         // Display an error using toast.error if you have it configured
//       }
//     };

//     if (userIdData) {
//       getMyProductData();
//     }
//   }, [userIdData]);

//   const deleteProduct = async () => {
//     try {
//       const response = await fetch(`http://162.0.237.97:3000/products/${productsData.id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete product');
//       }

//       // Optionally, you might want to refetch the products after deletion
//       getMyProductData();

//     } catch (error) {
//       console.error('Error deleting product:', error);
//       // Display an error using toast.error if you have it configured
//     }
//   };

//   const handleConfirm = () => {
//     deleteProduct();
//     setOpenModal(false); // Close the modal after deletion
//   };

//   return (
//     <>

//       <div>
//         <Modal  setOpenModal={setOpenModal}         openModal={openModal}
//         title="Delete Product"
//         description="Are you sure you want to delete this product?"
//         confirmLabel="Delete"
//         cancelLabel="Cancel"
//         onConfirm={handleConfirm}
//      />
//       </div>
//       <section section className="lg:px-[65px] px-4">
//         <ol
//           className="flex items-center whitespace-nowrap font-medium md:text-base text-sm  pb-6 md:ps-0 pt-8 "
//           aria-label="Breadcrumb"
//         >
//           <li className="inline-flex items-center">
//             <Link
//               className="flex items-center  text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
//               to="/"
//             >
//               Home
//             </Link>
//             <IoChevronForward className=" mx-2 size-4 text-textDeep" />
//           </li>
//           {/* <li className="inline-flex items-center">
//             <Link
//               className="flex items-center  text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
//               to="#"
//             >
//               Accounts
//             </Link>
//             <IoChevronForward className=" mx-2 size-4 text-textDeep" />
//           </li> */}
//           <li
//             className="inline-flex items-center  text-gray-400 "
//             aria-current="page"
//           >
//             Products
//           </li>
//         </ol>

//         <div className="">
//           <div className="justify-between flex">
//             <p className="text-[22px] text-textDeep font-bold">My Products</p>
//             <Link className="" to="/addProduct">
//               {" "}
//               <Button label="Add Product"
//                       textColor="white"
//                       bgColor="teal-600"
//                       width="small"
//                       focusColor="gray-100"
//                       hoverColor="teal-900"
//                       borderColor="" />
//             </Link>
//           </div>

//           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-3">
//             {products.map((product) => (
//               <div
//                 key={product.id} // Ensure each product has a unique key
//                 className="border border-gray-200 rounded-xl mt-6 md:px-8 px-4 py-6"
//               >
//                 <div className="flex justify-between">
//                   <p className="text-gray-700 md:text-xl text-lg font-semibold">
//                     {product.title}
//                   </p>
//                   <div className="flex items-center gap-3">
//                     <FaTrash
//                       className="text-gray-600 cursor-pointer"
//                       onClick={() => setOpenModal(true)}
//                     />

//                     <Link to="/editProduct">
//                       <AiFillEdit className="text-gray-600 cursor-pointer text-xl" />
//                     </Link>
//                   </div>
//                 </div>

//                 <div className="">
//                   <div className="text-sm text-gray-400 font-semibold">
//                     <div className="py-1">
//                     <p>Categories: {product.category.map((categories, index) => (
//       <span key={index}>{categories}</span>
//     ))}</p>
//                       <div className="flex gap-1">
//                         <p>
//                           Price: <span>{product.price}</span>
//                         </p>
//                       </div>
//                     </div>

//                     <p className="text-gray-700 md:text-base text-sm line-clamp-3">
//                       {product.description}
//                     </p>

//                     <div className="flex justify-between md:text-sm text-xs pt-2">
//                       <p>Date posted: {product.createdAt}</p>
//                       {/* <p>{product.views}</p> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Products;

import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { FaRegClock, FaTrash } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { AiFillEdit } from "react-icons/ai";
import { AuthContext } from "../provider/AuthProvider";

const Products = () => {
  const { tokenData, userIdData } = useContext(AuthContext);

  // if (!tokenData) {
  //   window.location.href ="/signIn"
  // }
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]); // State to store products
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  useEffect(() => {
    const getMyProductData = async () => {
      try {
        const response = await fetch(
          `http://162.0.237.97:3000/products/users/${userIdData}`,
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

        // If response is successful, parse the products and set them in state
        const productsData = await response.json();
        console.log(productsData, "my pro");
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Display an error using toast.error if you have it configured
      }
    };

    if (userIdData) {
      getMyProductData();
    }
  }, [userIdData]);

  const deleteProduct = async () => {
    try {
      const response = await fetch(
        `http://162.0.237.97:3000/products/${productIdToDelete}`,
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

      // Optionally, you might want to refetch the products after deletion
      getMyProductData();
    } catch (error) {
      console.error("Error deleting product:", error);
      // Display an error using toast.error if you have it configured
    }
  };

  // const handleConfirm = () => {
  //   deleteProduct();
  //   setOpenModal(false);
  //    // Close the modal after deletion
  // };

  const handleConfirm = async () => {
    await deleteProduct();
    setOpenModal(false);
    window.location.href = "/"; // Navigate to the home page after deletion
  };

  const handleDeleteClick = (productId) => {
    setProductIdToDelete(productId);
    setOpenModal(true);
  };
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (productId) => {
    setExpandedDescriptions({
      ...expandedDescriptions,
      [productId]: !expandedDescriptions[productId],
    });
  };

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

          {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-xl mt-6 md:px-8 px-4 py-6"
              >
                <div className="flex justify-between">
                  <p className="text-gray-700 md:text-xl text-lg font-semibold">
                    {product.title}
                  </p>
                  <div className="flex items-center gap-3">
                    <FaTrash
                      className="text-gray-600 cursor-pointer"
                      onClick={() => handleDeleteClick(product.id)}
                    />
                    <Link to="/editProduct">
                      <AiFillEdit className="text-gray-600 cursor-pointer text-xl" />
                    </Link>
                  </div>
                </div>

                <div className="">
                  <div className="text-sm text-gray-400 font-semibold">
                    <div className="py-1">
                      <p>
                        Categories:{" "}
                        {product.category.map((categories, index) => (
                          <span key={index}>{categories}</span>
                        ))}
                      </p>
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
                      <p>Date posted: {product.createdAt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-3">
            {products.length === 0 ? (
              <div className="text-gray-700 font-semibold">
                No products available
              </div>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 shadow-lg drop-shadow-sm rounded-xl mt-6 md:px-8 px-4 py-6 relative"
                >
                  {/* <div className="absolute -start-2 -top-[50px]">
                    <div className="mx-auto my-14 flex justify-center items-center gap-2 relative">
                      <span
                        className={`capitalize text-white bg-blue-900 text-xs font-medium px-3.5 py-1 border`}
                      >
                        {product.status}
                      </span>

                 <div className="show flex gap-2 items-center">
                 <p className="text-xs" >
                        {product.startDate}
                      </p>
                      <p className="text-xs">to</p>
                      <p className="text-xs">
                        {product.endDate}
                      </p>
                 </div>
                    </div>
                  </div> */}

<div className="absolute -start-2 -top-[50px]">
  <div className="mx-auto my-14 flex justify-center items-center gap-2 relative">
    <span className={`capitalize text-white bg-blue-900 text-xs font-medium px-3.5 py-1 border`}>
      {product.status}
    </span>

    {/* Conditional rendering for the 'show' div */}
    {product.status === 'rented' && (
      <div className="show flex gap-2 items-center">
        <p className="text-xs">{product.startDate}</p>
        <p className="text-xs">to</p>
        <p className="text-xs">{product.endDate}</p>
      </div>
    )}
  </div>
</div>


                  <div className="flex justify-between">
                    <p className="text-gray-700 text-[16px] font-semibold mt-3">
                      {product.title}
                      <span class="bg-gray-100 text-gray-800 border text-xs font-medium ms-2 px-2.5 py-0.5 rounded-full ">
                        {product.price} $
                      </span>
                    </p>
                    {/* <div className="flex items-center gap-3">
            <FaTrash
              className="text-gray-600 cursor-pointer"
              onClick={() => handleDeleteClick(product.id)}
            />
            <Link to="/editProduct">
              <AiFillEdit className="text-gray-600 cursor-pointer text-xl" />
            </Link>
          </div> */}
                  </div>

                  <div className="">
                    <div className="text-sm text-gray-400 font-semibold">
                      <div className="flex flex-wrap items-center gap-2 my-4">
                        {product.category.map((categories, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                          >
                            {categories}
                          </span>
                        ))}
                      </div>

                      {/* <div className="pb-2">
                <p>
                  Price: <span>{product.price}</span>
                </p>
              </div>
           */}

                      {/* Description */}
                      <p
                        className={`text-gray-700 text-sm font-normal text-justify ${
                          expandedDescriptions[product.id] ? "" : "line-clamp-3"
                        }`}
                      >
                        {product.description}
                      </p>
                      {/* Read more button */}
                      {product.description.length > 100 && (
                        <button
                          onClick={() => toggleDescription(product.id)}
                          className="text-teal-500 hover:underline"
                        >
                          {expandedDescriptions[product.id]
                            ? "Show Less"
                            : "Read More"}
                        </button>
                      )}
                      <div className="">
                        <div className="flex justify-between md:text-sm text-xs pt-2">
                          <p>Date posted: {product.createdAt}</p>

                          <div className="flex items-center gap-3">
                            <FaTrash
                              className="text-gray-600 cursor-pointer"
                              onClick={() => handleDeleteClick(product.id)}
                            />
                            <Link to="/editProduct">
                              <AiFillEdit className="text-gray-600 cursor-pointer text-xl" />
                            </Link>
                          </div>
                        </div>
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
