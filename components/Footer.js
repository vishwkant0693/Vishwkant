import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="text- body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="title-font font-medium items-center md:justify-start justify-center">
            <span className="ml-3 text-xl">Vishwkant.</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024  —
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@vishwkant0693</a>
          </p>
          <span className="inline-flex flex-wrap sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500" href='/'>
              Home
            </a>
            <a className="ml-3 text-gray-500" href='/about'>
              About
            </a>
            <a className="ml-3 text-gray-500" href='/qualification'>
              Qualification
            </a>
            <a className="ml-3 text-gray-500" href='/experience'>
              Experience
            </a>
            <a className="ml-3 text-gray-500" href='/skills'>
              Skills
            </a>
            <a className="ml-3 text-gray-500" href='/project'>
              Projects
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer