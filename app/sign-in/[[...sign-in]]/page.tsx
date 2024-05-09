"use client";
import ServerDown from "@/components/custom/server-down";
import { checkIp } from "@/utils/check-ip";
import { SignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Page() {
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
      <div className="text-center h-screen w-full flex justify-center items-center">
        loading...
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <>
        {/* {ip !== "" && ip !== "86.104.72.83" ? (
          <ServerDown />
        ) : ( */}
        <SignIn path="/sign-in" />
        {/* )} */}
      </>
    </div>
  );
}
