import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

Modal.setAppElement('#root');

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [editMode, setEditMode] = useState(false); 
    const [editProductId, setEditProductId] = useState(null); 
    const [payload, setFormData] = useState({
        name: '',
        rate: '',
        desc: ''
    });
    
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        fetch(`${process.env.REACT_APP_MAINURL}/api/user/get_all_products`)
            .then(response => response.json())
            .then(data => setProducts(data.data))
            .catch(error => console.error('Error fetching products:', error));
    };

    const openModal = () => {
        setModalIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalIsOpen(false);
        document.body.style.overflow = '';
        setFormData({ name: '', rate: '', desc: '' }); 
        setErrorMessage('');
        setEditMode(false); 
        setEditProductId(null);
    };

    const saveProduct = (e) => {
        e.preventDefault();
        const { name, rate, desc } = payload;
        if (!name.trim() || !rate.trim() || !desc.trim()) {
            setErrorMessage('Please fill in all fields.');
            return;
        }
        setErrorMessage('');
        const userToken = localStorage.getItem('token');
        let apiUrl = `${process.env.REACT_APP_MAINURL}/api/manager/add_product`;
        if (editMode) {
            apiUrl = `${process.env.REACT_APP_MAINURL}/api/manager/update_product/${editProductId}`;
        }
        fetch(apiUrl, {
            method: editMode ? 'GET' : 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({
                name,
                rate,
                desc
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                closeModal();
                fetchProducts();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDeleteProduct = (product_id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            const userToken = localStorage.getItem('token');
            fetch(`${process.env.REACT_APP_MAINURL}/api/manager/delete_product/${product_id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    fetchProducts();
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    };

    const handleEditProduct = (product_id) => {
        setEditMode(true); 
        setEditProductId(product_id); 
        openModal()
        const userToken = localStorage.getItem('token');
        fetch(`${process.env.REACT_APP_MAINURL}/api/manager/get_prod_details/${product_id}`, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Fetched product details:', data); 
                setFormData({
                    name: data.name || '', 
                    rate: data.rate || '',
                    desc: data.desc || ''
                });
            })
    };
    
    

    return (
        <div className="container mx-auto px-4 text-white">
            <div className="flex justify-between m-3">
                <span className="text-green-500 text-bold  text-2xl px-4 py-2 mt-1 mb-2">My Products</span>
                <button onClick={openModal} className="bg-green-500 text-white px-4 py-2 rounded mt-1 mb-2">Add New Product</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    content: {
                        width: '50%',
                        height: '60%',
                        margin: 'auto',
                        background: 'black',
                        padding: '0',
                    },
                }}
            >
                <form className="p-5 mb-5  h-full" onSubmit={saveProduct}>
                    <div className="mb-4">
                        <h2 className="text-[#00df9a] font-bold text-3xl mb-2">Add Product</h2>
                        <label htmlFor="name" className="block text-sm font-medium text-white">Product Name:</label>
                        <input type="text" id="name" name="name" value={payload.name} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleInputChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rate" className="block text-sm font-medium text-white">Price:</label>
                        <input type="text" id="rate" name="rate" value={payload.rate} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleInputChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="desc" className="block text-sm font-medium text-white">Description:</label>
                        <textarea id="desc" name="desc" value={payload.desc} rows="3" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleInputChange}></textarea>
                    </div>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    <button type="submit" id="submitBtn" className="w-1/4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
                </form>
            </Modal>
            <div className="flex flex-wrap justify-center -m-4">
                {products.map((product, index) => (
                    <div key={product.product_id} className="lg:w-1/4 md:w-2/3 w-full p-4">
                        <div className="border p-4 rounded-md">
                            <Slider dots={true}>
                                {[...Array(4)].map((_, index) => (
                                    <div key={index}>
                                        <img src="https://c8.alamy.com/comp/BH8C78/cricket-bat-BH8C78.jpg" alt="Cricket Bat" className="w-full h-64 object-cover" />
                                    </div>
                                ))}
                            </Slider>
                            <h2 className="text-xl font-bold mt-2 mb-2">Product Name: {product.itemName}</h2>
                            <hr className="my-4 border-gray-300" />
                            <p className="mb-2 text-white-700">Price: <span className='text-[#00df9a]'>₹{product.rate}</span></p>
                            <hr className="my-4 border-gray-300" />
                            <p className="mb-4 text-white-700">Specifications: {product.desc}</p>
                            <hr className="my-4 border-gray-300" />
                            <div className="flex justify-between">
                                {/* Remove the edit button */}
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                    onClick={() => handleDeleteProduct(product.product_id)}
                                >
                                    Delete Product
                                </button>
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded"
                                    onClick={() => handleEditProduct(product.product_id)}
                                >
                                    Edit Product
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProducts;
