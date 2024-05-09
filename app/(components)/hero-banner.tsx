"use client";
import ServerDown from "@/components/custom/server-down";
import { checkIp } from "@/utils/check-ip";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Banner from "./banner";

export function HeroBanner() {
  const [ip, setIp] = useState("");

  useEffect(() => {
    const getIp = async () => {
      const { ip } = await checkIp();
      setIp(ip);
    };
    getIp();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="text-center h-screen w-screen flex justify-center items-center">
        loading...
      </div>
    );
  }

  return (
    <>
      {ip !== "" && ip !== "86.104.72.83" ? (
        <ServerDown />
      ) : (
        <main className="container mx-auto">
          <Navbar />
          <div className="pt-10">
            <Banner />
          </div>
        </main>
      )}
    </>
  );
}
