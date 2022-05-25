import { isEmpty } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const price = order.totalPrice;
    const [payError, setPayError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [paymentInfo, setPaymentInfo] = useState({});

    useEffect(() => {
        if (price) {
            fetch("http://localhost:5000/create-payment-intent", {
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
        }

    }
    useEffect(() => {
        console.log(paymentInfo);
        if(!isEmpty(paymentInfo)){
            fetch(`http://localhost:5000/orders/${order._id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ transactionId: paymentInfo.id }),
        })
            .then(res => res.json())
            .then(data => console.log(data));
        }
    }, [paymentInfo])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-secondary' type="submit" disabled={!stripe || !clientSecret}>
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