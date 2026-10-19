"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router = useRouter();

    const handleBTN=()=>{
        const password = prompt("Enter Your Pass")

        if(password == "1234"){
            router.push("/dashboard")
        }
    }

    return (
        <div className='text-center space-y-5'>
            <h2 className="text-4xl font-bold">Welcome To Dev-Story</h2>

            <button onClick={handleBTN} className='px-4 py-2 bg-sky-400 text-white cursor-pointer hover:bg-black duration-200 rounded-xl'>
                Share-Story
            </button>
        </div>
    );
};

export default Banner;