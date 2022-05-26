import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddAProduct = () => {

    const addProduct = (e) => {
        e.preventDefault();
        const data = {
            name: e.target[0].value,
            img: e.target[1].value,
            description: e.target[2].value,
            minimum_order: e.target[5].value,
            available_quantity: e.target[4].value,
            price: e.target[3].value,
            category: e.target[6].value,
        };
        const url = 'http://localhost:5000/products';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Product added');
                e.target[0].value = ' ';
                e.target[1].value = ' ';
                e.target[2].value = ' ';
                e.target[5].value = ' ';
                e.target[4].value = ' ';
                e.target[3].value = ' ';
                e.target[6].value = ' ';
            });

    }
    return (
        <div className='w-[360px] mx-auto mt-8 bg-white drop-shadow-lg px-4 py-8'>
            <div>
                <h1 className='text-center text-xl font-bold mb-6'>Product Information</h1>
                <form onSubmit={addProduct} >
                    <input className='border-2 mb-4 px-4 py-2' type="text" placeholder='Product Name' />
                    <input className='border-2 mb-4 px-4 py-2' type="text" placeholder='Image URL' />
                    <input className='border-2 mb-4 px-4 py-2' type="text" placeholder='Description' />
                    <input className='border-2 mb-4 px-4 py-2' type="number" placeholder='Price' />
                    <input className='border-2 mb-4 px-4 py-2' type="number" placeholder='Available Quantity' />
                    <input className='border-2 mb-4 px-4 py-2' type="number" placeholder='Minimum Order Quantity' />
                    <select className='border-2 mb-4 px-4 py-2 w-full'>
                        <option disabled selected>Select Category</option>
                        <option>frame</option>
                        <option>wheel</option>
                        <option>front set</option>
                        <option>brakes</option>
                        <option>others</option>
                    </select>
                    <input className='btn btn-secondary mb-4 px-4 py-2' type="submit" value='Submit' />
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddAProduct;