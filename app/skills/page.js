import React from 'react'

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
                <box-icon type='logo' name='html5'></box-icon>HTML</li>
              <li className='skills'>
                <box-icon name='css3' type='logo' ></box-icon>CSS</li>
              <li className='skills'>
                <box-icon name='javascript' type='logo' ></box-icon>JavaScript</li>
              <li className='skills'>
                <box-icon name='bootstrap' type='logo' ></box-icon>BootStrap</li>
              <li className='skills'>
                <box-icon name='tailwind-css' type='logo' ></box-icon>TaliwindCSS</li>
              <li className='skills'>
                <box-icon name='react' type='logo' ></box-icon>ReactJS</li>
              <li className='skills'>
                <box-icon type='solid' name='file-js'></box-icon>NextJS</li>
            </ul>
          </div>
          <div className="bg-cyan-950 py-10 px-20 rounded-xl max-sm:px-10 border border-gray-500">
            <h3 className='border-b-2 mb-4'>BackEnd</h3>
            <ul className='inline-flex flex-wrap gap-2 max-sm:text-xs'>
              <li className='skills'>
                <box-icon name='python' type='logo' ></box-icon>Python</li>
              <li className='skills'>
                <box-icon name='django' type='logo' ></box-icon>Django</li>
              <li className='skills'>
                <box-icon name='nodejs' type='logo' ></box-icon>NodeJS</li>
              <li className='skills'>
                <box-icon name='server' type='solid' ></box-icon>ExpressJS</li>
            </ul>
          </div>
          <div className="bg-gray-800 py-10 px-20 rounded-xl max-sm:px-10 border border-gray-500">
            <h3 className='border-b-2 mb-4'>Databases</h3>
            <ul className='inline-flex flex-wrap gap-2 max-sm:text-xs'>
              <li className='skills'>
                <box-icon type='solid' name='data'></box-icon>MySQL</li>
              <li className='skills'>
                <box-icon name='mongodb' type='logo' ></box-icon>MongoDB</li>
              <li className='skills'>
              <box-icon type='solid' name='file-json'></box-icon>JSON Server</li>
            </ul>
          </div>
          <div className="bg-zinc-800 py-10 px-20 rounded-xl max-sm:px-10 border border-gray-500">
            <h3 className='border-b-2 mb-4'>Technologies</h3>
            <ul className='inline-flex flex-wrap gap-2 max-sm:text-xs'>
              <li className='skills'>
                <box-icon type='logo' name='visual-studio'></box-icon>VS Code</li>
              <li className='skills'>
                <box-icon name='git' type='logo' ></box-icon>Git Bash</li>
              <li className='skills'>
                <box-icon name='github' type='logo' ></box-icon>GitHub</li>
              <li className='skills'>
                <box-icon name='edit'></box-icon>Canva</li>
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