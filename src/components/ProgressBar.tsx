import React from "react";

interface ProgressBarProps {
  progress: number;
  label?: string;
}

export default function ProgressBar({ progress, label }: ProgressBarProps) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      {label && (
        <p className="text-[#101010] text-[20px] font-medium leading-[1.6]">
          {label}
        </p>
      )}
      <div className="bg-[#e8e8e8] h-[16px] overflow-clip relative rounded-[50px] shrink-0 w-full">
        <div
          className="absolute bg-[#28c76f] h-[16px] left-0 rounded-br-[100px] rounded-tr-[100px] top-0 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
