import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Launch } from '@carbon/icons-react'
import { FaGithub } from 'react-icons/fa'
import circle from "../public/assets/svg/nnneon.png"

//stacks images imports
import js from "../public/assets/skills/js.png"
import java from "../public/assets/skills/java.png"
import csharp from "../public/assets/skills/c-sharp.png"
import python from "../public/assets/skills/python.png"
import react from "../public/assets/skills/react-js.png"
import redux from "../public/assets/skills/redux-nameles.png"
import next from "../public/assets/skills/next-js.png"
import tailwind from "../public/assets/skills/tailwind-css.png"
import dotnet from "../public/assets/skills/dotnet-core.png"
import express from "../public/assets/skills/express-js.png"
import flask from "../public/assets/skills/flask.png"
import mongodb from "../public/assets/skills/mongodb-icon.png"
import node from "../public/assets/skills/node-js.png"
import postgre from "../public/assets/skills/postgres-nameless.png"
import sqlserver from "../public/assets/skills/sql-server.png"
import next13 from "../public/assets/skills/next-13.png"
import sanity from "../public/assets/skills/sanity.png"


//projects screens
import memories from '../public/assets/projects/memories-dummy-screen.png'
import gaming_eshop from '../public/assets/projects/gaming-eshop.png'

type Props = {}

