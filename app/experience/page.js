import React from 'react'

const page = () => {
  return (
    <>
      <section className="Experience min-h-screen">
        <h2 className="text-center text-4xl pt-10 pb-5 max-sm:text-2xl">Experience</h2>
        <div className=" py-10 max-sm:py-5 bg-zinc-900 rounded-xl w-4/5 mx-auto px-10 max-sm:px-5 my-8 border border-gray-500">
          <div className="">
          <div className="flex justify-between items-center">
            <h1 className='text-2xl font-semibold max-md:text-base'>Krenai</h1>
            <p className='text-xl font-medium max-md:text-base'>2 months</p>
          </div>
            <h2 className='pb-2 max-sm:text-xs'>IT Services and IT Consulting</h2>
            <h2 className='pb-3 max-sm:text-xs'> <span className=' font-medium'>Role :</span> ReactJS Developer</h2>
            <p className=' text-xs pb-2'>Gurugram, Haryana [ Work from home ]</p>
            <p className='text-xs'>Jan 2024 - Mar 2024 </p>
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