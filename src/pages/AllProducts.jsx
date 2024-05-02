// import { IoChevronForward } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { FaTrash } from "react-icons/fa6";

// import { AiFillEdit } from "react-icons/ai";
// import { useEffect, useState } from "react";

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const response = await fetch(`http://162.0.237.97:3000/products`, {
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
//         console.log(productsData)
//         setProducts(productsData);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         // Display an error using toast.error if you have it configured
//       }
//     };
  
//     getProducts(); // Call the function directly since there are no dependencies
//   }, []);
  


//   return (
//     <>
     
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
//            All Products
//           </li>
//         </ol>

//         <div className="">
//           <div className="">
//             <p className="text-[22px] text-textDeep font-bold">All Products</p>
          
//           </div>

//           <div className="grid grid-cols-2 gap-x-8 gap-y-4">
//             {products.map((product) => (
//               <Link 
//               to={`/allProduct/${product.id}`}
//                 key={product.id} // Ensure each product has a unique key
//                 className="border border-gray-200 rounded-xl mt-6 px-8 py-6 hover:shadow-xl  hover:border-teal-600 cursor-pointer"
//               >
//                 <div className="">
//                   <p className="text-gray-700 text-xl font-semibold">
//                     {product.title}
//                   </p>
            
//                 </div>

//                 <div className="">
//                   <div className="text-sm text-gray-400 font-semibold">
//                     <div className="py-1">
//                       <p>Categories: {product.category}</p>
//                       <div className="flex gap-1">
//                         <p>
//                           Price: <span>{product.price}</span>
//                         </p>
//                       </div>
//                     </div>

//                     <p className="text-gray-700 line-clamp-3 w-[500px]">
//                       {product.description}
//                     </p>

//                     <div className="flex justify-between text-sm pt-2">
//                       <p>Date posted: {product.createdAt}</p>
//                       {/* <p>{product.views}</p> */}
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AllProducts;



import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`http://162.0.237.97:3000/products`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
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
  }, []);

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
          <div className="">
            <p className="text-[22px] text-textDeep font-bold">All Products</p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {isLoading ? (
              <div>Loading...</div>
            ) : products.length === 0 ? (
              <div>No products available</div>
            ) : (
              products.map((product) => (
                <Link
                  to={`/allProduct/${product.id}`}
                  key={product.id}
                  className="border border-gray-200 rounded-xl mt-6 px-8 py-6 hover:shadow-xl  hover:border-teal-600 cursor-pointer"
                >
                  <div className="">
                    <p className="text-gray-700 text-xl font-semibold">
                      {product.title}
                    </p>
                  </div>

                  <div className="">
                    <div className="text-sm text-gray-400 font-semibold">
                      <div className="py-1">
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
                        <div className="flex gap-1">
                          <p>
                            Price: <span>{product.price} $</span>
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-700 line-clamp-3 w-[500px]">
                        {product.description}
                      </p>

                      <div className="flex justify-between text-sm pt-2">
                        <p>Date posted: {product.createdAt}</p>
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
