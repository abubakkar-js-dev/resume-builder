import React from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  className?: string;
  options: { value: string; label: string }[];
}

export default function Select({ label, className = "", options, ...props }: SelectProps) {
  return (
    <div className={`flex flex-col gap-[4px] ${className}`}>
      {label && (
        <p className="text-[#101010] text-[20px] font-medium leading-[1.6]">
          {label}
        </p>
      )}
      <div className="relative bg-[#fcfcfd] h-[64px] rounded-[8px]">
        <select
          className="w-full h-full px-[24px] bg-transparent text-[#333333] text-[16px] rounded-[8px] border border-neutral-300 outline-none focus:border-[#28c76f] transition-colors appearance-none cursor-pointer"
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-[24px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#98A2B3] pointer-events-none" />
      </div>
    </div>
  );
}