const Projects = (props: Props) => {
  return (
    <section id="projects" className="w-full pb-32 p-2 py-6 lg:pt-24 " >
        <div className="w-[90%] mx-auto h-1/2 md:grid grid-cols-3  " >

            <div className="col-span-3 md:col-span-2 h-full flex flex-col justify-center  md:py-8 md:pr-12   md:mr-2 " >
                <div className="p-6 border border-neutral-600 shadow-md bg-neutral-50/25 dark:bg-neutral-900/25 backdrop-blur-sm rounded-2xl" >
                    <p className="tracking-widest mb-2 dark:text-neutral-400" >PROJECTS .</p>
                    <h1 className="dark:text-neutral-200">What I've Built</h1>
                    <p className="py-4 text-lg dark:text-neutral-300" >
                        A look at the projects I worked on.
                    </p>
                </div>
            </div>

            {/* neon circle image */}
            <div className="hidden lg:col-span-1 h-full lg:flex justify-center items-center rounded-2xl  ml-2 " >
                <div className="backdrop-blur-sm rounded-full border border-neutral-600" >
                    <Image src={circle} alt="/" width="300" height="300" className="animate-spin" />
                </div>
            </div>

        </div>

        {/* Projects */}
        <div className="mt-16 w-[90%] mx-auto pb-12  pt-8  " >
            <div className="w-full mx-auto md:w-[90%] lg:w-[80%] md:flex flex-wrap justify-around p-4  " >

                {/* Memories App */}
                <div className="md:h-[480px] lg:w-[40%]  md:mx-4 lg:mx-8 my-4 border border-neutral-600  backdrop-blur-sm flex flex-col rounded-2xl relative drop-shadow-md transition-all ">
                    <div className="rounded-t-2xl object-cover border-b border-neutral-600 hover:backdrop-blur-sm h-[280px] bg-cover " style={{backgroundImage: `url(${memories.src})`}} >
                        {/* <Image src="/../public/assets/projects/memories-raw-screen.png" alt="/" width={1879} height={936} className=" rounded-t-2xl " /> */}
                    </div>

                    {/* img overlay */}
                    <div className="h-[280px] group absolute top-0 left-0 w-full px-4 pt-4 rounded-t-2xl flex justify-center border-b border-neutral-600 hover:backdrop-blur-sm hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50 transition-all ">
                        <div className="w-full  flex items-center justify-around opacity-0 group-hover:opacity-100 transition-all " >
                            <Link href='http://mern-stack-memories.vercel.app/' target="_blank">
                                <Launch size={32} className="cursor-pointer dark:text-neutral-200" />
                            </Link>
                            <Link href='https://github.com/dRect911/mern-stack-memories' target="_blank">
                                <FaGithub size={24} className="dark:text-neutral-200 cursor-pointer" />
                            </Link>
                            {/* <h5 className="text-white" >{moment(post.createdAt).fromNow()}</h5> */}
                        </div>
                        {/* go-to icon here */}
                    </div>

                    <div className=" min-h-24 pb-4 ">
                        {/* title and message */}
                        <h2 className="text-2xl font-medium text-start  pt-4 pl-4 dark:text-neutral-200  " >Memories</h2>
                        <p className="text-sm  px-4 py-2 dark:text-neutral-300" >Memories is an app to post photos and captions of our memories. It's a Fullstack MERN App.</p>

                        {/* stacks */}
                        <div className="pt-4 flex flex-wrap p-2" >
                            {/* used stacks icons here */}
                            <div className="mx-2">
                                <Image src={react} alt="/" width={25} height={25} className="px-2 mx-2" />
                            </div>
                            <div className="mx-2">
                                <Image src={redux} alt="/" width={25} height={25} className="px-2 mx-2" />
                            </div>
                            <div className="mx-2">
                                <Image src={tailwind} alt="/" width={25} height={15} className="px-2 mx-2" />
                            </div>
                            <div className="mx-2">
                                <Image src={node} alt="/" width={25} height={25} className="px-2 mx-2" />
                            </div>
                            <div className="mx-2">
                                <Image src={express} alt="/" width={25} height={25} className="px-2 mx-2" />
                            </div>
                            <div className="mx-2">
                                <Image src={mongodb} alt="/" width={11.25} height={25} className="px-2 mx-2" />
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* Memories App */}
                <div className="md:h-[480px] lg:w-[40%]  md:mx-4 lg:mx-8 my-4 border border-neutral-600  backdrop-blur-sm flex flex-col rounded-2xl relative drop-shadow-md transition-all ">
                    <div className="rounded-t-2xl object-cover border-b border-neutral-600 hover:backdrop-blur-sm h-[280px] bg-cover " style={{backgroundImage: `url(${gaming_eshop.src})`}} >
                        {/* <Image src="/../public/assets/projects/memories-raw-screen.png" alt="/" width={1879} height={936} className=" rounded-t-2xl " /> */}
                    </div>

                    {/* img overlay */}
                    <div className="h-[280px] group absolute top-0 left-0 w-full px-4 pt-4 rounded-t-2xl flex justify-center border-b border-neutral-600 hover:backdrop-blur-sm hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50 transition-all ">
                        <div className="w-full  flex items-center justify-around opacity-0 group-hover:opacity-100 transition-all " >
                            <Link href='https://gaming-eshop.vercel.app/' target="_blank">
                                <Launch size={32} className="cursor-pointer dark:text-neutral-200" />
                            </Link>
                            <Link href='https://github.com/dRect911/gaming-eshop' target="_blank">
                                <FaGithub size={24} className="dark:text-neutral-200 cursor-pointer" />
                            </Link>
                            {/* <h5 className="text-white" >{moment(post.createdAt).fromNow()}</h5> */}
                        </div>
                        {/* go-to icon here */}
                    </div>

                    <div className=" min-h-24 pb-4 ">
                        {/* title and message */}
                        <h2 className="text-2xl font-medium text-start  pt-4 pl-4 dark:text-neutral-200  " >G-Shop</h2>
                        <p className="text-sm  px-4 py-2 dark:text-neutral-300" >A gaming hardware eshop made with Next.js, TailwindCSS, Sanity and Stripe</p>

                        {/* stacks */}
                        <div className="pt-4 flex flex-wrap p-2" >
                            {/* used stacks icons here */}
                            <div className="mx-2">
                                <Image src={next13} alt="/" width={25} height={25} className="px-2 mx-2" />
                            </div>
                            <div className="mx-2">
                                <Image src={tailwind} alt="/" width={25} height={15} className="px-2 mx-2" />
                            </div>
                            <div className="mx-2">
                                <Image src={sanity} alt="/" width={25} height={25} className="px-2 mx-2" />
                            </div>
                        </div>
                    </div>
                    
                </div>


                {/* more soon box */}
                <div className="h-[300px] md:h-[480px] lg:w-[40%]  md:mx-4 lg:mx-8 my-4 px-10 py-6 border border-dashed border-neutral-600 backdrop-blur-sm flex items-center rounded-2xl relative drop-shadow-md transition-all ">
                    
                    <h2 className="text-center font-medium dark:text-neutral-300 animate-pulse" >And more projects coming soon...</h2>
                    
                </div>

            </div>
        </div>

        
    

    </section>
  )
}

export default Projects