


import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import MultiOptionSelect from "../components/MultiOptionSelect";
import Textarea from "../components/Textarea";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

const EditProduct = () => {
  const [formData, setFormData] = useState({
    category: "",
  });

  const { userIdData } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [rent, setRent] = useState('');
  const [rent_interval, setRent_interval] = useState('');
  const [productId, setProductId] = useState(null);

  const navigate = useNavigate();
  const [product, setProducts] = useState([]); // State to store products
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await      fetch(`${import.meta.env.VITE_SERVER}/products/users/${userIdData}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }



        const productsData = await response.json();
        console.log(productsData, "my pro");
        setProducts(productsData);
        
        setTitle(product.title);
        setDescription(product.description);
        setPrice(product.price);
        setRent(product.rent);
        setRent_interval(product.rent_interval);
        setFormData({ category: product.category });
        setProductId(product.id);

      } catch (error) {
        console.error('Error fetching product:', error);
        // Handle error
      }
    };

    if (userIdData) {
      getProductData();
    }
  }, [userIdData]);

  const handleFormSubmit = async () => {

    try {
      const response = await      fetch(`${import.meta.env.VITE_SERVER}/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          price,
          rent,
          rent_interval,
          category: formData.category,
          ownerId: userIdData
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      navigate('/'); // Redirect to home page after successful update

    } catch (error) {
      console.error('Error updating product:', error);
      // Handle error
    }
  };

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
        <div>
          <div>
            <p className="text-[22px] text-textDeep font-bold">Edit Product</p>
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
                  onClick={() => handleFormSubmit()} // Pass product data here
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProduct;
