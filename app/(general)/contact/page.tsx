import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Contact Page',
};
export default function ContactPage(){
    return (
        <>
            <h1 className="text-7xl">Contact</h1>
            <p>This is the contact page.</p>
        </>
    )
}