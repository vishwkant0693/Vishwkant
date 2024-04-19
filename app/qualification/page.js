import React from 'react'
import { BiSolidSchool } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { FaSchool } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <section className="qualification min-h-screen">
        <h2 className="text-center text-4xl pt-10">Qualification</h2>
        <div className="flex flex-col justify-around py-10 max-md:py-5 bg-zinc-900 rounded-xl w-4/5 mx-auto px-10 max-md:px-5 my-8 border border-gray-500">
          <h4 className="text-xl max-md:text-md py-3 max-sm:py-1 max-sm:text-lg flex items-center gap-2"><FaSchool /> Full Stack Developer</h4>
          <h5 className="flex justify-between pl-8 py-1 max-sm:text-xs max-sm:flex-col">
            <div className="">DUCAT Pitampura</div>
            <div className="">2022-2023</div>
          </h5>
          <hr />
          <h4 className="text-xl max-md:text-md py-3 max-sm:py-1 max-sm:text-lg flex items-center gap-2"><MdOutlineSchool /> Graduation</h4>
          <h5 className="flex justify-between pl-8 py-1 max-sm:text-xs max-sm:flex-col">
            <div className="qual-title col-md-6">B.tech (Mechatronics) - DITE OKHLA PHASE - II, DELHI [IP University]
            </div>
            <div className="qual-year col-md-6">2018-2022</div>
          </h5>
          <hr />
          <h4 className="text-xl max-md:text-md py-3 max-sm:py-1 max-sm:text-lg flex items-center gap-2"><BiSolidSchool /> Class XII</h4>
          <h5 className="flex justify-between pl-8 py-1 max-sm:text-xs max-sm:flex-col">
            <div className="qual-title col-md-6">CBSE BOARD - RSBV Kalyanpuri</div>
            <div className="qual-year col-md-6">2018</div>
          </h5>
          <hr />
          <h4 className="text-xl max-md:text-md py-3 max-sm:py-1 max-sm:text-lg flex items-center gap-2"><BiSolidSchool /> Class X</h4>
          <h5 className="flex justify-between pl-8 py-1 max-sm:text-xs max-sm:flex-col">
            <div className="qual-title col-md-6">CBSE BOARD - RSBV Kondli</div>
            <div className="qual-year col-md-6">2015</div>
          </h5>
          <hr />
        </div>
      </section>
    </>
  )
}

export default page


export const metadata = {
  title: "Qualification - Vishwkant - Full Stack Developer",
  description: "Qualification - Vishwkant - Personal Portfolio",
};