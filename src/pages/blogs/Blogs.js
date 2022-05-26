import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:w-2/3 lg:mx-auto mx-4 mt-8'>
            <div className='bg-purple-100 px-4 py-6 rounded-lg mt-4'>
                <h1>
                    <span className='font-bold bg-blue-600 text-white rounded-full px-2 py-1 mr-4'>1</span>
                    <span className='font-bold text-lg lg:text-xl'>How will you improve the performance of a React Application?</span>
                </h1>
                <p className='mt-4 lg:text-lg'>
                    <span className='mr-4 font-bold'>Answer:</span>
                    <span >Code-splitting is an important optimization technique for a React application. With code-splitting, React allows us to split a large bundle file into multiple chunks using dynamic import(). This strategy greatly improves the page performance of a complex React application.</span><br></br><br></br>
                    <span>To optimize an application that consists of several images, we can avoid rendering all of the images at once to improve the page load time. With lazy loading, we can wait until each of the images is about to appear in the viewport before we render them in the DOM.</span><br></br><br></br>
                    <span>To improve the performance we should prevent unnecessary re-renders. We should check object, array, or function if they are undefined, null or empty before using. We should take care about the warnings. Make sure the app is warning free. </span>
                </p>
            </div>
            <div className='bg-red-100 px-4 py-6 rounded-lg mt-4'>
                <h1>
                    <span className='font-bold bg-blue-600 text-white rounded-full px-2 py-1 mr-4'>2</span>
                    <span className='font-bold text-lg lg:text-xl'>What are the different ways to manage a state in a React application?</span>
                </h1>
                <p className='mt-4 lg:text-lg'>
                    <span className='mr-4 font-bold'>Answer:</span>
                    <span>There are four main types of state we have to properly manage in our React apps:<br></br>
                        1. Local state<br></br>
                        2. Global state<br></br>
                        3. Server state<br></br>
                        4. URL state</span><br></br><br></br>
                    <span>useState is the first tool we should reach for to manage state in our components. t can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function</span><br></br><br></br>
                    <span>useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.</span>
                </p>
            </div>
            <div className='bg-gray-100 px-4 py-6 rounded-lg mt-4'>
                <h1>
                    <span className='font-bold bg-blue-600 text-white rounded-full px-2 py-1 mr-4'>3</span>
                    <span className='font-bold text-lg lg:text-xl'>How does prototypical inheritance work?</span>
                </h1>
                <p className='mt-4 lg:text-lg'>
                    <span className='mr-4 font-bold'>Answer:</span>
                    <span>Inheritance allows an object to use the properties and methods of another object without duplicating the code. Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. </span><br></br><br></br>
                    <span>Every time we execute an object's method, JavaScript search for the method in the object itself. When it can't find it, it follows the [[Prototype]] reference to its parent's prototype and repeats the process through the prototype chain until it finds the method or reaches the end, a null reference.</span>
                </p>
            </div>
            <div className='bg-purple-100 px-4 py-6 rounded-lg mt-4'>
                <h1>
                    <span className='font-bold bg-blue-600 text-white rounded-full px-2 py-1 mr-4'>4</span>
                    <span className='font-bold text-lg lg:text-xl'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</span>
                </h1>
                <p className='mt-4 lg:text-lg'>
                    <span className='mr-4 font-bold'>Answer:</span>
                    <span>If one tries to change the value of a variable then tat will not change because the react rendered the component only once and since there is no state change it won't get re-rendered.</span><br></br><br></br>
                    <span>If one tries to change the value with useState it will change because the react rendered the component once when it got mounted and since there is state change it will get re-rendered.</span>
                </p>
            </div>
            <div className='bg-yellow-50 px-4 py-6 rounded-lg mt-4'>
                <h1>
                    <span className='font-bold bg-blue-600 text-white rounded-full px-2 py-1 mr-4'>5</span>
                    <span className='font-bold text-lg lg:text-xl'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</span>
                </h1>
                <p className='mt-4 lg:text-lg'>
                    <span className='mr-4 font-bold'>Answer:</span>
                    <span>First I will declare an another array to store the products that I need. Then I will map the array of products and check the name of each product. If any product match with the name then I will push that product into the array that I declared. So, I get the array of products that I need.</span>
                </p>
            </div>
            <div className='bg-red-100 px-4 py-6 rounded-lg mt-4'>
                <h1>
                    <span className='font-bold bg-blue-600 text-white rounded-full px-2 py-1 mr-4'>6</span>
                    <span className='font-bold text-lg lg:text-xl'>What is a unit test? Why should write unit tests?</span>
                </h1>
                <p className='mt-4 lg:text-lg'>
                    <span className='mr-4 mr-4 font-bold'>Answer:</span>
                    <span>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.</span><br></br><br></br>
                    <span>Reason of writing unit tests:</span><br></br>
                    <span>
                     - Any bugs are found easily and quicker <br></br>
                     - Unit testing saves time and money <br></br>
                     - Unit testing provides documentation <br></br>
                     - Unit testing helps gauge performance <br></br>
                     - Unit testing improves code coverage <br></br>
                     - Unit testing reduces code complexity <br></br>
                     - UNIT TESTING RESULTS IN QUALITY SOFTWARE <br></br>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Blogs;