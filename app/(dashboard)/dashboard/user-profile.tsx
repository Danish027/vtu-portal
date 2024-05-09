"use client";
import { User } from "@/db/schema";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { checkIp } from "@/utils/check-ip";
import { redirect } from "next/navigation";

const UserProfile = ({ user }: { user: User }) => {
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
  if (ip !== "" && ip !== "86.104.72.83") {
    return redirect("/");
  }

  return (
    <div className="p-10">
      <div className="flex justify-between items-center">
        <img
          className="w-[200px] h-[200px] rounded-full m-5 mr-10"
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <div className="flex-1 space-y-3">
          <div>
            <Label>Full Name</Label>
            <Input value={user.fullName} disabled />
          </div>
          <div>
            <Label>Branch</Label>
            <Input value={user.branch!} disabled />
          </div>

          {user.usn && (
            <div>
              <Label>USN</Label>
              <Input value={user.usn} disabled />
            </div>
          )}

          {user.semister && (
            <div>
              <Label>Semister</Label>
              <Input value={user.semister} disabled />
            </div>
          )}

          <div>
            <Label>Role</Label>
            <Input value={user.userType} disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
