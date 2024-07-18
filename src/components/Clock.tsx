import { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-center text-2xl">{currentTime}</h1>
    </div>
  );
};

export default Clock;
