import React from 'react'
import bat1 from "../assets/bat1.jpeg"; 
const Product = () => {
    return (
        <div>
            <div className="bg-black p-10 mt-0 m-3 rounded-lg shadow-md">
                <div className="bg-white rounded-lg  py-8">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 px-4">
                                <div className="rounded-lg bg-gray-900 dark:bg-gray-700 mb-4">
                                    <div className="relative h-[460px]">
                                        <div className="h-full overflow-hidden">
                                            <div className="product-slider h-full">
                                                <div className="slide h-full">
                                                    <img
                                                        className="w-full h-full object-cover"
                                                        src={bat1}
                                                        alt="Cricket Bat Image 1"
                                                    />
                                                </div>
                                                <div className="slide h-full">
                                                    <img
                                                        className="w-full h-full object-cover"
                                                        src={bat1}
                                                        alt="Cricket Bat Image 2"
                                                    />
                                                </div>
                                                <div className="slide h-full">
                                                    <img
                                                        className="w-full h-full object-cover"
                                                        src={bat1}
                                                        alt="Cricket Bat Image 3"
                                                    />
                                                </div>
                                                <div className="slide h-full">
                                                    <img
                                                        className="w-full h-full object-cover"
                                                        src={bat1}
                                                        alt="Cricket Bat Image 4"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                            <div className="product-slider-nav flex space-x-2">
                                                <div className="slide-nav">
                                                    <img
                                                        className="w-16 h-16 object-cover rounded-full"
                                                        src={bat1}
                                                        alt="Cricket Bat Thumbnail"
                                                    />
                                                </div>
                                                <div className="slide-nav">
                                                    <img
                                                        className="w-16 h-16 object-cover rounded-full"
                                                        src={bat1}
                                                        alt="Cricket Bat Thumbnail"
                                                    />
                                                </div>
                                                <div className="slide-nav">
                                                    <img
                                                        className="w-16 h-16 object-cover rounded-full"
                                                        src={bat1}
                                                        alt="Cricket Bat Thumbnail"
                                                    />
                                                </div>
                                                <div className="slide-nav">
                                                    <img
                                                        className="w-16 h-16 object-cover rounded-full"
                                                        src={bat1}
                                                        alt="Cricket Bat Thumbnail"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-2 mb-4">
                                    <div className="w-1/2 px-2">
                                        <button className="w-full bg-green-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <button className="w-full bg-green-600 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-900 dark:hover:bg-gray-600">Add to Wishlist</button>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex-1 px-4">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-black mb-2">Cricket Bat</h2>
                                <p className="text-black fw-bold text-sm mb-4">
                                    Experience the power and precision of our meticulously crafted cricket bat, designed to elevate your game to new heights.
                                </p>
                                <div className="flex mb-4">
                                    <div className="mr-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-900">Price:</span>
                                        <span className="text-gray-600 dark:text-gray-900">$149.99</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-900">Availability:</span>
                                        <span className="text-gray-600 dark:text-gray-900">In Stock</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-900">Select Grip:</span>
                                    <div className="flex items-center mt-2">
                                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                                        <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                                        <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                                        <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-900">Select Weight:</span>
                                    <div className="flex items-center mt-2">
                                        <button className="bg-gray-900 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">2.8 lbs</button>
                                        <button className="bg-gray-900 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">2.9 lbs</button>
                                        <button className="bg-gray-900 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">3.0 lbs</button>
                                        <button className="bg-gray-900 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">3.1 lbs</button>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-900">Product Description:</span>
                                    <p className="text-gray-600 dark:text-gray-900 text-sm mt-2">
                                        Crafted from the finest willow wood, our cricket bat is designed to deliver unparalleled performance on the pitch. With a carefully balanced weight distribution and a meticulously shaped profile, it offers exceptional power and control for both defensive and offensive shots. Experience the thrill of hitting boundaries with precision and confidence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
