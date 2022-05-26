import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const getReview = (event) => {
        event.preventDefault();

        const data = {
            user:`${user.displayName}`,
            ratings:`${event.target[0].value}`,
            review:`${event.target[1].value}`,
            
        };
        const url = 'http://localhost:5000/reviews';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            toast('Review added');
        });
        event.target[0].value = '';
        event.target[1].value = '';

    }
    return (
        <div className='ml-4'>
            <h1 className='text-xl lg:text-2xl text-gray-600 mb-6'>Please, Give Your Valuable Review</h1>
            <form onSubmit={getReview}>
                <label className="label label-text">Choose a Ratings</label>
                <select className="select select-warning w-full max-w-xs">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option selected>5</option>
                </select>
                <label className="label label-text mt-6">Your Review</label>
                <textarea type="text" placeholder="Type here" className="input input-bordered input-primary h-32 px-4 py-2 w-full max-w-xs" />
                <label className="label label-text mt-4"></label>
                <button type='submit' className="btn btn-wide btn-outline btn-accent">Submit</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddReview;