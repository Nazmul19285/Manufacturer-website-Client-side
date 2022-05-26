import React, { useEffect, useState } from 'react';
import ShowReview from './ShowReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[])
    return (
        <div className='mt-16 mx-3'>
            {
                reviews.map(review => <ShowReview key={review._id} review={review}></ShowReview>)
            }
        </div>
    );
};

export default Reviews;