import React from "react";
import { Button } from "../ui/button";

const Nav = () => {
  return (
    <div className="flex justify-between w-full">
      <div>Logo</div>
      <Button className="bg-green-700 hover:bg-green-600">Get Started</Button>
    </div>
  );
};

export default Nav;
