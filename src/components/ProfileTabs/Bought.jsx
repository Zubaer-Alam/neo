import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Bought = () => {
  const { userIdData } = useContext(AuthContext);
  const [boughtProducts, setBoughtProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = userIdData;

  useEffect(() => {
    const fetchBoughtProducts = async () => {
      try {
        const response = await      fetch(`${import.meta.env.VITE_SERVER}//products/bought`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const productsData = await response.json();
        setBoughtProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBoughtProducts();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {boughtProducts.length === 0 ? (
          <p>No bought products available.</p>
        ) : (
          boughtProducts.map((product) => (
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
          ))
        )}
      </div>
    </>
  );
};

export default Bought;
