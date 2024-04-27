"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import hero from './hero.jpg'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="min-h-screen py-28">
        <div className="flex justify-around items-center mx-auto max-lg:flex-col-reverse max-lg:gap-10">
          <div className="md:text-4xl text-2xl px-4">
            <div className="">
              <h1 className=''>Hello, I&#39;m</h1>
              <h2 className='font-semibold'><span className='text-indigo-900 font-bold'>V</span>ishwkant,</h2>
              <h1>and I am a Passionate,</h1>
              <span id="element" className='font-medium'>
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
            <ul className=' flex gap-6 items-center mt-5 py-3 rounded-2xl'>
              <li className=''><a href="https://github.com/vishwkant0693"><FaGithub /></a></li>
              <li className=''><a href="https://www.instagram.com/vishwkant0693/"><FaInstagram /></a></li>
              <li className=''><a href="https://in.linkedin.com/in/vishw-kant-1855011a4"><FaLinkedin /></a></li>
              <li className=''><a href="https://twitter.com/vishwkant0693?lang=bn"><FaTwitter /></a></li>
            </ul>
            <Link className='' href="/Vishwkant-Resume">
              <button className='bg-zinc-900 rounded-xl text-sm border border-gray-400 flex items-center gap-x-2 px-10 md:px-20 py-2 md:text-2xl mt-3'>
                Resume <FaArrowRight />
              </button>
            </Link>
          </div>
          <div>
            <Image src={hero} alt="home" width={500} className='rounded-xl max-md:px-5' />
          </div>
        </div>
      </div>
    </>
  )
}

export default page