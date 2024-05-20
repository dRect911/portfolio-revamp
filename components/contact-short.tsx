import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Email } from '@carbon/icons-react'
import { FaGithub, FaLinkedinIn, FaDiscord, FaDev, FaTwitter } from 'react-icons/fa'
import { SiLeetcode, SiCodersrank } from 'react-icons/si'

import ccchaos from "../public/assets/svg/ccchaos-squared-1k.png"

type Props = {}

const ContactShort = (props: Props) => {
  return (
    <section id="contact" className="w-full lg:h-screen pt-12 lg:pt-24" >
        <div className="md:flex w-[90%] md:w-[85%] lg:w-[75%] h-auto mx-auto  p-4 md:p-6 rounded-2xl border border-neutral-600 shadow-md bg-neutral-50/25 dark:bg-neutral-900/25 backdrop-blur-sm transition-all">
            <div className="" >
                <Image src={ccchaos} width={1000} height={1000} alt="/" className="" />
            </div>
            <div className="w-full md:pl-6">
                <p className="tracking-widest mt-2 md:mb-2 md:mt-0  dark:text-neutral-400" >CONTACT .</p>
                <h1 className="dark:text-neutral-200 hidden lg:flex" >Get in touch</h1>
                <h2 className="pt-4 dark:text-neutral-200" >Kenneth PRINCE AGBODJAN</h2>
                <p className="italic py-2 dark:text-neutral-300" >Web Developer</p>
                <p className="py-4 dark:text-neutral-300" >I'm available for freelance or full-time positions. Contact me and let's talk.</p>

                {/* links */}
                <div  className=" py-4 m-auto text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 break-lines" >
                    <div className="flex py-1 underline hover:no-underline " >
                        <FaLinkedinIn size={24} className="text-neutral-600 dark:text-neutral-200 mr-2 shrink-0" />
                        <Link href="https://www.linkedin.com/in/kenneth-prince-agbodjan-40111a23b/" target="_blank" >Kenneth PRINCE AGBODJAN</Link>
                    </div>
                    <div className="flex py-1 underline hover:no-underline" >
                        <FaGithub size={24} className="text-neutral-600 dark:text-neutral-200 mr-2 shrink-0" />
                        <Link href="https://github.com/dRect911" target="_blank" >dRect911</Link>
                    </div>
                    <div className="flex py-1 underline hover:no-underline" >
                        <FaDev size={24} className="text-neutral-600 dark:text-neutral-200 mr-2 shrink-0" />
                        <Link href="https://dev.to/drect911" target="_blank" >@drect911</Link>
                    </div>
                    <div className="flex py-1 underline hover:no-underline" >
                        <SiLeetcode size={24} className="text-neutral-600 dark:text-neutral-200 mr-2 shrink-0" />
                        <Link href="https://leetcode.com/dRect911/" target="_blank" >dRect911</Link>
                    </div>
                    <div className="flex py-1 underline hover:no-underline" >
                        <SiCodersrank size={24} className="text-neutral-600 dark:text-neutral-200 mr-2 shrink-0" />
                        <Link href="https://profile.codersrank.io/user/drect911/" target="_blank" >Kenneth Prince Agbodjan</Link>
                    </div>
                    <div className="flex py-1 underline hover:no-underline" >
                        <FaTwitter size={24} className="text-neutral-600 dark:text-neutral-200 mr-2 shrink-0" />
                        <Link href="https://twitter.com/thiisnoob" target="_blank" >@thiisnoob</Link>
                    </div>
                    <div className="flex py-1 underline hover:no-underline" >
                        <FaDiscord size={24} className="text-neutral-600 dark:text-neutral-200 mr-2 shrink-0" />
                        <Link href="/#contact" target="_blank" >nemo#9936</Link>
                    </div>
                    <div className="flex py-1 underline hover:no-underline break-all" >
                        <Email size={24} className="text-neutral-600 dark:text-neutral-200 mr-2 shrink-0 " />
                        <Link href="mailto:kennethprinceagbodjan@gmail.com" target="_blank" >kennethprinceagbodjan@gmail.com</Link>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default ContactShort