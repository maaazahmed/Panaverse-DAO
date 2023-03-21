"use client";
import Image from "next/image";
import khr from "../assets/city/khr.jpeg";
import lhr from "../assets/city/lhr.jpg";
import isb from "../assets/city/isb.jpg";
import psr from "../assets/city/psr.jpeg";
import core_munda from "../assets/bgs/A.png";
import spci from "../assets/bgs/World-Map-PNG-Image-File.png";
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
  <div className={"bg-cover bg-center availablty-custom-bg-image relative"}>
    <div className="bg-fixed min-h-[100vh] px-[0rem] bg-black/80 backdrop-blur-xl  w-[100%]">
      <div className=" flex flex-col px-[10rem] py-[5rem]">
        <h2
          className={`text-[4rem] z font-audiowide font-bold   tracking-widest  uppercase text-transparent bg-clip-text  ${gradient}`}
        >
          Specialized Tracks
        </h2>
        <p className="w-[70%] text-[#fff] text-2xl mt-3 font-ShareTech capitalize text-justify">
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each
        </p>
        {/* <div className={`mt-[3rem] w-[100%]`}>
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
            </div> */}
      </div>
      <div className="flex  bg-[red]/0 ">
        {/* <div className="flex flex-col justify-center px-[5rem] ">
          <div className={`flex`}>
            <div
              className={`h-40 w-[100%] bg-gradient-to-r from-logo-dark/10 to-logo-light/10 rounded backdrop-blur-xl  flex `}
            >
              <div
                className={`w-[170px] flex items-center justify-center h-40 bg-gradient-to-r from-logo-dark/50 to-logo-light/50`}
              >
                <p className="font-Parisienne text-white text-[3.5rem] ">Q-3</p>
              </div>
              <div className="flex-1 py-5 px-10 flex flex-col justify-center ">
                <h2
                  className={`text-[1rem]  font-audiowide font-bold  tracking-widest  uppercase text-transparent bg-clip-text  ${gradient}`}
                >
                  Quarter III (Core)
                </h2>
                <p className="w-[100%] text-[#fff] text-[1rem] mt-3 font-ShareTech capitalize text-justify">
                  $-101: Dollar Making Bootcamp - Full-Stack Template and API
                  Product Development
                </p>
              </div>
            </div>
          </div>
          <div className={`flex my-5 `}>
            <div
              className={`h-40 w-[100%] bg-gradient-to-r from-logo-dark/10 to-logo-light/10 rounded backdrop-blur-xl  flex `}
            >
              <div
                className={`w-[170px] flex items-center justify-center h-40 bg-gradient-to-r from-logo-dark/50 to-logo-light/50`}
              >
                <p className="font-Parisienne text-white text-[3.5rem] ">Q-3</p>
              </div>
              <div className="flex-1 py-5 px-10 flex flex-col justify-center ">
                <h2
                  className={`text-[1rem]  font-audiowide font-bold  tracking-widest  uppercase text-transparent bg-clip-text  ${gradient}`}
                >
                  Quarter III (Core)
                </h2>
                <p className="w-[100%] text-[#fff] text-[1rem] mt-3 font-ShareTech capitalize text-justify">
                  $-101: Dollar Making Bootcamp - Full-Stack Template and API
                  Product Development
                </p>
              </div>
            </div>
          </div>
          <div className={`flex`}>
            <div
              className={`h-40 w-[100%] bg-gradient-to-r from-logo-dark/10 to-logo-light/10 rounded backdrop-blur-xl  flex `}
            >
              <div
                className={`w-[170px] flex items-center justify-center h-40 bg-gradient-to-r from-logo-dark/50 to-logo-light/50`}
              >
                <p className="font-Parisienne text-white text-[3.5rem] ">Q-3</p>
              </div>
              <div className="flex-1 py-5 px-10 flex flex-col justify-center ">
                <h2
                  className={`text-[1rem]  font-audiowide font-bold  tracking-widest  uppercase text-transparent bg-clip-text  ${gradient}`}
                >
                  Quarter III (Core)
                </h2>
                <p className="w-[100%] text-[#fff] text-[1rem] mt-3 font-ShareTech capitalize text-justify">
                  $-101: Dollar Making Bootcamp - Full-Stack Template and API
                  Product Development
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="w-[40%] h-[600px] flex justify-center items-center ">
          <Image
            className=" object-cover "
            src={spci}
            alt={"spci"}
          />
        </div>
        {/* <div className="bg-[blue]/0 flex-1"></div> */}
        {/* <div className="flex flex-col justify-center px-[5rem]">
          <div className={`flex`}>
            <div
              className={`h-40 w-[100%] bg-gradient-to-r from-logo-dark/10 to-logo-light/10 rounded backdrop-blur-xl  flex flex-row-reverse `}
            >
              <div
                className={`w-[170px] flex items-center justify-center h-40 bg-gradient-to-r from-logo-dark/50 to-logo-light/50`}
              >
                <p className="font-Parisienne text-white text-[3.5rem] ">Q-3</p>
              </div>
              <div className="flex-1 py-5 px-10 flex flex-col justify-center ">
                <h2
                  className={`text-[1rem]  font-audiowide font-bold  tracking-widest  uppercase text-transparent bg-clip-text  ${gradient}`}
                >
                  Quarter III (Core)
                </h2>
                <p className="w-[100%] text-[#fff] text-[1rem] mt-3 font-ShareTech capitalize text-justify">
                  $-101: Dollar Making Bootcamp - Full-Stack Template and API
                  Product Development
                </p>
              </div>
            </div>
          </div>
          <div className={`flex my-5 `}>
            <div
              className={`h-40 w-[100%] bg-gradient-to-r from-logo-dark/10 to-logo-light/10 rounded backdrop-blur-xl  flex flex-row-reverse`}
            >
              <div
                className={`w-[170px] flex items-center justify-center h-40 bg-gradient-to-r from-logo-dark/50 to-logo-light/50`}
              >
                <p className="font-Parisienne text-white text-[3.5rem] ">Q-3</p>
              </div>
              <div className="flex-1 py-5 px-10 flex flex-col justify-center ">
                <h2
                  className={`text-[1rem]  font-audiowide font-bold  tracking-widest  uppercase text-transparent bg-clip-text  ${gradient}`}
                >
                  Quarter III (Core)
                </h2>
                <p className="w-[100%] text-[#fff] text-[1rem] mt-3 font-ShareTech capitalize text-justify">
                  $-101: Dollar Making Bootcamp - Full-Stack Template and API
                  Product Development
                </p>
              </div>
            </div>
          </div>
          <div className={`flex`}>
            <div
              className={`h-40 w-[100%] bg-gradient-to-r from-logo-dark/10 to-logo-light/10 rounded backdrop-blur-xl  flex flex-row-reverse`}
            >
              <div
                className={`w-[170px] flex items-center justify-center h-40 bg-gradient-to-r from-logo-dark/50 to-logo-light/50`}
              >
                <p className="font-Parisienne text-white text-[3.5rem] ">Q-3</p>
              </div>
              <div className="flex-1 py-5 px-10 flex flex-col justify-center ">
                <h2
                  className={`text-[1rem]  font-audiowide font-bold  tracking-widest  uppercase text-transparent bg-clip-text  ${gradient}`}
                >
                  Quarter III (Core)
                </h2>
                <p className="w-[100%] text-[#fff] text-[1rem] mt-3 font-ShareTech capitalize text-justify">
                  $-101: Dollar Making Bootcamp - Full-Stack Template and API
                  Product Development
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
);

export default CoreCourses;
