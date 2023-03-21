"use client";
import React from "react";
import Image from "next/image";
import { FiFacebook, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const gradient = "bg-gradient-to-r from-logo-dark to-logo-light";
const gradientOverlay =
  "bg-gradient-to-r from-logo-dark/10 to-logo-light/10 border-logo-light/10";

interface HeroProps {
  heading: string;
  message: string;
}
interface LandingPageIconCardProps {
  img: any;
  mode: "light" | "dark";
}

const LandingPageIconCard = ({ img, mode }: LandingPageIconCardProps) => (
  <div
    className={` h-[10rem] w-[10rem] backdrop-blur-xl  ${
      mode == "light"
        ? "bg-gradient-to-r from-logo-dark/10 to-logo-light/10"
        : "bg-gradient-to-r from-logo-dark/50 to-logo-light/50"
    } border-logo-light/10 border-[0px] rounded flex items-center justify-center scale-1 transition duration-150 ease-out md:ease-in hover:scale-[1.5] hover:z-[3]`}
  >
    <Image height={80} width={80} src={img} alt="" />
  </div>
);

const Hero = ({ heading, message }: HeroProps) => (
  <div className="flex flex-col px-[10rem] min-h-[115vh] mb-0 bg-fixed bg-cover bg-center custom-img pt-[10rem]">
    <div className=" absolute top-0 left-0 right-0 bottom-[-10rem] bg-black/80 backdrop-blur-xl z-[2]" />
    <div className="flex items-center">
      <div className=" w-[60%] text-white z-[2] ">
        <h2
          className={`text-[5rem] font-audiowide font-bold uppercase text-transparent bg-clip-text tracking-widest	  ${gradient}`}
        >
          In a Nutshell
        </h2>
        <h2
          className={
            // "text-[3.4rem] w-[80%] font-audiowide font-bold uppercase text-transparent bg-clip-text ${} "
            `text-[2.7rem] font-audiowide font-bold uppercase text-transparent tracking-widest	 bg-clip-text ${gradient}`
          }
        >
          Earn While You Learn
        </h2>
        {/* <h2 className={"text-[5rem] font-bold"}>Earn While You Learn</h2> */}
        <p className=" text-2xl w-[90%] mt-3 font-ShareTech capitalize">
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program's beginning. It resembles a cross
          between a corporate venture and an educational project.
        </p>

        <div className="flex justify-center flex-col w-[80%]">
          <div className=" h-[80px] bg-[red]/0 w-[50%] flex items-center   font-ShareTech capitalize my-[1rem]">
            <button
              className={`h-[50px] mr-3 justify-center flex items-center w-[50px] backdrop-blur-sm ${gradientOverlay} border-[0px] rounded `}
            >
              <FiFacebook className="text-3xl" />
            </button>
            <button
              className={`h-[50px] mr-3 justify-center flex items-center w-[50px] backdrop-blur-sm ${gradientOverlay} border-[0px] rounded `}
            >
              <FiGithub className="text-3xl" />
            </button>
            <button
              className={`h-[50px] mr-3 justify-center flex items-center w-[50px] backdrop-blur-sm ${gradientOverlay} border-[0px] rounded `}
            >
              <FiLinkedin className="text-3xl" />
            </button>
            <button
              className={`h-[50px] mr-3 justify-center flex items-center w-[50px] backdrop-blur-sm ${gradientOverlay} border-[0px] rounded `}
            >
              <FiInstagram className="text-3xl" />
            </button>
            {/* rounded backdrop-blur-xl bg-gradient-to-r from-[rgba(223,7,43,.0)] to-[rgba(161,19,40,.0)] border-white/10 border-[1px]  flex items-center justify-center */}
          </div>
          <button
            className={`px-[0rem] w-[234px] text-2xl py-3 mt-0  font-ShareTech capitalize rounded ${gradient}`}
          >
            Apply Now
          </button>
        </div>
      </div>
      <div
        className={`flex items-center justify-center bg-white/0 h-full duration-500 flex-1 z-[2] `}
      >
        {/* <Image className="h-[25rem]" src={require("../assets/bgs/11-114261_technology-vector-png-banner-freeuse-download-technology-png.png")} alt="mono-ci" /> */}

        {/* <div className="h-full w-[40rem] bg-contain bg-no-repeat bg-center bg-[url(https://moralis.io/wp-content/uploads/2023/01/Illustrative-Woman-Interacting-with-Web3-Tech-1024x826.png)]" ></div> */}
        <div className="min-h-[25rem] w-[40rem]  bg-white/0 flex flex-col">
          <div className={"flex w-[32rem] my-2 justify-between self-end "}>
            <div className=" h-[10rem] w-[10rem]" />
            <LandingPageIconCard
              img={require("../assets/icons/meta.png")}
              mode={"light"}
            />
            <LandingPageIconCard
              img={require("../assets/icons/bitcoin.png")}
              mode={"dark"}
            />
          </div>
          <div className={"flex w-[32rem] my-2 justify-between self-end "}>
            <LandingPageIconCard
              img={require("../assets/icons/user.png")}
              mode={"light"}
            />
            <LandingPageIconCard
              img={require("../assets/icons/nft.png")}
              mode={"dark"}
            />
            <LandingPageIconCard
              img={require("../assets/icons/technology.png")}
              mode={"light"}
            />
          </div>
          <div className={"flex w-[32rem] my-2 justify-between self-end "}>
            <LandingPageIconCard
              img={require("../assets/icons/ethereum.png")}
              mode={"dark"}
            />
            <LandingPageIconCard
              img={require("../assets/icons/cloud.png")}
              mode={"light"}
            />
            <div className=" h-[10rem] w-[10rem]" />
          </div>
        </div>
      </div>
    </div>

    <div
      className={`w-[100%] flex-col mt-[5rem] py-5 z-[2] flex items-center justify-center rounded backdrop-blur-xl ${gradientOverlay} px-[5rem]`}
    >
      <h3 className="font-audiowide italic font-extralight text-[1.7rem] text-[#fff] my-5 ">
      <span className={`text-transparent tracking-widest	 bg-clip-text ${gradient}`} >-</span> Version 6.0.0 - March 2023 <span className={`text-transparent tracking-widest	 bg-clip-text ${gradient}`} >-</span>
      </h3>
      <p className="tracking-wide  text-xl text-[#fff] text-center font-ShareTech">
        The internet is without a doubt the most important technological
        development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and
        Edge technologies expand the internet as we know it by introducing novel
        features and advancements. Metaverse will make use of all aspects of
        modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge
        computing, voice computing, ambient computing, and more.
      </p>
      <div className={`h-[2px] rounded-full ${gradient} my-5 w-[20rem]`} />
      <p className="tracking-wide  text-xl text-[#fff] text-center font-ShareTech  pb-5">
        Citi is the latest Wall Street business to give a positive prognosis for
        Web 3.0 and the Metaverse, terms used to depict a future internet vision
        centered on decentralized technologies and virtual worlds. Citi stated
        in a March 2022 research paper that the metaverse economy might have a
        total addressable market of up to $13 trillion and five billion people
        by 2030. https://www.citivelocity.com/citigps/metaverse-and-money/
      </p>
    </div>
  </div>
);

export default Hero;

// TS, NEXTJS NODEJS, Python Solidty AWSCDK html/css
// bg-gradient-to-r from-[rgba(223,7,43,1)] to-[rgba(161,19,40,1)]
// bg-gradient-to-r from-[rgba(223,7,43,1)] to-[rgba(161,19,40,1)]
// bg-gradient-to-r from-[rgba(223,7,43,1)] to-[rgba(161,19,40,1)]
// bg-gradient-to-r from-[rgba(223,7,43,1)] to-[rgba(161,19,40,1)]
// bg-gradient-to-r from-[rgba(223,7,43,1)] to-[rgba(161,19,40,1)]
// bg-gradient-to-r from-[rgba(223,7,43,1)] to-[rgba(161,19,40,1)]
// bg-gradient-to-r from-[rgba(223,7,43,1)] to-[rgba(161,19,40,1)]
