import React from 'react';
import Image from "next/image";
import reactImg from '../public/assets/skills/react.png'
import pythonImg from '../public/assets/skills/python.png'
import dbtImg from '../public/assets/skills/dbt.png'
import dagsterImg from '../public/assets/skills/dagster.png'
import jsImg from '../public/assets/skills/javascript.png'
import tsImg from '../public/assets/skills/typescript.png'
import deltaLakeImg from '../public/assets/skills/deltaLake.png'
import fbImg from '../public/assets/skills/firebase.png'
import pandasImg from '../public/assets/skills/pandas.png'
import postgresImg from '../public/assets/skills/postgre.png'
import css from "styled-jsx/css";



function Skills() {
    return (
        <div className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>Technologies I Work With</h2>
                <div className='gird md:grid-cols-2 lg:grid-cols-4 gap-8'></div>

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
                            <Image src={pandasImg} alt='/' width={64} height={64}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Pandas</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={dbtImg} alt='/' width={64} height={64}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>DBT</h3>
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
                            <Image src={reactImg} alt='/' width={64} height={64}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tsImg} alt='/' width={64} height={64}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Typescript</h3>
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
                            <Image src={deltaLakeImg} alt='/' width={64} height={64}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Delta Lake</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={dagsterImg} alt='/' width={64} height={64}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Dagster</h3>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Skills;