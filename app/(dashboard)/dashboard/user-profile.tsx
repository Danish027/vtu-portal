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
      <div className="flex justify-between items-center flex-col md:flex-row">
        <img
          className="w-[200px] h-[200px] rounded-full m-5 mr-10"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgGCgkGBwoHBwYGBg8UFQYWIB0WIhURHxMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANBABAQACAAMGAgYLAQAAAAAAAAIBAwQREiEiMTJSYhNyBTNTgqHBI0FCUWFxgZGSk7EU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8qpic1WcYmfNVM/fxV3nOIzmY/GwXNvEa9XZVc6+znxVb4+s57kTj5u1UAWP/bu/fH+t1PHbMeM6s/d5KoC/HHRnzxc/L2rWM4zjGceFMZJp33pz3c85+zrwBrDjVsnbGKn70+h2AAAAAAAAAAAAAAABnPLGc58J7wM/j9ma2/D59kT5f4qr26zV5rPjVdTxQAAAAABZ4C8zu6OfZctFkaKzO/XnHrlroAAAAAAAAAAAAAACPfnlo2fJSRHvxz0bMeygZICgAAAAADqM9NzXpqabDFbWPBAAAAAAAAAAAAAAARb9k69ec3z5V3e6lVuPxz0Yz6bkGcAoAAAAAA9xy545+DW1XOyMXPVyr1Mhp8Hjlw8e7qr8UE4AAAAAAAAAAAAACHip6+HvHpnq/smeVOKnM58KnpoGMJeI0fAqcdXVivL3USgAAAAAA19U9GqJ9MqHDcN8bHVnPKZr/JpIAAAAAAAAAAAAAAAAKv0hHVqm8fsV/wBZ7ZqcXOZrwqemmTu151bMxnt6fLXqwDgBQAABJw+v4u3E58vmr+QL/CR0aJxnxr9JX9U4IAAAAAAAAAAAAAAAADP+kfrp+T8167iJ53Uzj3MzitmNu3qnyzPTIIgFAABa+jvrq+T81VNwuzGrdiq8tT00DUHMXFzzisVj2ukAAAAAAAAAAAAAEezdr1+e5xn0z25BI52XGueq6xjClt47OeeNU8vdStV1ddVVnOfVQGy6u81Wc573d6nIKAAAAAAOtd1F4qc5x3u90tbXcbJ6orGcMd1N1FdU1nGfVKDYFDVx2ccsbZ5+6VvXu17PJc5z6a7MgkAAAAAABDxO74Mc8dt13YkHW3dGrHO6+WZ8aVL4+s/VxOPds7VWqq6zVZznNeaqeAkviNt+a88vTPYjBQAAAAAAAAAAAAABJHEbY8t55emu1PHH1j6yJz7tfYqANbVujbjnFfNNeMpGNNVFYqc5xmfLUtPht3xo557Lnu3KCYABm8dWa35x+qJmQBXAUAAAAAAAAAAAAAAAAAAFjgazO/GP1XNSCDSAB//Z"
          alt="@shadcn"
        />
        <div className="flex-1 space-y-3 w-full">
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
