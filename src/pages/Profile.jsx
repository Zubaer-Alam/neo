
import React, { useContext, useEffect, useState } from 'react';
import { Tabs, Tab } from '../components/Tabs';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { tokenData, userIdData } = useContext(AuthContext);
  const [boughtProducts, setBoughtProducts] = useState([]);
  const [soldProducts, setSoldProducts] = useState([]);

  const userId = userIdData;
  console.log(userId)
  useEffect(() => {
    const boughtProducts = async () => {
      try {
        const response = await fetch(`http://162.0.237.97:3000/products/bought/${userId}`, {
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
        console.log(productsData)
        setBoughtProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Display an error using toast.error if you have it configured
      }
    };
  
    boughtProducts(); // Call the function directly since there are no dependencies
  }, []);

  useEffect(() => {
    const soldProducts = async () => {
      try {
        const response = await fetch(`http://162.0.237.97:3000/products/sold/${userId}`, {
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
        console.log(productsData)
        setSoldProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Display an error using toast.error if you have it configured
      }
    };
  
    soldProducts(); // Call the function directly since there are no dependencies
  }, []);
  
  return (
    <div>
      <Tabs>
        <Tab label="Bought">
          <div className="py-4">
          {/* <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {boughtProducts?.map((product) => (
              <div
       
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
                      <p>Categories: {product.category}</p>
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
                      <p>Date posted: {product.createdAt}</p>
                
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          </div>
        </Tab>
        <Tab label="Sold">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">Tab 2 Content</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
              quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
              harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
              Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
              earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
              aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
              aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
              molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum.
            </p>
          </div>
        </Tab>
        <Tab label="Borrowed">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">Tab 3 Content</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
              quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
              harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
              Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
              earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
              aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
              aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
              molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum.
            </p>
          </div>
        </Tab>
        <Tab label="Lent">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">Tab 4 Content</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
              quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
              harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
              Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
              earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
              aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
              aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
              molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum.
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Profile;