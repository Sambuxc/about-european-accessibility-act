
import React from "react";
import { Card } from "@/components/ui/card";

interface TimeDisplayProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ days, hours, minutes, seconds }) => {
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
      <Card className="bg-gray-900/70 backdrop-blur border-gray-800 shadow-lg px-2 py-4 mx-auto max-w-fit">
        <div className="font-mono text-4xl md:text-5xl lg:text-6xl text-white flex space-x-2 justify-center">
          <div className="flex flex-col items-center">
            <div className="text-blue-400">{formatNumber(days)}</div>
            <div className="text-xs text-gray-400 mt-1">DAYS</div>
          </div>
          <div className="text-gray-500">:</div>
          <div className="flex flex-col items-center">
            <div className="text-green-400">{formatNumber(hours)}</div>
            <div className="text-xs text-gray-400 mt-1">HOURS</div>
          </div>
          <div className="text-gray-500">:</div>
          <div className="flex flex-col items-center">
            <div className="text-orange-400">{formatNumber(minutes)}</div>
            <div className="text-xs text-gray-400 mt-1">MINS</div>
          </div>
          <div className="text-gray-500">:</div>
          <div className="flex flex-col items-center">
            <div className="text-purple-400">{formatNumber(seconds)}</div>
            <div className="text-xs text-gray-400 mt-1">SECS</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
