import React from 'react'
import profile from '../assets/images/profile.png'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <section className="About min-h-screen">
        <h2 className="text-center text-4xl pt-10 pb-5 max-sm:text-2xl">About Me</h2>
        <div className="py-10">
          <div className="grid grid-cols-4 justify-around items-center py-16 bg-zinc-950 rounded-xl px-5 w-4/5 mx-auto my-8 max-lg:grid-col-reverse max-lg:grid-cols-1 gap-y-10 border border-gray-500">
            <div className="col-span-3 max-lg:text-xs w-full px-8">
              <span className="text-xl">Hello, I'm <b>Vishwkant</b> from Delhi, India.
                <br />
                An aspiring full stack
                developer.
                Currently student @ DUCAT Pitampura,<br />
                As a fresher, I'm eager to embark on new coding adventures, leveraging my creativity and dedication to contribute to innovative projects. When I'm not coding, I love to play/watch cricket and play First Person Shooter 'FPS' games
                like CS:GO,
                Valorant. Cricket teaches me teamwork, while FPS games keep me sharp.
                <br /> Let's connect and create something remarkable together.
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