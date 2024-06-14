import React, { useState, useEffect } from 'react';
import { PaystackButton } from 'react-paystack'; // Import PaystackButton

const config = {
    reference: (new Date()).getTime().toString(),
    email: "martmain.k@gmail.com",
    amount: 1000, // 10 shillings kenya
    publicKey: 'pk_test_c45de7f4e3682745b3e558767fa43f39a0531a49',
    currency: 'KES',
    channels: ["card", "mobile_money"],
};

function Report() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the timeout value as needed

        return () => clearTimeout(timer);
    }, []);

    const handlePaystackSuccessAction = (reference) => {
        console.log(reference);
    };

    const handlePaystackCloseAction = () => {
        console.log('Payment closed');
    }

    if (loading) {
        return <div className='display-1 mt-5 mb-5'>Loading...</div>;
    }

    return (
        <div className="Payment">
            <div>
                {/* image section */}
                <div className="Images mt-3 mb-3">
                    <img src="https://media.istockphoto.com/id/1158779061/photo/mobile-payment-with-wallet-app-and-wireless-nfc-technology-man-paying-and-shopping-with.jpg?b=1&s=612x612&w=0&k=20&c=BhR1We5w2MDw6UZyOT_qSbpbp-VFb9mVe8I6BmEhNyk=" className="rounded-circle" width={500} height={500} alt="Seamless" />
                </div>

                <PaystackButton
                    {...config}
                    onSuccess={handlePaystackSuccessAction}
                    onClose={handlePaystackCloseAction}
                    text="Pay Now" // customize the button text
                />
            </div>
        </div>
    );
}

export default Report;
