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
    const stripePromise = loadStripe("pk_test_51FM0vGHXKb7imKJKSb8X5re6yscrifj5sy3l6AImhZMoU5ODgbCvxcJSbSUIPXr3zNZHuDpa5oNvLInZDKOy8z5A00RQJx5m4m");
    return (
        <div className="flex container mt-8">
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Checkout;
