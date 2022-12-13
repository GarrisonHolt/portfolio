import React from 'react';
import Image from "next/image";
import Link from "next/link";
import gameImg from '../public/assets/projects/rockpaperscissors.jpg'
import authImg from '../public/assets/projects/auth-page.jpg'
import todoImg from '../public/assets/projects/to-do.jpg'
import ProjectItem from "./ProjectItem";

function Projects() {
    return (
        <div className='w-full pt-[50%]'>
            <div id='projects' className='max-w-[1240px] mx-auto px-2 py-16'>
              <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
              <h2 className='py-4'>What I Have Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='Rock Paper Scissors'
                        backgroundImg={gameImg}
                        technologies='HTML/CSS/JS'
                        projectUrl='/game'
                    />
                    <ProjectItem
                        title='Login Page'
                        backgroundImg={authImg}
                        technologies='HTML/CSS/JS'
                        projectUrl='/login'
                    />
                    <ProjectItem
                        title='Firebase To-Do'
                        backgroundImg={todoImg}
                        technologies='HTML/CSS/JS/Firebase'
                        projectUrl='/todo'
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;