import React, { useEffect, useState } from 'react';
import DisplayProduct from '../common/DisplayProduct';
import BusinessSummery from './BusinessSummery';
import HomeSlider from './HomeSlider';
import Reviews from './Reviews';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <HomeSlider></HomeSlider>
            <h1 className='text-center mt-8 font-light'>D I S C O V E R</h1>
            <h1 className='text-center text-xl mt-3 font-medium'><span className='mr-4'>O U R</span>  P R O D U C T S</h1>
            <div className='mt-8 lg:w-10/12 lg:grid lg:grid-cols-4 gap-4 mx-auto mb-20'>
                {
                    products.slice(0, 4).map(product => <DisplayProduct key={product._id} product={product}></DisplayProduct>)
                }
            </div>
            <div class="divider"></div> 
            <h1 className='text-center text-3xl mt-3 font-medium my-8'><span className='mr-4'>R E V I E W S</span></h1>
            <Reviews></Reviews>
            <div class="divider"></div> 
            <h1 className='text-center text-xl my-20 font-medium'><span className='mr-4'>B U S I N E S S</span>  S U M M A R Y</h1>
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;