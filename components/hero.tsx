import React from 'react'
import Link from 'next/link'
import { Email } from '@carbon/icons-react'
import { FaGithub, FaLinkedinIn, FaDev } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section id="main" className="w-full h-screen text-center flex justify-center items-center" >
        <div className="group w-3/4 md:w-1/2 p-8 mx-auto my-auto  rounded-2xl border border-neutral-600 shadow-md bg-neutral-50/25 dark:bg-neutral-900/25 dark backdrop-blur-sm" >
            <p className="uppercase text-[10px] md:text-sm tracking-widest text-neutral-600 dark:text-neutral-400" >
                LET'S BUILD SOMETHING TOGETHER
            </p>
            <h1 className="py-4 text-neutral-700 dark:text-neutral-200" >
                Hi, I'm <span className="bg-clip-text group-hover:text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500" >Kenneth</span>
            </h1>
            <h1 className="py-2 text-neutral-700 dark:text-neutral-200" >
                Web Developer
            </h1>
            <p className="py-4 w-[90%] md:w-[80%] text-sm md:text-lg text-neutral-600 dark:text-neutral-300 m-auto " >
                I'm a web developer specializing in building exceptional digital experiences. Currently i'm focused on building responsive front-end web applications while learning back-end technologies.
            </p>
            <div  className="flex w-3/4 md:w-1/2 justify-between items-center py-4 m-auto" >
                <div>
                    <Link href="https://www.linkedin.com/in/kenneth-prince-agbodjan-40111a23b/" target="_blank" >
                        <FaLinkedinIn size={24} className="text-neutral-600 dark:text-neutral-200 cursor-pointer" />
                    </Link>
                </div>
                <div>
                    <Link href='https://github.com/dRect911' target="_blank">
                        <FaGithub size={24} className="text-neutral-600 dark:text-neutral-200 cursor-pointer" />
                    </Link>
                </div>
                <div>
                    <Link href='https://dev.to/drect911' target="_blank">
                        <FaDev size={24} className="text-neutral-600 dark:text-neutral-200 cursor-pointer" />
                    </Link>
                </div>
                <div>
                    <Link href='https://leetcode.com/dRect911/' target="_blank">
                        <SiLeetcode size={24} className="text-neutral-600 dark:text-neutral-200 cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero