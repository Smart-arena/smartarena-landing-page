import React from "react";
import Image from "next/image";
import SmartArena from "@/public/smartarenawithbg.jpg";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = () => {
  return (
    <div className="bg-white flex justify-center items-center h-[60vh]">
      <Image
        className="animate-pulse"
        priority
        src={SmartArena}
        alt="loading..."
        height={150}
        width={150}
      />
    </div>
  );
};

export default Loading;
