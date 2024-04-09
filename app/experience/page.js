import React from 'react'

const page = () => {
  return (
    <>
      <section className="Experience min-h-screen">
        <h2 className="text-center text-4xl pt-10 pb-5 max-sm:text-2xl">Experience</h2>
        <div className="flex justify-between py-10 bg-zinc-900 rounded-xl w-4/5 mx-auto px-10 my-8 border border-gray-500">
          <div className="">
            <h1 className='text-2xl font-semibold'>Krenai</h1>
            <h2 className='pb-2'>IT Services and IT Consulting</h2>
            <h2 className='pb-3'> <span className=' font-medium'>Role :</span> ReactJS Developer</h2>
            <p className=' text-xs pb-2'>Gurugram, Haryana [ Work from home ]</p>
            <p className='text-xs'>Jan 2024 - Mar 2024 </p>
          </div>
          <div className="">
            <p className='text-xl font-medium'>2 months</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default page


export const metadata = {
  title: "Experience - Vishwkant - Full Stack Developer",
  description: "Experience - Vishwkant - Personal Portfolio",
};