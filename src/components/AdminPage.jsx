import React, { useState } from 'react';

function AdminPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const products = [
        { id: 1, name: 'Product 1', orders: [{ name: 'John Doe', status: 'Pending', paymentStatus: 'Paid' }] },
        { id: 2, name: 'Product 2', orders: [{ name: 'Jane Smith', status: 'Delivered', paymentStatus: 'Pending' }] },
        { id: 3, name: 'Product 3', orders: [{ name: 'Alice Johnson', status: 'Processing', paymentStatus: 'Paid' }] },
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.id.toString().includes(searchTerm) ||
            product.orders.some(order =>
                order.name.toLowerCase().includes(searchTerm) ||
                order.status.toLowerCase().includes(searchTerm) ||
                order.paymentStatus.toLowerCase().includes(searchTerm)
            )
        );
        setFilteredProducts(filteredProducts);
    };


    const productsToDisplay = searchTerm ? filteredProducts : products;

    return (
        <div className="container mx-auto mb-3 ">
            <h3 className="text-white text-3xl font-medium">My Orders</h3>
            <div className="mt-4">
                <div className="mt-6">
                    <div className="container mx-auto flex justify-between items-center m-3 p-4">
                        <input
                            type="text"
                            className="w-64 border border-gray-300 rounded-md py-2 px-3"
                            placeholder="Search by product name..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <button
                            className="w-40 bg-blue-500 text-white font-semibold py-2 px-3 rounded-md hover:bg-blue-700"
                            // onClick={handleAddProduct}
                        >
                            Add New Product
                        </button>
                    </div>


                    <table className="w-3/4 table-auto container p-10 m-4">
                        <thead>
                            <tr className="bg-indigo-800 text-left text-gray-100">
                                <th className="py-4 px-6 pl-2 font-medium uppercase text-sm">ID</th>
                                <th className="py-4 px-6 pl-2 font-medium uppercase text-sm">Product Name</th>
                                <th className="py-4 px-6 pl-2 font-medium uppercase text-sm">Ordered By</th>
                                <th className="py-4 px-6 pl-2 font-medium uppercase text-sm">Status</th>
                                <th className="py-4 px-6 pl-2 font-medium uppercase text-sm">Payment Status</th>
                                <th className="py-4 px-6 pl-2 font-medium uppercase text-sm">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productsToDisplay.map(product => (
                                <tr key={product.id} className="bg-white text-gray-700" style={{ marginLeft: '20px' }}>
                                    <td className="py-2 px-6 border-b border-gray-200 text-lg">{product.id}</td>
                                    <td className="py-2 px-6 border-b border-gray-200">{product.name}</td>
                                    <td className="py-2 px-6 border-b border-gray-200">
                                        {product.orders.map((order, index) => (
                                            <div key={index}>{order.name}</div>
                                        ))}
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200">
                                        {product.orders.map((order, index) => (
                                            <div key={index}>{order.status}</div>
                                        ))}
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200">
                                        {product.orders.map((order, index) => (
                                            <div key={index}>{order.paymentStatus}</div>
                                        ))}
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200">
                                        <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Order</h3>
                                        <div className="mt-2">
                                            {/* Add your form elements here for editing order */}
                                            <button onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminPage;
