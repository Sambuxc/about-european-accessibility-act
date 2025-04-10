
import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";
import { Card } from "@/components/ui/card";

interface CountdownTimerProps {
  deadline: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const svgRef = useRef<SVGSVGElement>(null);
  const daysRingRef = useRef<SVGCircleElement>(null);
  const hoursRingRef = useRef<SVGCircleElement>(null);
  const minutesRingRef = useRef<SVGCircleElement>(null);
  const secondsRingRef = useRef<SVGCircleElement>(null);

  // Calculate time remaining
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +deadline - +new Date();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
        
        // Update animations
        updateRings(days, hours, minutes, seconds);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  // Initialize and update animations
  const updateRings = (days: number, hours: number, minutes: number, seconds: number) => {
    if (!svgRef.current) return;
    
    // Max values for normalization
    const MAX_DAYS = 365;
    const MAX_HOURS = 24;
    const MAX_MINUTES = 60;
    const MAX_SECONDS = 60;
    
    // Calculate progress percentages
    const daysProgress = 360 * (1 - days / MAX_DAYS);
    const hoursProgress = 360 * (1 - hours / MAX_HOURS);
    const minutesProgress = 360 * (1 - minutes / MAX_MINUTES);
    const secondsProgress = 360 * (1 - seconds / MAX_SECONDS);
    
    // Animate rings
    if (daysRingRef.current) {
      anime.set(daysRingRef.current, {
        strokeDashoffset: anime.setDashoffset,
        stroke: '#3b82f6',
        rotate: daysProgress
      });
    }
    
    if (hoursRingRef.current) {
      anime.set(hoursRingRef.current, {
        strokeDashoffset: anime.setDashoffset,
        stroke: '#10b981',
        rotate: hoursProgress
      });
    }
    
    if (minutesRingRef.current) {
      anime.set(minutesRingRef.current, {
        strokeDashoffset: anime.setDashoffset,
        stroke: '#f97316',
        rotate: minutesProgress
      });
    }
    
    if (secondsRingRef.current) {
      anime.set(secondsRingRef.current, {
        strokeDashoffset: anime.setDashoffset,
        stroke: '#8b5cf6',
        rotate: secondsProgress
      });
    }

    // Animate pulses on seconds change
    anime({
      targets: svgRef.current,
      scale: [1, 1.02, 1],
      duration: 800,
      easing: 'easeOutElastic(1, .6)'
    });
  };

  // Format numbers to always have two digits
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
        {/* SVG for animated rings */}
        <svg 
          ref={svgRef}
          className="w-full h-full" 
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* Segmented rings */}
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            stroke="#1e293b" 
            strokeWidth="1" 
            strokeDasharray="4 1"
            fill="none" 
          />
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            stroke="#1e293b" 
            strokeWidth="1" 
            strokeDasharray="4 1"
            fill="none" 
          />
          <circle 
            cx="50" 
            cy="50" 
            r="35" 
            stroke="#1e293b" 
            strokeWidth="1" 
            strokeDasharray="4 1"
            fill="none" 
          />
          <circle 
            cx="50" 
            cy="50" 
            r="30" 
            stroke="#1e293b" 
            strokeWidth="1" 
            strokeDasharray="4 1"
            fill="none" 
          />
          
          {/* Animated rings */}
          <g transform="rotate(-90, 50, 50)">
            <circle 
              ref={daysRingRef}
              cx="50" 
              cy="50" 
              r="45" 
              strokeWidth="2"
              strokeDasharray="4 1"
              fill="none" 
              className="animate-pulse"
            />
            <circle 
              ref={hoursRingRef}
              cx="50" 
              cy="50" 
              r="40" 
              strokeWidth="2"
              strokeDasharray="4 1"
              fill="none" 
            />
            <circle 
              ref={minutesRingRef}
              cx="50" 
              cy="50" 
              r="35" 
              strokeWidth="2"
              strokeDasharray="4 1"
              fill="none" 
            />
            <circle 
              ref={secondsRingRef}
              cx="50" 
              cy="50" 
              r="30" 
              strokeWidth="2"
              strokeDasharray="4 1"
              fill="none" 
            />
          </g>
        </svg>
        
        {/* Counter display */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <Card className="bg-gray-900/70 backdrop-blur border-gray-800 shadow-lg px-2 py-4 mx-auto max-w-fit">
            <div className="font-mono text-4xl md:text-5xl lg:text-6xl text-white flex space-x-2 justify-center">
              <div className="flex flex-col items-center">
                <div className="text-blue-400">{formatNumber(timeLeft.days)}</div>
                <div className="text-xs text-gray-400 mt-1">DAYS</div>
              </div>
              <div className="text-gray-500">:</div>
              <div className="flex flex-col items-center">
                <div className="text-green-400">{formatNumber(timeLeft.hours)}</div>
                <div className="text-xs text-gray-400 mt-1">HOURS</div>
              </div>
              <div className="text-gray-500">:</div>
              <div className="flex flex-col items-center">
                <div className="text-orange-400">{formatNumber(timeLeft.minutes)}</div>
                <div className="text-xs text-gray-400 mt-1">MINS</div>
              </div>
              <div className="text-gray-500">:</div>
              <div className="flex flex-col items-center">
                <div className="text-purple-400">{formatNumber(timeLeft.seconds)}</div>
                <div className="text-xs text-gray-400 mt-1">SECS</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <div className="text-center mt-8 text-xl text-gray-300">
        <div className="font-bold">Compliance Deadline</div>
        <div className="text-blue-400">June 28, 2025</div>
      </div>
    </div>
  );
};
