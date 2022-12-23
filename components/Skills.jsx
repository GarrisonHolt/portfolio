import React from 'react';
import Image from "next/image";
import pythonImg from '../public/assets/skills/python.png'
import nodeImg from '../public/assets/skills/node.png'
import jsImg from '../public/assets/skills/javascript.png'
import mongoImg from '../public/assets/skills/mongo.png'
import fbImg from '../public/assets/skills/firebase.png'
import postgresImg from '../public/assets/skills/postgre.png'
import dbtImg from '../public/assets/skills/DBT.png'
import awsImg from '../public/assets/skills/aws.png'
import snowflakeImg from '../public/assets/skills/snowflake.png'
import dockerImg from '../public/assets/skills/Docker.png'



function Skills() {
    return (
        <div id='skills' className='w-full sm:pt-[30%] lg:h-screen p-2 pt-5'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-screen pt-[5%]'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>Technologies I Work With</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'></div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={pythonImg} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={dbtImg} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>DBT</h3>
                        </div>
                    </div>
                </div>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={postgresImg} alt='/' width={64} height={64}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>PostgreSQL</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={snowflakeImg} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Snowflake</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={dockerImg} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Docker</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={awsImg} alt='/' width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>AWS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={fbImg} alt='/' width={64} height={64}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>



                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={mongoImg} alt='/' width={64} height={64}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={jsImg }alt='/' width={64} height={64}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nodeImg} alt='/' width={64} height={64}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node.js</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;