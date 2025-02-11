import React from 'react'

const Checkout = () => {
    return (
        <div>
            <div className="font-[sans-serif] bg-gray-1000 p-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-white inline-block border-b-4 border-white pb-1">Checkout</h2>
                    </div>
                    <div className="mt-12">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-white">01</h3>
                                <h3 className="text-xl font-bold text-white">Personal Details</h3>
                            </div>
                            <div className="md:col-span-2">
                                <form>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <input type="text" placeholder="First name"
                                            className="px-4 py-3.5 bg-gray-800 text-white w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                        <input type="text" placeholder="Last name"
                                            className="px-4 py-3.5 bg-gray-800 text-white w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                        <input type="email" placeholder="Email address"
                                            className="px-4 py-3.5 bg-gray-800 text-white w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                        <input type="number" placeholder="Phone number"
                                            className="px-4 py-3.5 bg-gray-800 text-white w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <div>
                                <h3 className="text-xl font-bold text-white">02</h3>
                                <h3 className="text-xl font-bold text-white">Shopping Address</h3>
                            </div>
                            <div className="md:col-span-2">
                                <form>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <input type="text" placeholder="Street address"
                                            className="px-4 py-3.5 bg-gray-800 text-white w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                        <input type="text" placeholder="City"
                                            className="px-4 py-3.5 bg-gray-800 text-white w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                        <input type="text" placeholder="State"
                                            className="px-4 py-3.5 bg-gray-800 text-white w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                        <input type="number" placeholder="Zip Code"
                                            className="px-4 py-3.5 bg-gray-800 text-white w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <div>
                                <h3 className="text-xl font-bold text-white">03</h3>
                                <h3 className="text-xl font-bold text-white">Payment method</h3>
                            </div>
                            <div className="md:col-span-2">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex items-center">
                                        <input type="radio" className="w-5 h-5 cursor-pointer" id="card" checked />
                                        <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                                            <img src="https://readymadeui.com/images/visa.webp" className="w-12" alt="card1" />
                                            <img src="https://readymadeui.com/images/american-express.webp" className="w-12" alt="card2" />
                                            <img src="https://readymadeui.com/images/master.webp" className="w-12" alt="card3" />
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" className="w-5 h-5 cursor-pointer" id="paypal" />
                                        <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnTI_5_KM5WKKtBBRdTv87xleKniWmGSVerteWEhEWA&s" className="w-20" alt="paypalCard" />
                                        </label>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-4 gap-6 mt-6">
                                    <div className="col-span-2">
                                        <input type="number" placeholder="Card number"
                                            className="px-4 py-3.5 bg-gray-800 text-white w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                    </div>
                                    <input type="number" placeholder="EXP."
                                        className="px-4 py-3.5 bg-gray-800 text-white w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                    <input type="number" placeholder="CVV"
                                        className="px-4 py-3.5 bg-gray-800 text-white w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-end gap-4 mt-12">
                            <button type="button"
                                className="px-6 py-3.5 text-sm bg-transparent border-2 text-white rounded-md hover:bg-gray-700">Pay later</button>
                            <button type="button"
                                className="px-6 py-3.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">Pay now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
