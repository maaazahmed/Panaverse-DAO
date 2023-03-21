"use client";
import Image from "next/image";
import khr from "../assets/city/khr.jpeg";
import lhr from "../assets/city/lhr.jpg";
import isb from "../assets/city/isb.jpg";
import psr from "../assets/city/psr.jpeg";
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

const Services = () => (
  <div className={"bg-cover bg-center availablty-custom-bg-image relative"}>
    <div className="bg-fixed min-h-[100vh] mt-[-15vh] pt-[15vh] flex px-[10rem] bg-black/80 backdrop-blur-xl w-[100%]">
      <div className="w-[100%] flex flex-col justify-center ">
        <div className=" w-[100%] self-end mx-auto bg-white/0 flex flex-col items-center ">
          <h2
            className={`text-[2.5rem] text-center w-[70%] font-audiowide font-bold uppercase text-transparent bg-clip-text tracking-widest	  ${gradient}`}
          >
            The Program in a Nutshell
          </h2>
          <h2
            className={
              // "text-[3.4rem] w-[80%] font-audiowide font-bold uppercase text-transparent bg-clip-text ${} "
              `text-[2rem] text-center w-[70%] font-audiowide font-bold uppercase text-transparent tracking-widest	 bg-clip-text ${gradient}`
            }
          >
            Earn While You Learn
          </h2>
          {/* <h2 className={"text-[5rem] font-bold"}>Earn While You Learn</h2> */}
          <p className=" text-xl text-center w-[90%] text-white mt-3 font-ShareTech capitalize">
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program's beginning. It resembles a
            cross between a corporate venture and an educational project.
          </p>
        </div>
        <div className={`h-[2px] rounded-full ${gradient} my-10 mx-auto w-[20rem]`} />
        <div className=" w-[100%] text-center mx-auto bg-white/0  flex flex-col items-center ">
          <h2
            className={`text-[1.5rem] w-[70%] font-audiowide font-bold uppercase text-transparent bg-clip-text tracking-widest	  ${gradient}`}
          >
            Program of Studies
          </h2>

          <p className=" text-xl w-[90%] text-white mt-3  font-ShareTech capitalize">
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first three quarters are shared
            by all specialties and are dedicated to studying Object-Oriented
            Programming and cutting-edge Full-Stack Web 2.0 development. It is
            going to be a fifteen-month-long hybrid program that includes both
            onsite and online classes and is divided into five quarters of 13
            weeks each. The emphasis will be on hands-on learning by educating
            students to produce projects. To accommodate everyone, courses will
            be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
            weekdays. It employs a hybrid teaching format, with core onsite
            classes complemented by online Zoom laboratories and recorded
            videos.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
