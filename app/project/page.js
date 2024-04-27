"use client"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import next from '../assets/images/next.png';
import RevenueCat from '../assets/images/RevenueCat.png';
import HobbyCue from '../assets/images/hobbycue.png';
import nf from '../assets/images/nf1.png';
import knight from '../assets/images/knight.png';
import chart from '../assets/images/chart.png';
import reactcrud from '../assets/images/reactcrud1.png';
import djangocrud from '../assets/images/djangocrud1.png';
import quiz from '../assets/images/quiz.png';
import weather from '../assets/images/weather.png';
import calculator from '../assets/images/calculator.png';
import Image from 'next/image';

const Projects = [
  {
    id: 1,
    name: "Marty's Clinic",
    href: 'https://github.com/vishwkant0693/knight',
    imageSrc: next,
    imageAlt: "Marty's Clinic",
    tech: 'React, TailwindCSS, Node, MongoDB',
    category: 'react',
    description: "Marty's Clinic is a cutting-edge healthcare facility dedicated to providing comprehensive medical services. Our MERN Stack-powered platform ensures seamless patient experiences from booking appointments to accessing medical records. Through MongoDB, Express.js, React.js, and Node.js technologies,"
  },
  {
    id: 2,
    name: 'Knight Notes App',
    href: 'https://github.com/vishwkant0693/knight',
    imageSrc: knight,
    imageAlt: "Knight Notes App",
    tech: 'React, BootStrap, Node, MongoDB',
    category: 'react',
    description: 'Your digital platform for organizing, capturing, and sharing your thoughts effortlessly. We understand the importance of keeping your ideas, inspirations, and to-dos organized in one accessible place.'
  },
  {
    id: 3,
    name: "RevenueCat",
    href: 'https://revenuecat-test.netlify.app/',
    imageSrc: RevenueCat,
    imageAlt: "RevenueCat",
    tech: 'React, TailwindCSS',
    category: 'react',
    description: "RevenueCat is a assignment for a ReactJS Internship, It's is a ReactJS assignment focusing on creating a dynamic and user-friendly application for managing revenue and subscription data."
  },
  {
    id: 4,
    name: "HobbyCue",
    href: 'https://hobbycue-phi.vercel.app/',
    imageSrc: HobbyCue,
    imageAlt: "HobbyCue",
    tech: 'React, BootStrap',
    category: 'react',
    description: "HobbyCue is a assignment for a ReactJS Internship, This platform is dedicated to curating a diverse range of events, workshops, and gatherings tailored to your hobbies and interests."
  },
  {
    id: 5,
    name: 'Admin Panel',
    href: 'https://github.com/vishwkant0693/rqchart',
    imageSrc: chart,
    imageAlt: "Admin Panel",
    tech: 'React, ChartJS, BootStrap',
    category: 'react',
    description: "In an admin panel, Chart.js serves as a powerful tool for visualizing data and providing insights into various metrics and trends. Here's a description highlighting its key aspects: Data Visualization, Interactive Charts, Customization Options, Responsive Design."
  },
  {
    id: 6,
    name: 'React CRUD',
    href: 'https://github.com/vishwkant0693/React-CRUD-Operations',
    imageSrc: reactcrud,
    imageAlt: "React CRUD",
    tech: 'React, JSON',
    category: 'react',
    description: 'CRUD operations in ReactJS enable the creation, reading, updating, and deletion of data within web applications. They allow users to interact with data via a user-friendly interface.'
  },
  {
    id: 7,
    name: 'Django CRUD',
    href: 'https://github.com/vishwkant0693/Django-CRUD-Operations',
    imageSrc: djangocrud,
    imageAlt: "Django CRUD",
    tech: 'Django, JSON',
    category: 'react',
    description: 'CRUD operations in ReactJS enable the creation, reading, updating, and deletion of data within web applications. They allow users to interact with data via a user-friendly interface.'
  },
  {
    id: 8,
    name: 'Quiz Web Application',
    href: '#',
    imageSrc: quiz,
    imageAlt: "Quiz",
    tech: 'HTML, CSS & JS',
    category: 'basic',
    description: 'It is a web application that offers users engaging quizzes on various topics. With a sleek user interface, it enables seamless navigation and quiz-taking experience. '
  },
  {
    id: 9,
    name: 'Weather Web Application',
    href: '#',
    imageSrc: weather,
    imageAlt: "Weather",
    tech: 'JavaScript, WeatherAPI',
    category: 'basic',
    description: 'It is a user-friendly weather web app providing real-time forecasts, customizable location settings, and intuitive interface for seamless user experience.'
  },
  {
    id: 10,
    name: 'NetFlix Clone',
    href: '#',
    imageSrc: nf,
    imageAlt: "Netflix Clone",
    tech: 'HTML, CSS',
    category: 'basic',
    description: 'It is a sleek Netflix clone web app offering a vast library of movies and shows, personalized recommendations, and seamless streaming experience.'
  },
  {
    id: 11,
    name: 'Basic Calculator',
    href: 'https://github.com/vishwkant0693/Calculator',
    imageSrc: calculator,
    imageAlt: "Calculator",
    tech: 'JavaScript',
    category: 'basic',
    description: 'Calculator performs basic mathematical calculations, It is a simple yet powerful calculator web app offering basic arithmetic functions with a clean interface for quick calculations.'
  }
];

const Page = () => {
  const metadata = {
    title: "Projects - Vishwkant - Full Stack Developer",
    description: "Projects - Vishwkant - Personal Portfolio",
  };

  useEffect(() => {
    // Update document title
    document.title = metadata.title;

    // Update meta description
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', metadata.description);
    }
  }, [metadata.title, metadata.description]);

  const [item, setItem] = useState(Projects);

  const filterItem = (category) => {
    if (category === "all") {
      setItem(Projects);
    } else {
      const filteredItems = Projects.filter((project) => project.category === category);
      setItem(filteredItems);
    }
  };

  return (
    <>
      <section className="Project min-h-screen">
        <h2 className="text-center text-2xl md:text-4xl pt-10">Projects</h2>
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-wrap md:px-5 py-3 gap-2">
            <button className='btn border border-slate-300 text-slate-300 bg-black rounded-full px-5' onClick={() => filterItem("all")}>All</button>
            <button className='btn border border-slate-300 text-slate-300 bg-black rounded-full px-5' onClick={() => filterItem("basic")}>Frontend</button>
            <button className='btn border border-slate-300 text-slate-300 bg-black rounded-full px-5' onClick={() => filterItem("react")}>React</button>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
            {item.map((project) => (
              <div key={project.id} className="group relative bg-zinc-950 rounded-xl p-5 border border-gray-500">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 opacity-75 transition-opacity lg:aspect-none group-hover:opacity-100 lg:h-80">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 ">
                  <div className='flex flex-col md:flex-row justify-between items-baseline'>
                    <h3 className="text-md md:text-lg text-gray-700">
                      <a href={project.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {project.name}
                      </a>
                    </h3>
                    <p className="text-sm font-medium text-gray-700">{project.tech}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Head>
        {/* Set the document title */}
        <title>{metadata.title}</title>
        {/* Set the meta description */}
        <meta name="description" content={metadata.description} />
        {/* Add more meta tags if needed */}
      </Head>
    </>
  );
};

export default Page;





