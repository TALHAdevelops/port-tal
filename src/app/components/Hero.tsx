import React from 'react' 


const Hero= () => {
return (
<div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 pt-[100px] pb-[160px] bg-black'>
<div className='my-auto mx-auto'>
<div className='w-[300px] h-auto 1g:w-[400px] '>
<img src="https://media.istockphoto.com/id/1147195672/photo/focused-developer-coding-on-computer-monitors-working-late-in-office.jpg?s=612x612&w=0&k=20&c=R6oPQ_vkXAxCzpi4UFsN28pdU0C0LJL8JLAX-HwO90Q=" alt="talha's pic"  />
</div>
</div>
<div className='col-span-2 px-5'>

  <h1 className="text-white text-2xl sm:text-5xl lg:text-7xl font-extrabold">
    <span className="primary-color">
     Hi, I'm 
    </span>
    <br />
   Muhammad Talha
  </h1>
  <p className="text-white sm:text-lg my-6 lg:text-xl">
  Hi, I'm <span className='primary-color'>M. Talha</span>, a passionate front-end developer, constantly learning and building innovative projects that bring ideas to life through clean, dynamic code.
</p>
<div className='my-8'>
  <a href="/" className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
  To Hire/For Projects
  </a>
  
</div>
</div>
</div>
)
}
export default Hero