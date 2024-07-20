import { useState } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const updateTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };
  setInterval(updateTime, 1000);
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-center text-2xl border-2 border-[#deb887] rounded-md py-2 w-[250px] mx-auto bg-[#fff8e3] shadow-[0px_5px_15px_rgba(0,0,0,0.35)] text-[#c4a661]">
        {currentTime}
      </h1>
    </div>
  );
};

export default Clock;
