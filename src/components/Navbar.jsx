// import React from 'react'
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
    const[menu, setMenu] = useState(false);
    const list = [
        {
            key: 1,
            text: "Home"
        },
        {
            key: 2,
            text: "About"
        },
        {
            key: 3,
            text: "Projects"
        },
        {
            key: 4,
            text: "Skills"
        },
        {
            key: 5,
            text: "Contact"
        }

    ];
  return (
    <div className='max-w-screen-2xl container p-2 px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white z-10'>
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2 mb-3'>
                <img src="Profile.jpeg" className='h-12 w-12 rounded-full cursor-pointer' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>Ayus<span className='text-green-500'>h</span>
                <p className='text-sm'>Web Developer</p>
                </h1>
            </div>
            <div className="flex">
                <ul className='hidden md:flex space-x-10 font-medium'>
                    {list.map(({id, text}) => (
                        <l className="cursor-pointer hover:scale-105 duration-200" key={id}><Link to={text} smooth={true} duration={500} offset={-70} activeClass="active" >{text}</Link></l>
                    ))}
                </ul>
                <div onClick={() => setMenu(!menu)} className="md:hidden">
                    {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                </div>
            </div>
        </div>
        {menu && (
            <div className="bg-white z-10">
                <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-lg font-medium">
                    {list.map(({id, text}) => (
                        <l className="cursor-pointer hover:scale-105 duration-200" key={id}><Link onClick={() => (setMenu(!menu))} to={text} smooth={true} duration={500} offset={-70} activeClass="active" >{text}</Link></l>
                    ))}
                </ul>
            </div>
        )}
    </div>
  )
}

export default Navbar