import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_MAINURL}/api/user/get_all_products`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        const data = responseData.data;
        setProducts(data);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleBuyNow = (product) => {
    // Add the selected product to localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log('Selected product:', product);
    navigate('/cart');
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className='w-full pt-[50rem] pb-[10rem] px-4 bg-black'>
        {products.map((product, index) => (
          <div key={index} className='max-w-[1240px] rounded-lg mx-auto grid md:grid-cols-2 gap-0 my-4'>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 hover:scale-105 duration-300'>
              <img
                className='w-70 mx-auto mt-[1rem] bg-transparent'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWL2pETDJZ0fCE1ifi53Anp_0Qh_JzX-4fP2kQBOgnfgLjjOeTNYYgKDipWV1COSBq5I&usqp=CAU"
                alt="/"
              />
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col items-center justify-center p-4 md:my-0 my-4 h'>
              <h2 className='text-center text-3xl font-bold text-[#00df9a]'>{product.itemName}</h2>
              <p className='text-left text-2xl font-bold mt-3 text-gray-600'>Price: ₹{product.rate}</p>
              <p className='text-left text-2xl font-bold mt-3 text-gray-600'>Quantity: {product.quantity}</p>
              <p className='text-left text-1xl font-bold mt-3 text-gray-600'>{product.desc}</p>
              <button
                className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
                onClick={() => handleBuyNow(product)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;