import React from "react";
import { Calendar } from "lucide-react";

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export default function DatePicker({ label, className = "", ...props }: DatePickerProps) {
  return (
    <div className={`flex flex-col gap-[4px] ${className}`}>
      {label && (
        <p className="text-[#101010] text-[20px] font-medium leading-[1.6]">
          {label}
        </p>
      )}
      <div className="relative bg-[#fcfcfd] h-[64px] rounded-[8px]">
        <input
          type="date"
          className="w-full h-full px-[24px] bg-transparent text-[#333333] text-[16px] rounded-[8px] border border-neutral-300 outline-none focus:border-[#28c76f] transition-colors"
          {...props}
        />
        <Calendar className="absolute right-[24px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] text-[#777777] pointer-events-none" />
      </div>
    </div>
  );
}
