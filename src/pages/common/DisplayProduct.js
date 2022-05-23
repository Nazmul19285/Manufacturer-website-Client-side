import React from 'react';

const DisplayProduct = ({product}) => {
    return (
        <div className='border w-[22rem] mx-auto'>
            <div className='flex justify-center'>
                <img src={product.img} alt={product.name} />
            </div>
            <h1 className='text-center italic text-lg font-[1000] uppercase px-2'>{product.name}</h1>
        </div>
    );
};

export default DisplayProduct;