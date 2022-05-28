import React, { useEffect, useState } from 'react';
import ShowReview from './ShowReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [reverseReviews, setReverseReviews] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect( () => {
        fetch('https://floating-tundra-63405.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        });
    },[]);
    if(reviews.length !== 0 && reverseReviews.length === 0){
        setReverseReviews([...reviews].reverse());
    }
    
    return (
        <div className='mt-16 mx-3'>
            {
                reverseReviews.map(review => <ShowReview key={review._id} review={review}></ShowReview>)
            }
        </div>
    );
};

export default Reviews;