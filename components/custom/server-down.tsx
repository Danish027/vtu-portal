"use client";
import React from "react";
import * as ServerDownImage from "@/assets/Screenshot 2024-04-29 at 2.12.07 AM.png";
import Image from "next/image";

const ServerDown = () => {
  return (
    <div className="absolute w-screen h-screen z-50 bg-[#202124]">
      <div className="flex flex-col gap-5 justify-center mx-auto max-w-3xl items-start w-full h-full ">
        <Image width={70} src={ServerDownImage} alt="Server Down" />
        <div className="flex flex-col pl-2 gap-5">
          <h2 className="text-[#9AA0A6] font-medium font-sans text-2xl">
            This site can’t be reached
          </h2>
          <h4 className="text-[#9AA0A6] font-sans text-lg">
            localhost refused to connect.
          </h4>
          <p className="text-[#9AA0A6] font-medium font-sans text-sm">Try :</p>
          <div className="flex flex-col gap-2 pl-5">
            <p className="text-[#9AA0A6] font-medium font-sans text-sm">
              • Checking the connection
            </p>
            <p className="text-[#9AA0A6] font-medium font-sans text-sm">
              • Checking the proxy and the firewall
            </p>
          </div>
          <div className="flex justify-between">
            <div className="px-3 text-sm py-1 border text-[#8AB4F7] rounded-2xl border-1 border-gray-500 font-medium font-sans">
              Details
            </div>
            <button className="px-3 text-sm py-1 cursor-pointer text-[#202124] bg-[#8AB4F7] rounded-2xl border border-[#8AB4F7] font-medium font-sans">
              Reload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerDown;
