
import React from "react";

interface DeadlineInfoProps {
  title: string;
  date: string;
}

export const DeadlineInfo: React.FC<DeadlineInfoProps> = ({ title, date }) => {
  return (
    <div className="text-center mt-8 text-xl text-gray-300">
      <div className="font-bold">{title}</div>
      <div className="text-blue-400">{date}</div>
    </div>
  );
};
