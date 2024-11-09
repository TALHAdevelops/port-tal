import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div>
        <Navbar/>
    <div  className='bg-black h-[100px] max-w-[1200px] mx-auto text-center pt-7 '>
        <h1 className='primary-color  text-4xl'>This will be updated soon......</h1>
        {/* <div className="max-w-[1200px] mx-auto p-5">
            <div className="pb-8">
              I
              <p className="text-4x1 mb-3 font-bold primary-color">
                Work
              </p>
              <p className="text-gray-400">
                Check out some of my recent work
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div
                className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative"
              >
                <img
                  src={proj1}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
                <div
                  className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center"
                >
                  <span className="text-2xl font-bold text-white tracking-wider">
                    
                  </span>
                  <div className="pt-8 text-center">
                    <a href="/">
                      
                    </a>
                  </div>
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold"
                  >
                    
                  </button>
                </div>
              </div>
            </div>
            </div> */}
    </div>
    <Footer/>
    </div>
          
          
        );
      };


export default Projects;