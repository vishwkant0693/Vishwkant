"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import hero from './hero.jpg'
import { TypeAnimation } from 'react-type-animation';

const page = () => {
  return (
    <>
      <div className="min-h-screen py-28">
        <div className="flex justify-around items-center mx-auto max-lg:flex-col-reverse max-lg:gap-10">
          <div className="text-4xl max-lg:mx-10">
            <div className="max-md:text-lg">
              <h1 className=''>Hi, My name is</h1>
              <h2 className='font-semibold'><span className='text-indigo-900 font-bold'>V</span>ishwkant,</h2>
              <h1>and I am a Passionate,</h1>
              <span id="element" className=' font-medium'>
                <TypeAnimation
                  sequence={['Web Developer,',
                    1000,
                    'MERN Stack,',
                    1000,
                    'Full Stack Developer.',
                    1000
                  ]}
                  wrapper='span'
                  speed={280}
                  deletionSpeed={200}
                />
              </span>
            </div>
            <ul className=' flex gap-6 items-center mt-5 py-3 rounded-2xl max-md:gap-3 max-sm:gap-2'>
              <li className=' bg-zinc-800 border outline outline-1 rounded-full transition hover:outline-offset-2 px-2'><a href="https://github.com/vishwkant0693"><box-icon type='logo' name='github'></box-icon></a></li>
              <li className=' bg-zinc-800 border  outline outline-1 rounded-full hover:outline-offset-2 px-2'><a href="https://www.instagram.com/vishwkant0693/"><box-icon name='instagram-alt' type='logo' ></box-icon></a></li>
              <li className=' bg-zinc-800 border outline outline-1 rounded-full hover:outline-offset-2 px-2'><a href="https://in.linkedin.com/in/vishw-kant-1855011a4"><box-icon name='linkedin-square' type='logo' ></box-icon></a></li>
              <li className=' bg-zinc-800 border outline outline-1 rounded-full hover:outline-offset-2 px-2'><a href="https://twitter.com/vishwkant0693?lang=bn"><box-icon type='logo' name='twitter'></box-icon></a></li>
              <Link className='bg-zinc-800 border outline outline-1 rounded-full hover:outline-offset-2 px-2' href="/Vishwkant-Resume"><box-icon type='solid' name='right-top-arrow-circle'></box-icon></Link>
            </ul>
            <div className="">
              <p className=' text-lg pt-4'><b>Contact Email : </b>vishwkant0693@gmail.com</p>
            </div>
          </div>
          <div>
            <Image src={hero}  alt="home" width={500} className='rounded-xl max-md:px-5' />
          </div>
        </div>
      </div>
    </>
  )
}

export default page