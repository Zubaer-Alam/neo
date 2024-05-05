


import React, { useContext, useEffect, useState } from "react";
import { IoChevronForward } from "react-icons/io5";
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
        const response = await  fetch(`${import.meta.env.VITE_SERVER}/products/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        // If response is successful, parse the products and set them in state
        const productsData = await response.json();
        const rent_sell_logic = productsData.rent_sell
   
        setProduct(productsData);
        console.log("jshdjsgdgsd",productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Display an error using toast.error if you have it configured
      }
    };

    if (id) {
      getMyProductData();
    }
  }, [id]);

  const productId = product?.id;
  const buyerId = userIdData;
  const renterId = userIdData;
  console.log(renterId,"gshdsgdgsaudgasiugdiu")
const buyProduct = async () => {    
    try {
      const response = await fetch('http://162.0.237.97:3000/products/buy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, buyerId ,      startDate: inputValues.startDate,
          endDate: inputValues.endDate,}),
      });

      if (!response.ok) {
        throw new Error('Sign In failed');
      }

      const data = await response.json();

      toast.success('Sign In successful');
      window.location.href ="/"
  
    } catch (error) {
      toast.error('Incorrect email or password');
    }
  };

  
console.log(inputValues.field2 )
// const rentProduct = async ({inputValues}) => {    
//   console.log('Input Values:', inputValues);
//     try {
//       const response = await fetch('http://162.0.237.97:3000/products/rent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ productId, renterId,   startDate: inputValues.field1,
//           endDate: inputValues.field2  }),
//       });

//       if (!response.ok) {
//         throw new Error('Sign In failed');
//       }

//       const data = await response.json();

//       toast.success('Sign In successful');
//       window.location.href ="/"
  
//     } catch (error) {
//       toast.error('Incorrect email or password');
//     }
//   };

const rentProduct = async (inputValues) => {
  console.log('Input Values:', inputValues);
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
    toast.success('Rent Successful');
    // Rest of the code...
  } catch (error) {
    toast.error('Rent failed');
    toast.error('Server Issue');
  }
};


  const handleConfirm = (inputValues) => {
    // Handle confirmation action with inputValues
    console.log('Confirmed with input values:', inputValues);
    // Reset input values and close modal
    rentProduct(inputValues);
    setInputValues({});
    setOpenModal(false);
  };

  const inputLabels = ['From', 'To']; // Labels corresponding to input fields
  const inputFields = [
    { name: 'startDate', placeholder: 'Enter Start Date', type: 'date' },
    { name: 'endDate', placeholder: 'Enter End Date', type: 'date' },
  ];

  if (!product) {
    return <div className="flex justify-center mt-20 font-semibold">
      
 Laoding ...</div>;
  }

  return (
    <>
    <Toaster/>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title="Rent Product"
        description="Are you sure you want to rent this product?"
        confirmLabel="Yes"
        cancelLabel="Cancel"
        onConfirm={(inputValues) => handleConfirm(inputValues)}
        inputLabels={inputLabels}
        inputFields={inputFields} // Pass input fields array to the modal
      />

      <Modal
        setOpenModal={setOpenModal2}
        openModal={openModal2}
        title="Buy Product"
        description="Are you sure you want to buy this product?"
        confirmLabel="Yes"
        cancelLabel="Cancel"
        onConfirm={buyProduct}
      />
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
          to="/allProducts"
        >
          All Products
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
      <div className="flex justify-center">
        <div>
        <div className="border max-w-3xl border-gray-200 rounded-xl mt-6 px-8 py-6 hover:shadow-xl   cursor-pointer">
          <div className="">
            <p className="text-gray-700 text-xl font-semibold">
              {product.title}
          
            </p>
          </div>

          <div className="">
            <div className="text-sm text-gray-400 font-semibold">
              <div className="py-1">
                <p>Categories: {product.category}</p>
       
                <div className="flex gap-1">
                  <p>
                          Price: <span>{product.price}</span>
                        </p>

                 
                </div>
              </div>

              <p className="text-gray-700 line-clamp-3">
                {product.description}
      
              </p>
            </div>
          </div>
        </div>
            {/* <div className="flex gap-4 items-center justify-end mt-4">
              <Button
                label="Rent"
                onClick={() => setOpenModal(true)}
                textColor="white"
                bgColor="teal-600"
                width="small"
                focusColor="gray-100"
                hoverColor="green-600"
                borderColor="green-700"
              />

              <Button
                label="Buy"
                onClick={() => setOpenModal2(true)}
                textColor="white"
                bgColor="teal-600"
                width="small"
                focusColor="gray-100"
                hoverColor="green-600"
                borderColor="green-700"
              />
            </div> */}

<div className="flex gap-4 items-center justify-end mt-4">
  {product.rent_sell === 1 && (
    <Button
      label="Buy"
      onClick={handleBuyClick}
      textColor="white"
      bgColor="teal-600"
      width="small"
      focusColor="gray-100"
      hoverColor="green-600"
      borderColor="green-700"
    />
  )}
  {product.rent_sell === 2 && (
    <Button
      label="Rent"
      onClick={handleRentClick}
      textColor="white"
      bgColor="teal-600"
      width="small"
      focusColor="gray-100"
      hoverColor="green-600"
      borderColor="green-700"
    />
  )}
  {product.rent_sell === 3 && (
    <>
      <Button
        label="Rent"
        onClick={handleRentClick}
        textColor="white"
        bgColor="teal-600"
        width="small"
        focusColor="gray-100"
        hoverColor="green-600"
        borderColor="green-700"
      />
      <Button
        label="Buy"
        onClick={handleBuyClick}
        textColor="white"
        bgColor="teal-600"
        width="small"
        focusColor="gray-100"
        hoverColor="green-600"
        borderColor="green-700"
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