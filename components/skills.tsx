import React from 'react'
import Image from 'next/image'


//images imports
import circle from "../public/assets/svg/nnneon.png"
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

type Props = {}

const Skills = (props: Props) => {
  return (
    <section id="skills" className="w-full pb-32 p-2 py-6 " >
        <div className="w-[90%] mx-auto md:h-1/2 md:grid grid-cols-3  " >

            <div className="invisible lg:visible lg:col-span-1 md:h-full flex justify-center items-center rounded-2xl  ml-2 " >
                <div className="backdrop-blur-sm rounded-full border border-neutral-600" >
                    <Image src={circle} alt="/" width="300" height="300" className="animate-spin" />
                </div>
            </div>

            <div className="col-span-3 md:col-span-2 md:h-full flex flex-col justify-center py-8 md:pr-12   md:ml-2 " >
                <div className="p-6 border border-neutral-600 shadow-md bg-neutral-50/25 dark:bg-neutral-900/25 backdrop-blur-sm rounded-2xl" >
                    <p className="tracking-widest mb-2 dark:text-neutral-400" >SKILLS .</p>
                    <h1 className="dark:text-neutral-200" >What I Can Do</h1>
                    <p className="py-4 text-lg dark:text-neutral-300" >
                        A look at the skills I have
                    </p>
                </div>
            </div>

        </div>

        {/* Languages */}
        <div className="mt-16 w-[90%] mx-auto pb-4 md:pb-8 border border-neutral-600 rounded-2xl backdrop-blur-sm lg:saturate-0 hover:saturate-100 transition-all duration-300 " >
            <h1 className="py-6 text-center font-medium dark:text-neutral-200 text-4xl md:text-5xl" >Languages</h1>
            <div className="w-full mx-auto lg:w-[75%] md:flex flex-wrap justify-center p-4  " >
                
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >Javascript</p>
                    <div className=" flex justify-center  " >
                        <Image src={js} alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >Java</p>
                    <div className=" flex justify-center  " >
                        <Image src={java} alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >C#</p>
                    <div className=" flex justify-center  " >
                        <Image src={csharp} alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >Python</p>
                    <div className=" flex justify-center  " >
                        <Image src={python} alt="/" width={100} height={100} className="" />
                    </div>
                </div>

            </div>
        </div>

        {/* Frontend Technologies */}
        <div className="mt-16 w-[90%] mx-auto pb-4 md:pb-8 border border-neutral-600 rounded-2xl backdrop-blur-sm lg:saturate-0 hover:saturate-100 transition-all duration-300 " >
            <h1 className="py-6 text-center font-medium dark:text-neutral-200 text-4xl md:text-5xl" >Frontend Technologies</h1>
            <div className="w-full mx-auto lg:w-[75%] md:flex flex-wrap justify-center p-4 " >
                
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl  lg:text-4xl font-medium py-2 dark:text-neutral-300" >React</p>
                    <div className=" flex justify-center  " >
                        <Image src={react} alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl  lg:text-4xl font-medium py-2 dark:text-neutral-300" >Redux</p>
                    <div className=" flex justify-center  " >
                        <Image src={redux} alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl  lg:text-4xl font-medium py-2 dark:text-neutral-300" >Next</p>
                    <div className=" flex justify-center  " >
                        <Image src={next13} alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl  lg:text-3xl font-medium py-2 dark:text-neutral-300" >Tailwind CSS</p>
                    <div className=" flex justify-center pt-6  " >
                        <Image src={tailwind} alt="/" width={100} height={60} className="" />
                    </div>
                </div>
            </div>
        </div>

        {/* Backend Technologies */}
        <div className="mt-16 w-[90%] mx-auto pb-4 md:pb-8 border border-neutral-600 rounded-2xl backdrop-blur-sm lg:saturate-0 hover:saturate-100 transition-all duration-300 " >
            <h1 className="py-6 text-center font-medium dark:text-neutral-200 text-4xl md:text-5xl" >Backend Technologies</h1>
            <div className="w-full mx-auto lg:w-[75%] md:flex flex-wrap justify-center p-4 " >
                
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >NodeJS</p>
                    <div className=" flex justify-center  " >
                        <Image src={node} alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >Express</p>
                    <div className=" flex justify-center  " >
                        <Image src={express} alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >Sanity</p>
                    <div className=" flex justify-center  " >
                        <Image src={sanity} alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >Flask</p>
                    <div className=" flex justify-center  " >
                        <Image src={flask} alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl font-medium py-2 dark:text-neutral-300" >ASP.NET Core</p>
                    <div className=" flex justify-center  " >
                        <Image src={dotnet} alt="/" width={100} height={100} className="" />
                    </div>
                </div>

            </div>
        </div>

        {/* Databases */}
        <div className="mt-16 w-[90%] mx-auto pb-4 md:pb-8 border border-neutral-600 rounded-2xl backdrop-blur-sm lg:saturate-0 hover:saturate-100 transition-all duration-300 " >
            <h1 className="py-6 text-center font-medium dark:text-neutral-200 text-4xl md:text-5xl" >Databases</h1>
            <div className="w-full mx-auto lg:w-[75%] md:flex flex-wrap justify-center p-4 " >
                
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >MongoDB</p>
                    <div className=" flex justify-center pt-2 " >
                        <Image src={mongodb} alt="/" width={45} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >PostgreSQL</p>
                    <div className=" flex justify-center pt-2 " >
                        <Image src={postgre} alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-2xl font-medium py-2 dark:text-neutral-300" >MS SQL Server</p>
                    <div className=" flex justify-center pt-4 " >
                        <Image src={sqlserver} alt="/" width={100} height={100} className="" />
                    </div>
                </div>
            </div>
        </div>
        
        

    </section>
  )
}

export default Skills