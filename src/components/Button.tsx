import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  icon?: "left" | "right";
  children: React.ReactNode;
}

export default function Button({ 
  variant = "primary", 
  icon, 
  children, 
  className = "",
  ...props 
}: ButtonProps) {
  const baseStyles = "flex-1 h-[56px] rounded-[6px] flex items-center justify-center gap-[8px] px-[24px] py-[11px] transition-colors font-medium text-[16px]";
  const variantStyles = variant === "primary" 
    ? "bg-[#28c76f] text-[#fcfcfc] hover:bg-[#24b263]" 
    : "bg-[#9a9a9a] text-[#fcfcfc] hover:bg-[#888888]";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {icon === "left" && <ArrowLeft className="w-6 h-6" />}
      {children}
      {icon === "right" && <ArrowRight className="w-6 h-6" />}
    </button>
  );
}
