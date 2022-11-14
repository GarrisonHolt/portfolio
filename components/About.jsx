import React from 'react';
import Image from "next/image";

function About() {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-600'>I spent the last 4 years working in the data field, where I discovered my loved for programming and developing models for data.
                        I decided that I wanted to take the full plunge in the world of software development and obtained my master’s degree in software
                        development and learned various front-end and back-end technologies. </p>

                    <p className='py-2 text-gray-600'>I learned JavaScript and quickly found a love for making web applications. I moved to React and express to create full stack applications
                        using JavaScript. I now spend my time creating applications with React, express, Firebase, MongoDB and other technologies.</p>

                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my work</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
                   <img className='rounded-xl' src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt='/'/>
                </div>
            </div>
        </div>
    );
}

export default About;