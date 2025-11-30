import React from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  className?: string;
  options: { value: string; label: string }[];
}

export default function Select({ label, className = "", options, ...props }: SelectProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <p className="text-[#101010] text-[20px] font-medium leading-[1.6]">
          {label}
        </p>
      )}
      <div className="relative bg-[#fcfcfd] h-16 rounded-lg">
        <select
          className="w-full h-full px-6 bg-transparent text-main-text text-[16px] rounded-lg border border-neutral-300 outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#98A2B3] pointer-events-none" />
      </div>
    </div>
  );
}
