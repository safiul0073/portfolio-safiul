/** @format */

import React, { useState } from "react";
import { PaymentElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js";

export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [clientSecret, setClientSecret] = useState("");

    const backendUrl = process.env.API_URL ?? "";

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (elements == null || stripe == null) {
            return;
        }

        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError?.message) {
            // Show error to your customer
            setErrorMessage(submitError.message);
            return;
        }

        const price = 12;

        // Create the PaymentIntent and obtain clientSecret from your server endpoint
        // const res = await fetch(backendUrl, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer 17|9xErisCZUxZFyuwry5OdKyXcxcxOAvlwkIDt5V0i21fd8ebd`,
        //     },
        //     body: JSON.stringify({
        //         currency: "usd",
        //         email: emailInput,
        //         amount: price * 100,
        //         paymentMethodType: "card",
        //     }),
        // });

        // const { client_secret: clientSecret } = await res.json();
        // const clientSecret = "pi_3P2sJGHKaTVbKGO91xMun3us_secret_jutr94PcSadymwmnGUmWfJMYh";
        const { error } = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            clientSecret,
            confirmParams: {
                return_url: `${window.location.origin}/stripe`,
            },
        });

        if (error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setErrorMessage(error.message ?? "");
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
            alert("Success");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="px-4">
            <div className="mb-3 flex flex-col gap-2">
                <label htmlFor="payment-intent">Payment Intent</label>
                <input type="text" className="px-3 py-2 border border-purple-600 outline-none" id="payment-intent"  value={clientSecret} onChange={(e) => setClientSecret(e.target.value)} />
            </div>
            <PaymentElement />

            <button type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
            {/* Show error message to your customers */}
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};
