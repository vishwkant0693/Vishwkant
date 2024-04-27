import React from 'react'
import profile from '../assets/images/profile.png'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <section className="About min-h-screen">
        <h2 className="text-center md:text-4xl pt-10 pb-5 text-2xl">About Me</h2>
        <div className="">
          <div className="grid grid-cols-4 justify-around items-center py-16 bg-zinc-950 rounded-xl px-5 w-4/5 mx-auto my-4 max-lg:grid-col-reverse max-lg:grid-cols-1 gap-y-10 border border-gray-500">
            <div className="col-span-3 w-full px-8 max-sm:px-2">
              <span className="md:text-2xl">Hello, I&#39;m <b>Vishwkant</b>
                <p className=' italic mb-2 text-gray-500'>Full Stack Developer</p>
                <p className='md:text-xl pr-5'>As a Full stack developer with 3 months of experience, I have honed my skills in ReactJS and am currently learning NextJS to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.</p>
                <div className="md:text-xl mt-3">
                  <p>Address : - Delhi, India</p>
                  <p>Email :- vishwkant0693@gmail.com</p>
                  <p>Mobile No. :- +917550444332</p>
                </div>
              </span>
            </div>
            <div className="grid justify-center max-md:h-fit">
              <Image className='rounded-full p-3' src={profile} width={240} height={240} alt="profile" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page


export const metadata = {
  title: "About Vishwkant - Full Stack Developer",
  description: "About Vishwkant - Personal Portfolio",
};