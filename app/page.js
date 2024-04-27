"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link'
import { CgArrowTopRightO } from "react-icons/cg";


const page = () => {
  return (
    <>
      <div className="min-h-screen py-28">
        <div className="flex flex-col items-center md:text-4xl text-2xl">
          <h1 className=''>Hello, I&#39;m</h1>
          <h2 className='md:text-8xl text-4xl font-medium py-5'><span className='text-indigo-900 font-bold'>V</span>ishw<span className='font-extrabold'>kant</span></h2>
          <span id="element" className='font-medium md:text-6xl text-2xl md:py-5'>
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
          <Link className='py-5' href="/Vishwkant-Resume">
            <button className='text-sm border rounded-full border-gray-400 hover:bg-zinc-900 flex items-center transition gap-x-5 px-10 py-3 md:text-xl mt-3'>
              Resume <CgArrowTopRightO />
            </button>
          </Link>
          <ul className='flex gap-8 items-center md:py-8 rounded-2xl'>
            <li className=''><a href="https://github.com/vishwkant0693"><FaGithub /></a></li>
            <li className=''><a href="https://www.instagram.com/vishwkant0693/"><FaInstagram /></a></li>
            <li className=''><a href="https://in.linkedin.com/in/vishw-kant-1855011a4"><FaLinkedin /></a></li>
            <li className=''><a href="https://twitter.com/vishwkant0693?lang=bn"><FaTwitter /></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default page