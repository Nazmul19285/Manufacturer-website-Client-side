import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddAProduct = () => {
    const [image, setImage] = useState();
    const imgbbApiKey = 'add0d86c38ce27616ee9ee02db1cabe3';

    const uploadImage = () => {
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => setImage(result.data.url));
    };

    // console.log(image);

    const addProduct = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target[0].value,
            img: image,
            description: e.target[1].value,
            minimum_order: e.target[4].value,
            available_quantity: e.target[3].value,
            price: e.target[2].value,
            category: e.target[5].value,
        };
        const url = 'https://manufacturer-website-server-side-0oju.onrender.com/products';
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
            });

    }
    return (
        <div className='w-[360px] mx-auto mt-8 bg-white drop-shadow-lg px-4 py-8'>
            <div>
                <h1 className='text-center text-xl font-bold mb-6'>Product Information</h1>
                <div className='grid mb-4'>
                    <label className='text-xs text-gray-400'>Upload Picture</label>
                    <input className='border-2 px-4 py-2 w-full' onChange={(e) => setImage(e.target.files[0])} type="file" />
                    <button onClick={uploadImage} className='btn btn-xs justify-self-end'>Confirm?</button>
                </div>
                <form onSubmit={addProduct} >
                    <input className='border-2 mb-4 px-4 py-2 w-full' type="text" placeholder='Product Name' />
                    <textarea className='border-2 mb-4 px-4 py-2 w-full' type="text" placeholder='Description' />
                    <input className='border-2 mb-4 px-4 py-2 w-full' type="number" placeholder='Price' />
                    <input className='border-2 mb-4 px-4 py-2 w-full' type="number" placeholder='Available Quantity' />
                    <input className='border-2 mb-4 px-4 py-2 w-full' type="number" placeholder='Minimum Order Quantity' />
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