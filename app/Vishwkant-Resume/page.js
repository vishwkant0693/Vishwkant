import Image from 'next/image'
import React from 'react'
import resume from '../assets/images/resume.png'

const page = () => {
    return (
        <>
            <div className="">
                <h2 className='text-center pt-10 text-3xl font-bold max-lg:text-xl'>RESUME</h2>
                <div className="flex justify-center py-10 ">
                    <Image src={resume} alt="" className=' brightness-90 border-2 border-slate-950' width={500} height={500} />
                </div>
            </div>
        </>
    )
}

export default page


export const metadata = {
    title: "Resume - Vishwkant - Full Stack Developer",
    description: "Resume - Vishwkant - Personal Portfolio",
  };