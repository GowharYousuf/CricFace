import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingOption, setShippingOption] = useState('Standard shipping - ₹10.00');

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
    calculateTotalPrice(storedCartItems);
  }, []);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.rate, 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = quantity;
    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    calculateTotalPrice(updatedCartItems);
  };

  const handleShippingOptionChange = (option) => {
    setShippingOption(option);
  };

  const getShippingCost = () => {
    if (shippingOption === 'Standard shipping - ₹10.00') {
      return 10;
    } else if (shippingOption === 'COD (Cash On Delivery) - ₹100.00') {
      return 10;
    } else if (shippingOption === 'COD (partial Payment) - ₹') {
      return totalPrice * 0.5; // Partial payment is 50% of the total price
    }
  };

  return (
    <div className="container mx-auto mt-30 bg-dark text-white">
      <div className="sm:flex shadow-md">
        <div className="w-full sm:w-3/4 bg-dark px-10 py-10">
          <div className="flex justify-between border-b pb-8 text-green">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
          </div>
          {cartItems.map((item, index) => (
            <div key={index} className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWL2pETDJZ0fCE1ifi53Anp_0Qh_JzX-4fP2kQBOgnfgLjjOeTNYYgKDipWV1COSBq5I&usqp=CAU"
                  alt="Product"
                  className="h-full object-center object-cover md:block hidden"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWL2pETDJZ0fCE1ifi53Anp_0Qh_JzX-4fP2kQBOgnfgLjjOeTNYYgKDipWV1COSBq5I&usqp=CAU"
                  alt="Product"
                  className="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 md:pt-0 pt-4">RF293</p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-[#00df9a]">{item.itemName}</p>
                  <select
                    aria-label="Select quantity"
                    className="py-2 px-1 border rounded border-white-500 bg-green-600 mr-6 focus:outline-none"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                  >
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 pt-2">Height: 33 inches</p>
                <p className="text-xs leading-3 py-4">Weight: 1.2 kg</p>
                <p className="w-96 text-xs leading-3">{item.desc}</p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline cursor-pointer">Add to favorites</p>
                    <p
                      className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                      onClick={() => handleRemoveItem(index)}
                    >
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none">₹{item.rate}</p>
                </div>
              </div>
            </div>
          ))}
          <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10 text-green">
            <svg className="fill-current mr-2 text-indigo-600 w-4 text-green" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </a>
        </div>
        <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10 bg-dark text-white">
          <h1 className="font-semibold text-2xl border-b pb-8 text-green">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {cartItems.length}</span>
            <span className="font-semibold text-sm">₹{totalPrice}</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select
              className="block p-2 w-full text-sm bg-green-600 text-white rounded-lg"
              value={shippingOption}
              onChange={(e) => handleShippingOptionChange(e.target.value)}
            >
              <option value="Standard shipping - ₹10.00">Standard shipping - ₹10.00</option>
              <option value="COD (Cash On Delivery) - ₹100.00">COD (Cash On Delivery) - ₹100.00</option>
              git clone <repository-url>

              <option value="COD (partial Payment) - ₹">COD (partial Payment) - ₹{totalPrice * 0.4}</option>
            </select>
          </div>

          <div className="border-t mt-8 border-green">
  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
    <span>Total cost</span>
    <span>₹{totalPrice - getShippingCost()}</span>
  </div>
  <button className="bg-green-600 font-semibold py-3 text-sm text-white uppercase w-full">
    Proceed To Checkout
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
