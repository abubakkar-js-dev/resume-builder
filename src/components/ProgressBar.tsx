import React from "react";

interface ProgressBarProps {
  progress: number;
  label?: string;
}

export default function ProgressBar({ progress, label }: ProgressBarProps) {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full">
      {label && (
        <p className="text-[#101010] text-[20px] font-medium leading-[1.6]">
          {label}
        </p>
      )}
      <div className="bg-[#e8e8e8] h-4 overflow-clip relative rounded-[50px] shrink-0 w-full">
        <div
          className="absolute bg-primary h-4 left-0 rounded-br-[100px] rounded-tr-[100px] top-0 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
