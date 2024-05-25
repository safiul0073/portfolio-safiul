/** @format */

import Image from "next/image";
import Payment  from "@/stripe/Payment"

export default function Stripe() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Payment />
        </main>
    );
}
