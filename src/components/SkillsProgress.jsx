import React, { useState, useEffect } from "react";

const SkillsProgress = ({ skill, targetProgress }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < targetProgress) {
          return prev + 1; 
        } else {
          clearInterval(interval); 
          return prev;
        }
      });
    }, 20); 

    return () => clearInterval(interval); 
  }, [targetProgress]);

  return (
    <div data-aos="flip-down" className="flex flex-col items-center gap-2 mt-6">
      <div
        className="radial-progress w-28 h-28 bg-[#9c87fb] text-primary-content text-xl text-bold border-[#a38ffd] border-4"
        style={{ "--value": progress }}
        role="progressbar">
        {progress}%
      </div>
      <span className="text-xl font-medium">{skill}</span>
    </div>
  );
};

export default SkillsProgress;
