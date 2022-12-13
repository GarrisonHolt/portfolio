import React from 'react';


function About() {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-600'>I have 4 working in the data field, where I discovered my love for programming and developing models for data.
                        I decided that I wanted to take the full plunge in the world of software engineering and obtained my master’s degree in Software
                        Development and learned various technologies to assist in developing both front-end and back-end applications. </p>

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