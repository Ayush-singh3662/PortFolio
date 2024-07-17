import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div name="Home" className="max-w-screen-2xl container p-2 px-4 md:px-20 my-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[55%] mt-12 md:mt-24 space-y-1 order-2 md:order-1">
          <span className="text-xl font-medium">Welcome in my Feed</span>
          <h1 className="space-x-1 text-2xl md:text-4xl">
            Hello, I&apos;m a{" "}
            <ReactTyped
              className="text-red-700 font-bold"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </h1>
          <p className="text-sm md:text-md text-justify pt-2 md:pt-4">
          Hello! I&apos;m Ayush Kumar, a passionate and dedicated MERN stack developer with a strong foundation in building dynamic, responsive, and user-friendly web applications. I have honed my skills in MongoDB, Express.js, React, and Node.js through various projects and hands-on experience.
          </p>
          <br />
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="space-y-2">
              <h1 className="font-semibold">Available on</h1>
              <div className="flex space-x-4">
                <a target="_blank" href="https://www.linkedin.com/in/ayush-kumar-30877221a/"><FaLinkedin className="cursor-pointer text-2xl" /></a>
                <a target="_blank" href="https://github.com/Ayush-singh3662"><FaGithub className="cursor-pointer text-2xl" /></a>
                <a target="_blank" href="https://leetcode.com/u/singh_3662/"><SiLeetcode className="cursor-pointer text-2xl" /></a>
                <a target="_blank" href="https://www.geeksforgeeks.org/user/singh_3662/"><SiGeeksforgeeks className="cursor-pointer text-2xl" /></a>
              </div>
            </div>
            <div className="space-y-2 pt-3 md:pt-0">
              <h1 className="font-semibold">Currently working on</h1>
              <div className="flex space-x-4">
                <SiMongodb className="cursor-pointer text-2xl" />
                <SiExpress className="cursor-pointer text-2xl" />
                <FaReact className="cursor-pointer text-2xl" />
                <FaNodeJs className="cursor-pointer text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-48 md:mt-20 mt-4 order-1 md:order-2">
            <img src="Profile.jpeg" className="rounded-full md:h-[450px] md:w-[450px]" alt="Profile Image" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home;
