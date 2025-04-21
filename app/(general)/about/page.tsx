import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page',
    description: 'About Page',
};

export default function AboutPage(){
    return (
        <>
            <h1 className="text-7xl">About</h1>
            <p>This is the about page.</p>
        </>
    )
};