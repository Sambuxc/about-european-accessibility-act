
import React, { useRef, useEffect } from "react";
import anime from "animejs";

interface AnimatedRingsProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const AnimatedRings: React.FC<AnimatedRingsProps> = ({ days, hours, minutes, seconds }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const daysRingRef = useRef<SVGCircleElement>(null);
  const hoursRingRef = useRef<SVGCircleElement>(null);
  const minutesRingRef = useRef<SVGCircleElement>(null);
  const secondsRingRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    updateRings(days, hours, minutes, seconds);
  }, [days, hours, minutes, seconds]);

  const updateRings = (days: number, hours: number, minutes: number, seconds: number) => {
    if (!svgRef.current) return;
    
    const MAX_DAYS = 365;
    const MAX_HOURS = 24;
    const MAX_MINUTES = 60;
    const MAX_SECONDS = 60;
    
    const daysProgress = 360 * (1 - days / MAX_DAYS);
    const hoursProgress = 360 * (1 - hours / MAX_HOURS);
    const minutesProgress = 360 * (1 - minutes / MAX_MINUTES);
    const secondsProgress = 360 * (1 - seconds / MAX_SECONDS);
    
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

    // Remove the scaling animation that was causing the pulsing effect
    anime({
      targets: svgRef.current,
      scale: [1, 1.02, 1],
      duration: 800,
      easing: 'easeOutElastic(1, .6)'
    });
  };

  return (
    <svg 
      ref={svgRef}
      className="w-full h-full" 
      viewBox="0 0 100 100"
      fill="none"
    >
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
      
      <g transform="rotate(-90, 50, 50)">
        <circle 
          ref={daysRingRef}
          cx="50" 
          cy="50" 
          r="45" 
          strokeWidth="2"
          strokeDasharray="4 1"
          fill="none" 
          className="animate-spin-slow"
        />
        <circle 
          ref={hoursRingRef}
          cx="50" 
          cy="50" 
          r="40" 
          strokeWidth="2"
          strokeDasharray="4 1"
          fill="none" 
          className="animate-spin-slow-reverse"
        />
        <circle 
          ref={minutesRingRef}
          cx="50" 
          cy="50" 
          r="35" 
          strokeWidth="2"
          strokeDasharray="4 1"
          fill="none" 
          className="animate-spin-medium"
        />
        <circle 
          ref={secondsRingRef}
          cx="50" 
          cy="50" 
          r="30" 
          strokeWidth="2"
          strokeDasharray="4 1"
          fill="none" 
          className="animate-spin-medium-reverse"
        />
      </g>
    </svg>
  );
};
