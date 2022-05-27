import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../common/CustomLink';
import ManageProducts from './ManageProducts';

const ManageStore = () => {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        fetch('https://floating-tundra-63405.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [reload])
    return (
        <div>
            <Link className='btn btn-accent' to='/addproduct'>Add a Product</Link>
            <div className='mt-8 lg:w-10/12 lg:grid lg:grid-cols-3 gap-4 mx-auto mb-20'>
                {
                    products.map(product => <ManageProducts key={product._id} product={product} reload={reload} setReload={setReload}></ManageProducts>)
                }
            </div>
        </div>
    );
};

export default ManageStore;