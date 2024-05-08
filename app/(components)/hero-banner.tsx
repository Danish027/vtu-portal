"use client";
import ServerDown from "@/components/custom/server-down";
import { checkIp } from "@/utils/check-ip";
import { useEffect, useState } from "react";

export function HeroBanner() {
  const [ip, setIp] = useState("");

  // useEffect(() => {
  //   const getIp = async () => {
  //     const { ip } = await checkIp();
  //     setIp(ip);
  //   };
  //   getIp();
  // }, []);

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  // if (loading) {
  //   return <div className="text-center">loading...</div>;
  // }

  return (
    <>
      {ip !== "" && ip !== "86.104.72.83" ? (
        <ServerDown />
      ) : (
        <main className="flex min-h-screen flex-col items-center container mx-auto justify-between px-5 py-2 w-full">
          <h1 className="mb-4 text-h3 lg:text-h1">
            The Ultimate Starter Template You Need To Start Your HTML Project
          </h1>
        </main>
      )}
    </>
  );
}
