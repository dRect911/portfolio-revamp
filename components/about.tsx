import React from 'react'
import Image from 'next/image'
import circle from "../public/assets/svg/nnneon.png"


type Props = {}

const About = (props: Props) => {
  return (
    <section id="about" className="w-full  md:h-screen p-2 py-6 flex items-center" >
        <div className="w-[90%] mx-auto h-1/2 grid md:grid-cols-3 place-content-center " >
            <div className="col-span-3 md:col-span-2 md:h-full  flex flex-col justify-center p-6 md:pr-12 rounded-2xl border md:mr-2 border-neutral-600 shadow-md bg-neutral-50/25 dark:bg-neutral-900/25 backdrop-blur-sm" >
                <p className="tracking-widest mb-2 dark:text-neutral-400 " >ABOUT .</p>
                <h1 className="dark:text-neutral-200 text-6xl font-bold">Who I am</h1>
                <p className="py-4 text-lg dark:text-neutral-300" >
                    I am Kenneth PRINCE AGBODJAN, a 23 years old web developer. Actually pursuing a Computer Science Degree, i was already fascinated by programming since my high school.
                    I always have been amazed by beautiful and creative websites and how to build them, then my self-taught front-end developer journey began. Since I still be learning everyday some new skills to improve my works.
                    I'm planning to learn more advanced back-end skills to become a fullstack dev.
                </p>

            </div>

            {/* neon circle image */}
            <div className="hidden lg:col-span-1 md:h-full lg:flex justify-center items-center rounded-2xl  ml-2 " >
                <div className="backdrop-blur-sm rounded-full border border-neutral-600" >
                    <Image src={circle} alt="/" width="300" height="300" className="animate-spin" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default About