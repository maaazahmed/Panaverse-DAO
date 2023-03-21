"use client";
import Image from "next/image";
import khr from "../assets/city/khr.jpeg";
import lhr from "../assets/city/lhr.jpg";
import isb from "../assets/city/isb.jpg";
import psr from "../assets/city/psr.jpeg";
import core_munda from "../assets/bgs/A.png";
import {
  FiCode,
  FiFacebook,
  FiFileText,
  FiSmartphone,
  FiCpu,
  FiMonitor,
  FiFigma,
  FiPaperclip,
  FiPenTool,
  FiPhone,
  FiPhoneForwarded,
  FiWind,
} from "react-icons/fi";

const gradient = "bg-gradient-to-r from-logo-dark to-logo-light";
const gradientOverlay = "bg-gradient-to-r from-logo-dark/10 to-logo-light/10";

// const img_bg = "bg-[url(https://media.istockphoto.com/id/1405378443/vector/image-of-music-the-sparkling-light-and-musical-note-background-illustration.jpg?s=612x612&w=0&k=20&c=F68xWgo31l4oDzQeCTzt3SpEC2fXbXw0LkvzGzXJohE=)]";
// const img_bg = "bg-[url(https://img.freepik.com/free-vector/stream-binary-code-design-vector_53876-166142.jpg)]";
const img_bg =
  "bg-w[url(https://t3.ftcdn.net/jpg/04/16/11/80/360_F_416118046_NmF6EBULudUCuY4PLDqIOwQTaU5i7apL.jpg)]";
