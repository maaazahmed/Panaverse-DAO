"use client";
import Image from "next/image";
import khr from "../assets/city/khr.jpeg";
import lhr from "../assets/city/lhr.jpg";
import isb from "../assets/city/isb.jpg";
import psr from "../assets/city/psr.jpeg"


const Availablty = () => (
  <div className={"bg-cover bg-center availablty-custom-bg-image  relative"}>
    <div className="bg-black/80 h-[100vh] px-[10rem]  backdrop-blur-xl  w-[100%] flex">
      <div className="w-[50%] h-full  justify-center flex flex-col py-[10rem] px-2 ">
        <h2
          className={
            "text-[3.5rem] py-3 font-audiowide font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#df072a] to-[#a11328]"
          }
        >
          Web 3.0 & Metaverse
        </h2>
        <p className=" text-2xl w-[80%] font-ShareTech capitalize text-white ">
          The Future of the Web is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r font-audiowide from-[#df072a] to-[#a11328]">
            Web 3.0
          </span>{" "}
          {" , "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r font-audiowide from-[#df072a] to-[#a11328]">
            Metaverse{" "}
          </span>
          , and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r font-audiowide from-[#df072a] to-[#a11328]">
            {" "}
            Edge Computing{" "}
          </span>
          . Panaverse DAO is a movement to spread these technolgies globally. It
          is community of Web 3 and Metaverse developers, designers, trainers,
          startup founders and service providers.{" "}
        </p>
      </div>
      <div className="flex-1  min-h-full flex items-center flex-col justify-center">
        <div className="w-[80%] min-h-[37.5rem]  flex">
          <div className="h-[30rem]  mx-2 w-rem flex-1 self-end ">
            <div className="h-[15rem] my-4 w-[100%] backdrop-blur-xl bg-gradient-to-r bg-white/5 border-white/10 border-[1px] rounded">
              <Image className="h-full w-full object-fill		" src={khr} alt="" />
            </div>
            <div className="h-[15rem] w-[100%] backdrop-blur-xl bg-gradient-to-r bg-white/5 border-white/10 border-[1px] rounded">
              <Image className="h-full w-full object-fill		" src={lhr} alt="" />
            </div>
          </div>
          <div className="h-[30rem]  mx-2 w-rem flex-1 ">
            <div className="h-[15rem] my-4 w-[100%] backdrop-blur-xl bg-gradient-to-r bg-white/5 border-white/10 border-[1px] rounded">
              <Image className="h-full w-full object-fill		" src={isb} alt="" />
            </div>
            <div className="h-[15rem] w-[100%] backdrop-blur-xl bg-gradient-to-r bg-white/5 border-white/10 border-[1px] rounded">
              <Image className="h-full w-full object-fill		" src={psr} alt="" />
            </div>
          </div>
        </div>
        <p className=" text-3xl  mt-[5rem] font-[700] w-[80%]  font-audiowide capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#df072a] to-[#a11328] text-center ">
          Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar
        </p>
      </div>
    </div>
  </div>
);

export default Availablty;
