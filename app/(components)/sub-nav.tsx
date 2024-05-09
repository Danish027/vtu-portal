import React from "react";

const Subnav = ({ label }: { label: string }) => {
  return (
    <div className="w-full flex justify-start font-semibold text-gray-600 border-b text-lg pt-2 mb-2">
      {label}
    </div>
  );
};

export default Subnav;