//
const CoreCourses = () => (
  <div className={"bg-cover bg-center availablty-custom-bg-image  relative"}>
    <div className="bg-fixed h-[100vh] px-[0rem] bg-black/0 backdrop-blur-xl  w-[100%]">
      <div className="justify-center min-h-[100vh] flex flex-col py-[0rem]">
        <div
          className={`${img_bg} bg-no-repeat bg-center bg-cover relative z-[-2] flex flex-row-reverse `}
        >
          <div
            className={`absolute bottom-0 right-[0rem] left-0 top-0 backdrop-blur-md ${"bg-gradient-to-r from-logo-dark/0 to-logo-light/0"} bg-black/80 z-[-1]`}
          />
          <div
            className={`px-[3rem] min-h-[60vh]  z-10 w-[60%] bg-[red]/0 flex flex-col justify-center `}
          >
            <h2
              className={`text-[4rem] z font-audiowide font-bold   tracking-widest  uppercase text-transparent bg-clip-text  ${gradient}`}
            >
              Core Courses
            </h2>
            <h2
              className={`text-[1.8rem]  font-audiowide font-bold  tracking-widest  uppercase text-transparent bg-clip-text  ${gradient}`}
            >
              (Common in All Specializations){" "}
            </h2>
            <p className="w-[70%] text-[#fff] text-2xl mt-3 font-ShareTech capitalize text-justify">
              Every participant of the program will start by completing the
              following three core courses:
            </p>
            <div className={`mt-[3rem] w-[100%]`}>
              <div className={`bg-fuchsia-600/0 flex justify-start`}>
                <div
                  className={`h-40 w-[67%] bg-gradient-to-r from-logo-dark/10 to-logo-light/10 rounded backdrop-blur-xl  flex `}
                >
                  <div
                    className={`w-[170px] flex items-center justify-center h-40 bg-gradient-to-r from-logo-dark/50 to-logo-light/50`}
                  >
                    <p className="font-Parisienne text-white text-[3.5rem]  ">
                      Q-1
                    </p>
                  </div>
                  <div className="flex-1 py-5 px-10 flex flex-col justify-center ">
                    <h2
                      className={`text-[1rem]  font-audiowide font-bold  tracking-widest  uppercase text-transparent bg-clip-text  ${gradient}`}
                    >
                      Quarter I (Core)
                    </h2>
                    <p className="w-[100%] text-[#fff] text-[1rem] mt-3 font-ShareTech capitalize text-justify">
                      CS-101: Object-Oriented Programming using TypeScript
                    </p>
                  </div>
                </div>
              </div>
              <div className={`bg-fuchsia-600/0 my-5 flex justify-center`}>
                <div
                  className={`h-40 w-[67%] bg-gradient-to-r from-logo-dark/10 to-logo-light/10 rounded backdrop-blur-xl  flex `}
                >
                  <div
                    className={`w-[170px] flex items-center justify-center h-40 bg-gradient-to-r from-logo-dark/50 to-logo-light/50`}
                  >
                    <p className="font-Parisienne text-white text-[3.5rem] ">
                      Q-2
                    </p>
                  </div>
                  <div className="flex-1 py-5 px-10 flex flex-col justify-center ">
                    <h2
                      className={`text-[1rem]  font-audiowide font-bold  tracking-widest  uppercase text-transparent bg-clip-text  ${gradient}`}
                    >
                      Quarter II (Core)
                    </h2>
                    <p className="w-[100%] text-[#fff] text-[1rem] mt-3 font-ShareTech capitalize text-justify">
                      W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud
                      Cloud Apps and APIs using Next.js 13 and Cloud Development
                      Kit (CDK) for Terraform
                    </p>
                  </div>
                </div>
              </div>
              <div className={` bg-fuchsia-600/0 flex justify-end`}>
                <div
                  className={`h-40 w-[67%] bg-gradient-to-r from-logo-dark/10 to-logo-light/10 rounded backdrop-blur-xl  flex `}
                >
                  <div
                    className={`w-[170px] flex items-center justify-center h-40 bg-gradient-to-r from-logo-dark/50 to-logo-light/50`}
                  >
                    <p className="font-Parisienne text-white text-[3.5rem] ">
                      Q-3
                    </p>
                  </div>
                  <div className="flex-1 py-5 px-10 flex flex-col justify-center ">
                    <h2
                      className={`text-[1rem]  font-audiowide font-bold  tracking-widest  uppercase text-transparent bg-clip-text  ${gradient}`}
                    >
                      Quarter III (Core)
                    </h2>
                    <p className="w-[100%] text-[#fff] text-[1rem] mt-3 font-ShareTech capitalize text-justify">
                      $-101: Dollar Making Bootcamp - Full-Stack Template and
                      API Product Development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={`flex-1 bg-[url(https://pngimage.net/wp-content/uploads/2018/06/imagem-tecnologia-png-5.png)] bg-no-repeat bg-center bg-containe bg-slate-50/0`}></div> */}
          <div
            className={`flex-1  bg-no-repeat bg-center bg-containe bg-slate-50/0 z-[0]  relative `}
          >
            {/* <div className={` absolute top-0 bottom-0 left-0 right-0 `} /> */}
            <Image
              className={`bg-gradient-to-r from-logo-dark/0 to-logo-light/0  h-[100vh] opacity-[1] `}
              src={
                // "https://pngimage.net/wp-content/uploads/2018/05/circuit-vector-png.png"
                core_munda
              }
            />
          </div>
        </div>
        {/* https://png.pngtree.com/png-vector/20230221/ourmid/pngtree-abstract-geometric-poster-cover-hexagon-technology-geometric-figure-light-blue-medical-png-image_6612470.png */}
        {/* <div class="grid grid-cols-3 gap-x-40 gap-y-[3rem] bg-[red]/0 mt-[5rem] ">
          {[
            {
              title: "Web Development",
              qtr: "Q-1",
              description: `I am a Full-Stack Developer with three years of experience,
            specializing in front-end and back-end development. I have
            expertise in HTML, CSS, JavaScript, ReactJS...`,
            },
            {
              title: "Mobile App Development",
              qtr: "Q-2",
              description: `I am a Full-Stack Developer with three years of experience,
            specializing in front-end and back-end development. I have
            expertise in HTML, CSS, JavaScript, ReactJS...`,
            },
            {
              title: "Smartcontract Development",
              qtr: "Q-3",
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
            border-logo-light/80 border-[0px] rounded   scale-1 transition duration-150 ease-out md:ease-in hover:scale-[1.1] hover:z-[3]`}
            >
              <div
                className={`${"bg-gradient-to-r from-logo-dark/10 to-logo-light/10"} backdrop-blur-s items-center flex ju rounded`}
              >
                <div
                  className={`h-[60px] text-[#fff] text-[1.5rem] font-[700]  justify-center flex items-center w-[60px] backdrop-blur-sm ${gradientOverlay} border-[0px] rounded `}
                >
                  {v.qtr}
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
        </div> */}
      </div>
    </div>
  </div>
);

export default CoreCourses;
