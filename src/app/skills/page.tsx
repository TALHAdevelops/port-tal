import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import nextjs from '../assets/nextjs.png';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Skills = () => {
  return (
    <div>
        <Navbar/>
    <div className='bg-black -mt-4  md:mx-9 max-w-[1200px] mx-auto'>
     <div className='text-center '>
 <h2 className="text-red-400 text-2xl md:text-5xl font-bold m-4 pt-8 underline">
        My  Skils  Stack
      </h2>
      </div>
      <br /><br />
    <div className="bg-inherit text-lime-500 max-w-[1200px] mx-auto grid grid-cols-3 gap-4 place-items-center md:flex md:justify-between md:items-center">

    
<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] font-serif">
  <Image src={html} alt="" />
  <p className="mt-2">HTML</p>
</div>
<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <Image src={css} alt="" width={100} height={100} />
  <p className="mt-2">CSS</p>
</div>
<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <Image src={javascript} alt="" width={100} height={100} />
  <p className="mt-2">JAVASCRIPT</p>
</div>
<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <Image src={tailwind} alt="" width={100} height={100} />
  <p className="mt-2">TAILWIND</p>
</div>
<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <Image src={react} alt="" width={100} height={100} />
  <p className="mt-2">REACT.JS</p>
</div>
<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <Image src={nextjs} alt="" width={100} height={100} />
  <p className="mt-2">NEXT.JS</p>
</div>
</div>
<br />
<div>
     <p className='text-white px-10 font-semibold text-lg'>
     "I'm a dedicated front-end developer with expertise in HTML, CSS, JavaScript, React.js, and Next.js. I specialize in creating responsive, high-performance web applications with a focus on clean design and seamless user experiences. My goal is to continuously improve and deliver efficient, scalable solutions that meet modern web development standards."
     </p>
     </div>
</div>
<Footer/>
</div>
  );
};

export default Skills;