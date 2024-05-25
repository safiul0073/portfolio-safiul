/** @format */
"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../components/CheckoutForm";

type Props = {};

const options: any = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    appearance: {
        /*...*/
    },
};

const Checkout = (props: Props) => {
    const stripePromise = loadStripe("pk_test_51IRwUGHKaTVbKGO9fAFid4N6ey3DeYBh69KTOKLuOqNbry9Z9EuIrj6jHXex88hPMcwpIb54oNNRCH9dbOYASjiU00zTy2Iu9Y");
    return (
        <div className="flex container mt-8">
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Checkout;
