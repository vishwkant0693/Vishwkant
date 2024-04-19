import React from 'react'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiExpress, SiDjango, SiMongodb, SiVisualstudiocode, SiGithub, SiCanva } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsFiletypeJson, BsTriangleFill } from "react-icons/bs";
import { BiLogoNetlify } from "react-icons/bi";


const page = () => {
  return (
    <>
      <section className="Skills min-h-screen">
        <h2 className="text-center text-4xl pt-10">Skills</h2>
        <div className="grid grid-cols-2 w-4/5 mx-auto py-10 gap-10 text-xl max-md:grid-cols-1 max-sm:gap-4">
          <div className="bg-neutral-800 py-10 px-20 rounded-xl max-sm:px-10 border border-gray-500">
            <h3 className='border-b-2 mb-4'>FrontEnd</h3>
            <ul className='inline-flex flex-wrap gap-2 max-sm:text-xs'>
              <li className='skills'>
              <FaHtml5 /> HTML</li>
              <li className='skills'>
              <FaCss3Alt /> CSS</li>
              <li className='skills'>
                <SiJavascript /> JavaScript</li>
              <li className='skills'>
                <FaBootstrap /> BootStrap</li>
              <li className='skills'>
                <SiTailwindcss /> TaliwindCSS</li>
              <li className='skills'>
                <FaReact /> ReactJS</li>
              <li className='skills'>
                <SiNextdotjs /> NextJS</li>
            </ul>
          </div>
          <div className="bg-cyan-950 py-10 px-20 rounded-xl max-sm:px-10 border border-gray-500">
            <h3 className='border-b-2 mb-4'>BackEnd</h3>
            <ul className='inline-flex flex-wrap gap-2 max-sm:text-xs'>
              <li className='skills'>
                <FaNodeJs /> NodeJS</li>
              <li className='skills'>
                <SiExpress /> ExpressJS</li>
              <li className='skills'>
                <FaPython /> Python</li>
              <li className='skills'>
                <SiDjango /> Django</li>
            </ul>
          </div>
          <div className="bg-gray-800 py-10 px-20 rounded-xl max-sm:px-10 border border-gray-500">
            <h3 className='border-b-2 mb-4'>Databases</h3>
            <ul className='inline-flex flex-wrap gap-2 max-sm:text-xs'>
              <li className='skills'>
                <GrMysql /> MySQL</li>
              <li className='skills'>
                <SiMongodb /> MongoDB</li>
              <li className='skills'>
              <BsFiletypeJson /> JSON Server</li>
            </ul>
          </div>
          <div className="bg-zinc-800 py-10 px-20 rounded-xl max-sm:px-10 border border-gray-500">
            <h3 className='border-b-2 mb-4'>Technologies</h3>
            <ul className='inline-flex flex-wrap gap-2 max-sm:text-xs'>
              <li className='skills'>
                <SiVisualstudiocode /> VS Code</li>
              <li className='skills'>
                <FaGitAlt /> Git Bash</li>
              <li className='skills'>
                <SiGithub /> GitHub</li>
              <li className='skills'>
                <SiCanva /> Canva</li>
                <li className='skills'>
                <BsTriangleFill /> Varcel</li>
                <li className='skills'>
                <BiLogoNetlify /> Netlify</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default page


export const metadata = {
  title: "Skills - Vishwkant - Full Stack Developer",
  description: "Skills - Vishwkant - Personal Portfolio",
};