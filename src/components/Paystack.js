import React, { useState, useEffect } from 'react';
import { PaystackButton } from 'react-paystack';
import axios from 'axios';
import '../App.css';

function Report() {
    const [loading, setLoading] = useState(true);
    const [paymentEmail, setPaymentEmail] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [ownerId, setOwnerId] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedEmail = sessionStorage.getItem('payment_email');
                const combineId = sessionStorage.getItem('payment_combine_id');

                // Fetch owner_id from backend using combine_id
                const response = await axios.get(`http://localhost:4000/Combine/getOwnerIdById/${combineId}`);
                const fetchedOwnerId = response.data.owner_id;

                // Fetch amount from backend using combine_id
                const amountResponse = await axios.get(`http://localhost:4000/Combine/combineAmount/${combineId}`);
                const fetchedAmount = amountResponse.data.amount;

                setPaymentEmail(storedEmail);
                setPaymentAmount(fetchedAmount);
                setOwnerId(fetchedOwnerId);

                setLoading(false);
            } catch (error) {
                // console.error('Error fetching payment details:', error);
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            // Cleanup function if needed
        };
    }, []);

    const handlePaystackSuccessAction = (reference) => {
        // console.log('Payment successful, reference:', reference);
        // console.log('Email used for payment:', paymentEmail);
    
        // Prepare data for transaction
        const transactionData = {
            reference: reference.reference,
            combine_id: sessionStorage.getItem('payment_combine_id'),
            owner_id: ownerId,
            amount: paymentAmount,
            timestamp: new Date().toISOString()
        };
    
        // console.log('Transaction Data:', transactionData);
    
        // Handle success action here
        // Send transaction data to backend for verification and saving (without async/await)
        axios.post('http://localhost:4000/Transaction/handlePaystackSuccessAction', transactionData, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            if (response.status !== 200) {
                throw new Error('Failed to add transaction');
            }
            // console.log('Transaction added successfully!');
        }).catch(error => {
            // console.error('Error adding transaction:', error);
        });
    };
    

    const handlePaystackCloseAction = () => {
        // console.log('Payment closed');
    };

    if (loading) {
        return <div className='display-1 mt-5 mb-5'>Loading...</div>;
    }

    return (
        <div className="Payment">
            <div>
                <div className="Images mt-3 mb-3">
                    <img
                        src="https://media.istockphoto.com/id/1158779061/photo/mobile-payment-with-wallet-app-and-wireless-nfc-technology-man-paying-and-shopping-with.jpg?b=1&s=612x612&w=0&k=20&c=BhR1We5w2MDw6UZyOT_qSbpbp-VFb9mVe8I6BmEhNyk="
                        className="rounded-circle"
                        width={500}
                        height={500}
                        alt="Seamless"
                    />
                </div>

                <div className="PaymentDetails">
                    <h3>Payment Details:</h3>
                    <p>Email: {paymentEmail}</p>
                    <p>Amount: {paymentAmount} KES</p>
                </div>

                <PaystackButton
                    email={paymentEmail}
                    amount={paymentAmount * 100} // Convert amount to kobo
                    currency="KES"
                    publicKey="pk_test_c45de7f4e3682745b3e558767fa43f39a0531a49" // Replace with your actual Paystack public key
                    onSuccess={handlePaystackSuccessAction}
                    onClose={handlePaystackCloseAction}
                    text="Pay Now"
                    className="custom-paystack-button"
                />
            </div>
        </div>
    );
}

export default Report;
