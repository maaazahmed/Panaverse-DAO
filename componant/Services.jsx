"use client";
import Image from "next/image";
import khr from "../assets/city/khr.jpeg";
import lhr from "../assets/city/lhr.jpg";
import isb from "../assets/city/isb.jpg";
import psr from "../assets/city/psr.jpeg";
import { FiCode, FiFacebook, FiFileText, FiSmartphone,FiCpu, FiMonitor, FiFigma,FiPaperclip, FiPenTool, FiPhone, FiPhoneForwarded, FiWind } from "react-icons/fi";

const gradient = "bg-gradient-to-r from-logo-dark to-logo-light";
const gradientOverlay = "bg-gradient-to-r from-logo-dark/10 to-logo-light/10";

const Services = () => (
  <div className={"bg-cover bg-center availablty-custom-bg-image  relative"}>
    <div className="bg-fixed min-h-[100vh] px-[10rem] bg-black/70 backdrop-blur-xl  w-[100%]">
      <div className=" min-h-full  flex flex-col py-[5rem] pt-[10rem] px-2 ">
        <h2
          className={`text-[4rem] font-audiowide font-bold  tracking-widest  uppercase text-transparent bg-clip-text  ${gradient}`}
        >
          My Services
        </h2>

        <div class="grid grid-cols-3 gap-x-40 gap-y-[3rem] bg-[red]/0 mt-[5rem] ">
          {[
            {
              title: "Web Development",
              icon: <FiCode className="text-4xl" />,
              description: `I am a Full-Stack Developer with three years of experience,
            specializing in front-end and back-end development. I have
            expertise in HTML, CSS, JavaScript, ReactJS...`,
            },
            {
              title: "Mobile App Development",
              icon: <FiSmartphone className="text-4xl" />,
              description: `I am a Full-Stack Developer with three years of experience,
            specializing in front-end and back-end development. I have
            expertise in HTML, CSS, JavaScript, ReactJS...`,
            },
            {
              title: "Smartcontract Development",
              icon: <FiFileText className="text-4xl" />,
              description: `I am a Full-Stack Developer with three years of experience,
            specializing in front-end and back-end development. I have
            expertise in HTML, CSS, JavaScript, ReactJS...`,
            },
            {
              title: "Dapp Development",
              icon: <FiCpu className="text-4xl" />,
              description: `I am a Full-Stack Developer with three years of experience,
            specializing in front-end and back-end development. I have
            expertise in HTML, CSS, JavaScript, ReactJS...`,
            },
            {
              title: "UI/UX Designing",
              icon: <FiFigma className="text-4xl" />,
              description: `I am a Full-Stack Developer with three years of experience,
            specializing in front-end and back-end development. I have
            expertise in HTML, CSS, JavaScript, ReactJS...`,
            },
            {
              title: "Logo Designing",
              icon: <FiPenTool className="text-4xl" />,
              description: `I am a Full-Stack Developer with three years of experience,
            specializing in front-end and back-end development. I have
            expertise in HTML, CSS, JavaScript, ReactJS...`,
            },
          ].map((v, i) => (
            <div
             key={i}
              className={`mb-0 
            text-[#fff]
            self-center
            border-logo-light/80 border-[0px] rounded  scale-1 transition duration-150 ease-out md:ease-in hover:scale-[1.1] hover:z-[3]`}
            >
              <div
                className={`${"bg-gradient-to-r from-logo-dark/0 to-logo-light/0"} backdrop-blur-s items-center flex ju rounded`}
              >
                <div
                  className={`h-[60px] text-[#fff]  justify-center flex items-center w-[60px] backdrop-blur-sm ${gradientOverlay} border-[0px] rounded `}
                >
                 {v.icon}
                </div>
              </div>
              <h2
                className={`text-[1.3rem] font-audiowide my-5 font-bold space-x-1 tracking-widest uppercase text-transparent bg-clip-text  ${gradient}`}
              >
                {v.title}
              </h2>
              <p className="w-[100%] text-md mt-3 font-ShareTech capitalize text-justify">
                I am a Full-Stack Developer with three years of experience,
                specializing in front-end and back-end development. I have
                expertise in HTML, CSS, JavaScript, ReactJS...
              </p>

              <button
                className={`font-ShareTech capitalize text-lg font-bold border-[0px] border-[#fff] h-[45px] my-5 text-[#fff] justify-center flex items-center w-[160px] ${"bg-gradient-to-r from-logo-dark to-logo-light opacity-[0.8] transition ease-linear	 hover:opacity-[1] "} rounded `}
              >
                Hire Me
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Services;
