"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import { Menu, Close } from '@carbon/icons-react'
import { FaGithub, FaLinkedinIn, FaDev } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import ccchaos from "@/public/assets/svg/ccchaos-squared.png"

type Props = {
}

const Navbar = ( {}: Props ) => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
      setNav(!nav)
  }


return (
  <nav className="fixed w-full z-[100]  h-20  border-b border-neutral-500 backdrop-blur-lg bg-neutral-50/25 dark:bg-neutral-900/25">
    

      {/* top nav */}
      <div className="flex justify-between items-center w-full h-full px-8 " >
          <Image 
              src={ccchaos} 
              alt="/" 
              width="50" 
              height="50" 
              className="rounded-full hover:rotate-180 transition-all duration-1000" 
              // onClick={switchTheme}
          />
          {/* <Image src="/../public/assets/svg/sssquiggly.png" alt="/" width="50" height="50"  /> */}
          <div>
              <ul className="hidden md:flex items-center text-neutral-700 dark:text-neutral-400" >
                  <Link href='/#main' target="_blank" scroll={false}>
                      <li className="ml-10 text-[16px] uppercase hover:text-neutral-900 relative after:content-[''] after:absolute after:block after:w-0 after:h-[3px] after:-bottom-[3px] after:left-0 after:bg-gradient-to-r after:from-purple-500 after:to-orange-400 after:transition-all after:duration-300 hover:after:w-full" >Home</li>
                  </Link>
                  <Link href='/#about' target="_blank" scroll={false}>
                      <li className="ml-10 text-[16px] uppercase hover:text-neutral-900 relative after:content-[''] after:absolute after:block after:w-0 after:h-[3px] after:-bottom-[3px] after:left-0 after:bg-gradient-to-r after:from-purple-500 after:to-orange-400 after:transition-all after:duration-300 hover:after:w-full" >About</li>
                  </Link>
                  <Link href='/#skills' target="_blank" scroll={false}>
                      <li className="ml-10 text-[16px] uppercase hover:text-neutral-900 relative after:content-[''] after:absolute after:block after:w-0 after:h-[3px] after:-bottom-[3px] after:left-0 after:bg-gradient-to-r after:from-purple-500 after:to-orange-400 after:transition-all after:duration-300 hover:after:w-full" >Skills</li>
                  </Link>
                  <Link href='/#projects' target="_blank" scroll={false}>
                      <li className="ml-10 text-[16px] uppercase hover:text-neutral-900 relative after:content-[''] after:absolute after:block after:w-0 after:h-[3px] after:-bottom-[3px] after:left-0 after:bg-gradient-to-r after:from-purple-500 after:to-orange-400 after:transition-all after:duration-300 hover:after:w-full" >Projects</li>
                  </Link>
                  <Link href='/#contact' target="_blank" scroll={false}>
                      <li className="ml-10 text-[16px] uppercase hover:text-neutral-900 relative after:content-[''] after:absolute after:block after:w-0 after:h-[3px] after:-bottom-[3px] after:left-0 after:bg-gradient-to-r after:from-purple-500 after:to-orange-400 after:transition-all after:duration-300 hover:after:w-full" >Contact</li>
                  </Link>
      
              </ul>
              <div onClick={handleNav} className='md:hidden cursor-pointer dark:text-neutral-400' >
                  <Menu size={24} />
              </div>
          </div>
      </div>

      {/* side nav */}
      <div className={ nav ? 'md:hidden z-10 fixed left-0 top-0 w-full h-screen bg-black/50 transition-all duration-500' : 'transition-all duration-500' } >
          <div 
              className={ 
                  nav 
                  ? 'md:hidden z-40 fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-neutral-50 dark:text-neutral-300 dark:bg-neutral-900 border-r border-neutral-600  p-10 transition-all duration-500' 
                  : 'fixed left-[-100%] top-0 p-10 transition-all duration-500 '
              } 
          >

              <div>

                  <div className="flex w-full items-center justify-between" >
                      <Image src={ccchaos} alt="/" width="50" height="50" className="rounded-full hover:rotate-180 transition-all duration-1000" />
                      <div onClick={handleNav} className=" cursor-pointer hover:scale-105 hover:rotate-90 transition-all" >
                          <Close size={24} />
                      </div>
                  </div>

                  <div className="border-b my-4" >
                      <p className="py-4" >Kenneth PRINCE AGBODJAN</p>
                  </div>

              </div>

              <div className="py-4 flex flex-col" >
                  <ul>
                      <Link href='/#main' target="_blank" scroll={false} >
                          <li className="py-4 text-sm hover:translate-x-1 transition-all" onClick={handleNav}>Home</li>
                      </Link>
                      <Link href='/#about' target="_blank" scroll={false} >
                          <li className="py-4 text-sm hover:translate-x-1 transition-all" onClick={handleNav}>About</li>
                      </Link>
                      <Link href='/#skills' target="_blank" scroll={false} >
                          <li className="py-4 text-sm hover:translate-x-1 transition-all" onClick={handleNav}>Skills</li>
                      </Link>
                      <Link href='/#projects' target="_blank" scroll={false} >
                          <li className="py-4 text-sm hover:translate-x-1 transition-all" onClick={handleNav}>Projects</li>
                      </Link>
                      <Link href='/#contact' target="_blank" scroll={false} >
                          <li className="py-4 text-sm hover:translate-x-1 transition-all" onClick={handleNav}>Contact</li>
                      </Link>
                  </ul>
                  <div className="pt-40" >
                      <p className="uppercase tracking-widest" >
                          Let's connect
                      </p>
                      <div className="flex items-center justify-between my-4 " >
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
              </div>

          </div>
      </div>

  </nav>
  
)
}


export default Navbar