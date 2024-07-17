// import React from 'react'

const Projects = () => {
  return (
    <div name="Projects" className="max-w-screen-2xl container p-2 px-4 md:px-20 my-16">
        <h1 className="font-bold text-3xl mb-5">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:h-auto md:w-auto rounded-lg shadow-lg border-[2px] p-1 cursor-pointer">
            <img className="p-1 m-1 rounded-full h-[100px] w-[100px] border-[2px]" src="favicon.png" alt="icon" />
            <h2 className="m-1 font-semibold text-xl">PortFolio</h2>
            <p className="mx-1 mb-2"><span className="font-medium text-lg">Tech Stack: </span>HTML, CSS, Javascript, React JS, Tailwind CSS</p>
            <a target="_blank" href="https://github.com/Ayush-singh3662/PortFolio"><button className="text-white bg-green-500 py-2 px-1 rounded-lg mx-1 shadow-md hover:scale-105 duration-200">Source Code</button></a>
          </div>
          <div className="md:h-auto md:w-auto rounded-lg shadow-lg border-[2px] p-1 cursor-pointer">
            <img className="p-1 m-1 rounded-full h-[100px] w-[100px] border-[2px]" src="netflix.png" alt="icon" />
            <h2 className="m-1 font-semibold text-xl">NetflixGpt</h2>
            <p className="mx-1 mb-2"><span className="font-medium text-lg">Tech Stack: </span>HTML, CSS, Javascript, React JS, Tailwind CSS, Redux</p>
            <a target="_blank" href="https://github.com/Ayush-singh3662/NetflixGPT"><button className="text-white bg-green-500 py-2 px-1 rounded-lg mx-1 shadow-md hover:scale-105 duration-200">Source Code</button></a>
          </div>
          <div className="md:h-auto md:w-auto rounded-lg shadow-lg border-[2px] p-1 cursor-pointer">
            <img className="p-1 m-1 rounded-full h-[100px] w-[100px] border-[2px]" src="ChatApp.png" alt="icon" />
            <h2 className="m-1 font-semibold text-xl">ChatApp</h2>
            <p className="mx-1 mb-2"><span className="font-medium text-lg">Tech Stack: </span>HTML, CSS, Javascript, Daisy UI, React JS, Node JS, Express JS, Redux, Socket.io</p>
            <a target="_blank" href="https://github.com/Ayush-singh3662/mern-chat-app"><button className="text-white bg-green-500 py-2 px-1 rounded-lg mx-1 shadow-md hover:scale-105 duration-200">Source Code</button></a>
          </div>
        </div>
    </div>
  )
}

export default Projects