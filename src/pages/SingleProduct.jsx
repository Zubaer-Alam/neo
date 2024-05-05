// import React, { useContext, useEffect, useState } from "react";
// import { IoChevronForward } from "react-icons/io5";
// import { useParams, Link } from "react-router-dom";
// import Button from "../components/Button";
// import Modal from "../components/Modal";
// import { AuthContext } from "../provider/AuthProvider";

// function SingleProduct() {
//   const [openModal, setOpenModal] = useState(false);
//   const [openModal2, setOpenModal2] = useState(false);
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const getMyProductData = async () => {
//       try {
//         const response = await fetch(`http://162.0.237.97:3000/products/${id}`, {
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

//         setProduct(productsData);
//    console.log("jshdjsgdgsd",productsData)
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         // Display an error using toast.error if you have it configured
//       }
//     };

//     if (id) {
//       getMyProductData();
//     }
//   }, [id]);




//   if (!product) {

//     return <div>Loading...</div>;
//   }


//   const [inputValues, setInputValues] = useState({});

//   const handleConfirm = () => {
//     // Handle confirmation action with inputValues
//     console.log('Confirmed with input values:', inputValues);
//     // Reset input values and close modal
//     setInputValues({});
//     setOpenModal(false);
//   };
//   const inputLabels = ['From', 'To']; // Labels corresponding to input fields

//   const inputFields = [
//     { name: 'field1', placeholder: 'Enter Field 1' },
//     { name: 'field2', placeholder: 'Enter Field 2' },
//   ];
//   return (
//     <>  


// <Modal
//         openModal={openModal}
//         setOpenModal={setOpenModal}
//         title="Rent Product"
//         description="Are you sure you want to rent this product?"
//         confirmLabel="Yes"
//         cancelLabel="Cancel"
//         onConfirm={handleConfirm}
//         inputLabels={inputLabels} 
//         inputFields={inputFields} // Pass input fields array to the modal
//       />

// <Modal  setOpenModal={setOpenModal2}    openModal={openModal2}
//         title="Buy Product"
//         description="Are you sure you want to buy this product?"
//         confirmLabel="Yes"
//         cancelLabel="Cancel"
//      />
//     <section section className="lg:px-[65px] px-4">
//       <ol
//         className="flex items-center whitespace-nowrap font-medium md:text-base text-sm  pb-6 md:ps-0 pt-8 "
//         aria-label="Breadcrumb"
//       >
//         <li className="inline-flex items-center">
//           <Link
//             className="flex items-center  text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
//             to="/"
//           >
//             Home
//           </Link>
//           <IoChevronForward className=" mx-2 size-4 text-textDeep" />
//         </li>
//         {/* <li className="inline-flex items-center">
//         <Link
//           className="flex items-center  text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
//           to="#"
//         >
//           Accounts
//         </Link>
//         <IoChevronForward className=" mx-2 size-4 text-textDeep" />
//       </li> */}
//         <li
//           className="inline-flex items-center  text-gray-400 "
//           aria-current="page"
//         >
//           Products
//         </li>
//       </ol>
//       <div className="flex justify-center">
//         <div>
//         <div className="border border-gray-200 rounded-xl mt-6 px-8 py-6 hover:shadow-xl   cursor-pointer">
//           <div className="">
//             <p className="text-gray-700 text-xl font-semibold">
//               {/* {product.name} */}
//               hjkahsdjhasjkld
//             </p>
//           </div>

//           <div className="">
//             <div className="text-sm text-gray-400 font-semibold">
//               <div className="py-1">
//                 {/* <p>Categories: {product.categories}</p> */}
//                 <p>Categories: skdjksajd</p>
//                 <div className="flex gap-1">
//                   {/* <p>s
//                           Price: <span>{product.price}</span>
//                         </p> */}

//                   <p>
//                     Price: <span>ksjdkjskjd</span>
//                   </p>
//                 </div>
//               </div>

//               <p className="text-gray-700 line-clamp-3 w-[500px]">
//                 {/* {product.description} */}
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
//                 cupiditate ratione quae quaerat possimus modi maxime nisi
//                 recusandae voluptates, deserunt ab, dolores, architecto magnam!
//                 Ipsa accusantium qui eos placeat inventore?
//               </p>
//             </div>
//           </div>
//         </div>



// <div className="flex gap-4 items-center justify-end mt-4">
// <Button          label="Rent"
//                       onClick={() => setOpenModal(true)}
//                       textColor="white"
//                       bgColor="teal-600"
//                       width="small"
//                       focusColor="gray-100"
//                       hoverColor="green-600"
//                       borderColor="green-700"/>





//                                 <Button          label="Buy"
//                       onClick={() => setOpenModal2(true)}
//                       textColor="white"
//                       bgColor="teal-600"
//                       width="small"
//                       focusColor="gray-100"
//                       hoverColor="green-600"
//                       borderColor="green-700"/>
// </div>
//         </div>


//       </div>
//     </section> </>
//   );
// }

// export default SingleProduct;

import React, { useContext, useEffect, useState } from "react";
import { IoChevronForward, IoCalendarOutline, IoPricetagsOutline, IoCartOutline } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { AuthContext } from "../provider/AuthProvider";
import { Toaster, toast } from 'react-hot-toast';

function SingleProduct() {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [inputValues, setInputValues] = useState({});
  const { tokenData, userIdData } = useContext(AuthContext);

  const handleRentClick = () => {
    if (tokenData) {
      setOpenModal(true);
    } else {
      toast.error("Please log in first to rent the product.");
    }
  };

  const handleBuyClick = () => {
    if (tokenData) {
      setOpenModal2(true);
    } else {
      toast.error("Please log in first to buy the product.");
    }
  };

  useEffect(() => {
    const getMyProductData = async () => {
      try {
        const response = await fetch(`http://162.0.237.97:3000/products/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const productsData = await response.json();
        setProduct(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (id) {
      getMyProductData();
    }
  }, [id]);

  const productId = product?.id;
  const buyerId = userIdData;
  const renterId = userIdData;

  const buyProduct = async () => {
    try {
      const response = await fetch('http://162.0.237.97:3000/products/buy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, buyerId, startDate: inputValues.startDate, endDate: inputValues.endDate }),
      });

      if (!response.ok) {
        throw new Error('Buy failed');
      }

      toast.success('Buy successful');
      window.location.href = "/";
    } catch (error) {
      toast.error('Buy failed');
    }
  };

  const rentProduct = async (inputValues) => {
    try {
      const response = await fetch('http://162.0.237.97:3000/products/rent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          renterId,
          startDate: inputValues.startDate,
          endDate: inputValues.endDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Rent failed');
      }

      toast.success('Rent successful');
      window.location.href = "/";
    } catch (error) {
      toast.error('Rent failed');
    }
  };

  const handleConfirm = (inputValues) => {
    rentProduct(inputValues);
    setInputValues({});
    setOpenModal(false);
  };

  const inputLabels = ['From', 'To'];
  const inputFields = [
    { name: 'startDate', placeholder: 'Enter Start Date', type: 'date' },
    { name: 'endDate', placeholder: 'Enter End Date', type: 'date' },
  ];

  if (!product) {
    return <div className="flex justify-center mt-20 font-semibold">Loading...</div>;
  }

  return (
    <>
      <Toaster />
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title="Rent Product"
        description="Are you sure you want to rent this product?"
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        onConfirm={(inputValues) => handleConfirm(inputValues)}
        inputLabels={inputLabels}
        inputFields={inputFields}
      />

      <Modal
        setOpenModal={setOpenModal2}
        openModal={openModal2}
        title="Buy Product"
        description="Are you sure you want to buy this product?"
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        onConfirm={buyProduct}
      />

      <section className="lg:px-[65px] px-4 py-16">
        <ol className="flex items-center whitespace-nowrap font-medium md:text-base text-sm mb-8" aria-label="Breadcrumb">
          <li className="inline-flex items-center">
            <Link to="/" className="text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600">
              Home
            </Link>
            <IoChevronForward className="mx-2 text-textDeep" />
          </li>
          <li className="inline-flex items-center">
            <Link to="/allProducts" className="text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600">
              All Products
            </Link>
            <IoChevronForward className="mx-2 text-textDeep" />
          </li>
          <li className="text-gray-400" aria-current="page">
            {product.title}
          </li>
        </ol>

        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {product.category.map((category, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <IoPricetagsOutline className="mr-2 text-xl text-green-600" />
                <p className="text-gray-700 text-lg font-semibold">Price: ${product.price}</p>
              </div>
              {product.rent && (
                <div className="flex items-center">
                  <IoCalendarOutline className="mr-2 text-xl text-blue-600" />
                  <p className="text-gray-700 text-lg font-semibold">Rent: ${product.rent} {product.rent_interval}</p>
                </div>
              )}
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-8">{product.description}</p>
            <div className="flex justify-end gap-4">
              {product.rent_sell === 1 && (
                <Button
                  label="Buy"
                  onClick={handleBuyClick}
                  textColor="white"
                  bgColor="blue-600"
                  width="medium"
                  focusColor="blue-700"
                  hoverColor="blue-700"
                  borderColor="blue-600"
                />
              )}
              {product.rent_sell === 2 && (
                <Button
                  label="Rent"
                  onClick={handleRentClick}
                  textColor="white"
                  bgColor="green-600"
                  width="medium"
                  focusColor="green-700"
                  hoverColor="green-700"
                  borderColor="green-600"
                />
              )}
              {product.rent_sell === 3 && (
                <>
                  <Button
                    label="Rent"
                    onClick={handleRentClick}
                    textColor="white"
                    bgColor="green-700"
                    width="medium"
                    focusColor="green-700"
                    hoverColor="green-700"
                    borderColor="green-700"
                  />
                  <Button
                    label="Buy"
                    onClick={handleBuyClick}
                    textColor="white"
                    bgColor="blue-800"
                    width="medium"
                    focusColor="blue-700"
                    hoverColor="blue-700"
                    borderColor="blue-600"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;