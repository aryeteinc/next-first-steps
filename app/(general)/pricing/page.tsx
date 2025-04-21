import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Pricing Page',
};

export default function ContactPage(){
    return (
        <>
            <h1 className="text-7xl">Prices</h1>
            <p>This is the price page.</p>
        </>
    )
}