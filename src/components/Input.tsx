import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export default function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className={`flex flex-col gap-[4px] ${className}`}>
      {label && (
        <p className="text-[#101010] text-[20px] font-medium leading-[1.6]">
          {label}
        </p>
      )}
      <div className="relative bg-[#fcfcfd] h-[64px] rounded-[8px]">
        <input
          className="w-full h-full px-[24px] bg-transparent text-[#333333] text-[16px] rounded-[8px] border border-neutral-300 outline-none focus:border-[#28c76f] transition-colors"
          {...props}
        />
      </div>
    </div>
  );
}
