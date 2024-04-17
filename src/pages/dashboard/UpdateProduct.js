import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProduct = () => {
    const navigate = useNavigate();
    const id = useParams();
    const [product, setProduct] = useState({});
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [availableQuantity, setAvailableQuantity] = useState();
    const [minimumOrder, setMinimumOrder] = useState();
    const [reload, setReload] = useState(false);


    const getName = (e) => {
        setName(e.target.value);
    }
    const getDescription = (e) => {
        setDescription(e.target.value);
    }
    const getPrice = (e) => {
        setPrice(e.target.value);
    }
    const getAvailableQuantity = (e) => {
        setAvailableQuantity(e.target.value);
    }
    const getMinimumOrder = (e) => {
        setPrice(e.target.value);
    }

    useEffect(() => {
        if (id) {
            fetch(`https://manufacturer-website-server-side-0oju.onrender.com/products/${id.id}`)
                .then(res => res.json())
                .then(data => {
                    setProduct(data);
                    setReload(true);
                });
        }
    }, [id])

    if (reload) {
        setName(product.name);
        setImage(product.img);
        setDescription(product.description);
        setPrice(product.price);
        setAvailableQuantity(product.available_quantity);
        setMinimumOrder(product.minimum_order);
        setReload(false);
    };

    const update = () => {
        const data = {
            name: name,
            description: description,
            price: price,
            minimum_order: minimumOrder,
            available_quantity: availableQuantity,
        };
        const url = `https://manufacturer-website-server-side-0oju.onrender.com/products/${product._id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Product Updated');
                setTimeout(() => {  navigate('/dashboard/managestore'); }, 3000);
            });
    };

    return (
        <div className='flex justify-center mt-12 px-4'>
            <div className='w-[360px]'>
                <label className="label"><span className="label-text">Name</span></label>
                <input onChange={getName} type="text" className="input input-bordered w-full max-w-xs" value={name} />

                <label className="label"><span className="label-text">Description</span></label>
                <textarea onChange={getDescription} type="text" className="input w-full input-bordered max-w-xs" value={description} />

                <label className="label"><span className="label-text">Price</span></label>
                <input onChange={getPrice} className="input input-bordered w-full max-w-xs appearance-none" type="number" value={price} />

                <label className="label"><span className="label-text">Available Quantity</span></label>
                <input onChange={getAvailableQuantity} className="input input-bordered w-full max-w-xs appearance-none" type="number" value={availableQuantity} />

                <label className="label"><span className="label-text">Minimum Order</span></label>
                <input onChange={getMinimumOrder} className="input input-bordered w-full max-w-xs appearance-none" type="number" value={minimumOrder} />

                <button onClick={update} className='btn mt-8'>Update</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProduct;