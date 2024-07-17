// import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="py-12">
        <div className="flex flex-col items-center justify-center max-w-screen-2xl container p-2 px-4 md:px-20">
            <div className="flex space-x-4 ">
              <a target="_blank" href="https://www.instagram.com/ayush_singh3662/"><FaInstagram className="text-2xl"/></a>
              <a target="_blank" href="https://www.linkedin.com/in/ayush-kumar-30877221a/"><FaLinkedin className="text-2xl"/></a>
              <a target="_blank" href="https://x.com/AyushSi96073865"><FaSquareXTwitter className="text-2xl"/></a>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100014020774134"><FaFacebook className="text-2xl"/></a>
            </div>
            <div className=" mt-8 pt-8 border-t border-gray-700 flex flex-col items-center justify-center">
              <p className="text-sm">Copyright &copy; All rights reserved.</p>
              <p className="text-sm">Developed by Ayush Kumar</p>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer