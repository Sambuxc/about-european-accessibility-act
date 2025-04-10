
import React from "react";
import { AnimatedRings } from "./countdown/AnimatedRings";
import { TimeDisplay } from "./countdown/TimeDisplay";
import { DeadlineInfo } from "./countdown/DeadlineInfo";
import { useCountdown } from "./countdown/useCountdown";

interface CountdownTimerProps {
  deadline: Date;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ deadline }) => {
  const timeLeft = useCountdown(deadline);
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[30rem] lg:h-96">
        <AnimatedRings 
          days={timeLeft.days} 
          hours={timeLeft.hours} 
          minutes={timeLeft.minutes} 
          seconds={timeLeft.seconds} 
        />
        <TimeDisplay 
          days={timeLeft.days} 
          hours={timeLeft.hours} 
          minutes={timeLeft.minutes} 
          seconds={timeLeft.seconds} 
        />
      </div>
      
      <DeadlineInfo 
        title="Compliance Deadline" 
        date="June 28, 2025" 
      />
    </div>
  );
};
