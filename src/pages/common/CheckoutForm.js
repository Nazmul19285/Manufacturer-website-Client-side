import { isEmpty } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const price = order.totalPrice;
    const [payError, setPayError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [paymentInfo, setPaymentInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (price) {
            fetch("https://manufacturer-website-server-side-0oju.onrender.com/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ price }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setPayError(error.message);
        } else {
            setPayError('');
        }

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: order.userName,
                        email: order.userEmail,
                    },
                },
            },
        );
        if (intentError) {
            setPayError(intentError?.message);
            setSuccess('');
        }
        else {
            setPayError('');
            setSuccess("Thank You! Payment is Completed");
            setPaymentInfo(paymentIntent);
            setTimeout(() => {  navigate('/dashboard/myorders'); }, 3000);
        }

    }
    useEffect(() => {
        if(!isEmpty(paymentInfo)){
            fetch(`https://manufacturer-website-server-side-0oju.onrender.com/orders/${order._id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                transactionId: paymentInfo.id,
                status: 'Paid',
             }),
        })
            .then(res => res.json())
            .then(data => console.log(data));
        }
    }, [paymentInfo])
    return (
        <div>
            <form className='mt-10' onSubmit={handleSubmit}>
                <CardElement className='border-2 border-gray-300 py-4 px-2'
                    options={{
                        style: {
                            base: {
                                fontSize: '18px',
                                color: '#000000',
                                '::placeholder': {
                                    color: '#787878',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-secondary mt-8' type="submit" disabled={!stripe || !clientSecret}>
                    Pay Now
                </button>
            </form>
            {
                payError && <p className='text-red-600'>{payError}</p>
            }
            {
                success && <div>
                    <p className='text-green-600'>{success}</p>
                    <p>Transaction Id: {paymentInfo.id}</p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;