import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:w-2/3 lg:mx-auto mx-4 mt-8'>
            <div className='bg-purple-100 p-2 rounded-lg mt-4'>
                <h1>
                    <span className='font-bold bg-blue-600 text-white rounded-full px-2 py-1 mr-4'>1</span>
                    <span className='font-bold text-lg lg:text-2xl'>How will you improve the performance of a React Application?</span>
                </h1>
                <p className='mt-4'>
                    <span className='mr-4'>Answer:</span>
                </p>
            </div>
            <div className='bg-purple-100 p-2 rounded-lg mt-4'>
                <h1>
                    <span className='font-bold bg-blue-600 text-white rounded-full px-2 py-1 mr-4'>2</span>
                    <span className='font-bold text-lg lg:text-2xl'>What are the different ways to manage a state in a React application?</span>
                </h1>
                <p className='mt-4'>
                    <span className='mr-4'>Answer:</span>
                </p>
            </div>
            <div className='bg-purple-100 p-2 rounded-lg mt-4'>
                <h1>
                    <span className='font-bold bg-blue-600 text-white rounded-full px-2 py-1 mr-4'>3</span>
                    <span className='font-bold text-lg lg:text-2xl'>How does prototypical inheritance work?</span>
                </h1>
                <p className='mt-4'>
                    <span className='mr-4'>Answer:</span>
                </p>
            </div>
            <div className='bg-purple-100 p-2 rounded-lg mt-4'>
                <h1>
                    <span className='font-bold bg-blue-600 text-white rounded-full px-2 py-1 mr-4'>4</span>
                    <span className='font-bold text-lg lg:text-2xl'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</span>
                </h1>
                <p className='mt-4'>
                    <span className='mr-4'>Answer:</span>
                </p>
            </div>
            <div className='bg-purple-100 p-2 rounded-lg mt-4'>
                <h1>
                    <span className='font-bold bg-blue-600 text-white rounded-full px-2 py-1 mr-4'>5</span>
                    <span className='font-bold text-lg lg:text-2xl'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</span>
                </h1>
                <p className='mt-4'>
                    <span className='mr-4'>Answer:</span>
                </p>
            </div>
            <div className='bg-purple-100 p-2 rounded-lg mt-4'>
                <h1>
                    <span className='font-bold bg-blue-600 text-white rounded-full px-2 py-1 mr-4'>6</span>
                    <span className='font-bold text-lg lg:text-2xl'>What is a unit test? Why should write unit tests?</span>
                </h1>
                <p className='mt-4'>
                    <span className='mr-4'>Answer:</span>
                </p>
            </div>
        </div>
    );
};

export default Blogs;