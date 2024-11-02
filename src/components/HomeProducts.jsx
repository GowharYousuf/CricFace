import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
        setProducts(responseData.data);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleBuyNow = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log('Selected product:', product);
    navigate('/cart');
  };

  const convertPathToUrl = (path) => {
    const baseUrl = process.env.REACT_APP_MAINURL;
    return path.replace("http://127.0.0.1:5001", baseUrl);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className='w-full pt-[50rem] pb-[10rem] px-4 bg-black-700'>
        {products.map((product, index) => (
          <div className='rounded' key={index}>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-0 my-4'>
              <div className='w-full shadow-xl bg-gray-100 flex flex-col p-1 md:my-0'>
                <Carousel showThumbs={false} autoPlay infiniteLoop>
                  <div>
                  <img 
  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8jTjDBGsmWBGilSck5zKhKVCu7Jmlm7cueASKjC28bgt-tWZuM_lSq-BlvGqPwXoy5U&usqp=CAU`} 
  alt="Primary" 
/>

                  </div>
                  {product.data.sec_img.map((image, i) => (
                    <div key={i}>
                      <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eVMTXPJNzsqL363ktxv3BiR0iu8xZpj77A&s`} />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded'>
                <h2 className='text-3xl font-bold text-[#00df9a]'>{product.itemName}</h2>
                <p className='text-left text-2xl font-bold mt-3 text-gray-600'>Price: ₹{product.rate}</p>
                <p className='text-left text-1xl font-bold mt-3 text-gray-600'>{product.desc}</p>
                <button
                  className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-2 mx-auto px-2 py-3'
                  onClick={() => handleBuyNow(product)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
