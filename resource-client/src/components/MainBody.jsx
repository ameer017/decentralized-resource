import Ethereum from "/Ethereum-logo.png";
import Metamask from "/Metamask-logo.png";
import Solana from "/Solana-logo.png";
import Tether from "/Tether-logo.png";
import Cardano from "/Cardano-logo.png";
import USD from "/USD-logo.png";

import { FaSquare, FaLaptopCode } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { LuBadgeCheck } from "react-icons/lu";
import { GrContactInfo } from "react-icons/gr";
import { useEffect, useState } from "react";

const MainBody = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main
      className={`bg-[#0F051D] flex flex-col text-white items-center p-6 font-serif transition-all duration-500 ease-in-out ${
        scrollPosition > 100 ? "opacity-100" : "opacity-75"
      }`}
    >
      <div className="flex gap-[40px] -mt-[18px]  p-4 rounded-sm  flex-wrap">
        <img src={Cardano} alt="" className="w-[100px] " />
        <img src={Ethereum} alt="" className="w-[100px] " />
        <img src={Metamask} alt="" className="w-[100px] " />
        <img src={Solana} alt="" className="w-[100px] " />
        <img src={Tether} alt="" className="w-[100px] " />
        <img src={USD} alt="" className="w-[100px] " />
      </div>

      <div className="flex mt-[100px] items-center">
        <FaSquare className="rotate-45 " color="#00F0FF" />
        <div className="w-[150px] h-[1px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] "></div>
        <FaSquare className="rotate-45" color="#FF2DF7" />
      </div>

      <div className="mt-[100px] flex gap-[40px] flex-col md:flex-row">
        <div className="text-center md:border-r-2 border-[#E5E5E5] px-6">
          <h1 className="text-[60px] ">
            4k+{" "}
            <span className="text-[#00F0FF] block text-[17px] ">
              Community Members
            </span>
          </h1>
        </div>
        <div className="text-center md:border-r-2 border-[#E5E5E5] px-6">
          <h1 className="text-[60px] ">
            200{" "}
            <span className="text-[#00F0FF] block text-[17px] ">
              Active Users
            </span>
          </h1>
        </div>
        <div className="text-center md:border-r-2 border-[#E5E5E5] px-6">
          <h1 className="text-[60px] ">
            3000+{" "}
            <span className="text-[#00F0FF] block text-[17px] ">
              Units Sold
            </span>
          </h1>
        </div>
        <div className="text-center px-6">
          <h1 className="text-[60px] ">
            $1M{" "}
            <span className="text-[#00F0FF] block text-[17px] ">
              Revenue Generated
            </span>
          </h1>
        </div>
      </div>

      <div className="flex mt-[100px] items-center">
        <FaSquare className="rotate-45 " color="#00F0FF" />
        <div className="w-[150px] h-[1px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] "></div>
        <FaSquare className="rotate-45" color="#FF2DF7" />
      </div>

      <div className="flex flex-col gap-6 items-center my-6">
        <h2 className="text-[50px] md:text-[60px]">
          Why{" "}
          <span className="bg-gradient-to-r from-[#6100FF] to-[#01F0FF] bg-clip-text text-transparent">
            {" "}
            choose us?
          </span>
        </h2>

        <div className="flex gap-6 flex-col md:flex-row">
          <div className="border-[1px] border-[#E8E8E840] p-8 rounded-lg  flex flex-col items-start gap-2">
            <BiWorld color="#01f0ff" size={30} />
            <h1 className="text-[30px] font-serif ">DAOs</h1>
            <p className="text-[#B7B4BB] text-[20px] font-serif ">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="border-[1px] border-[#E8E8E840] p-8 rounded-lg  flex flex-col items-start gap-2">
            <GrContactInfo color="#01f0ff" size={30} />
            <h1 className="text-[30px] font-serif ">Proof of Value</h1>
            <p className="text-[#B7B4BB] text-[20px] font-serif ">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="border-[1px] border-[#E8E8E840] p-8 rounded-lg  flex flex-col items-start gap-2">
            <LuBadgeCheck color="#01f0ff" size={30} />
            <h1 className="text-[30px] font-serif ">Energy Tokenization</h1>
            <p className="text-[#B7B4BB] text-[20px] font-serif ">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="border-[1px] border-[#E8E8E840] p-8 rounded-lg  flex flex-col items-start gap-2">
            <FaLaptopCode color="#01f0ff" size={30} />
            <h1 className="text-[30px] font-serif ">Reliable Source</h1>
            <p className="text-[#B7B4BB] text-[20px] font-serif ">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainBody;
