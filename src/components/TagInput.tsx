import React, { useState, KeyboardEvent } from "react";

interface TagInputProps {
  label?: string;
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
}

export default function TagInput({ label, value, onChange, placeholder }: TagInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!value.includes(inputValue.trim())) {
        onChange([...value, inputValue.trim()]);
      }
      setInputValue("");
    } else if (e.key === "Backspace" && !inputValue && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  const removeTag = (indexToRemove: number) => {
    onChange(value.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col gap-[4px] w-full">
      {label && (
        <p className="text-[#101010] text-[20px] font-medium leading-[1.6]">
          {label}
        </p>
      )}
      <div className="relative bg-[#fcfcfd] min-h-[64px] rounded-[8px] border border-neutral-300 px-[14px] py-[13px] flex flex-wrap gap-[12px] items-center focus-within:border-[#28c76f] transition-colors">
        {value.map((tag, index) => (
          <span
            key={index}
            className="bg-[#ebebeb] px-[17px] py-[6px] rounded-[76px] text-[#333333] text-[16px] flex items-center gap-[8px]"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(index)}
              className="text-[#666666] hover:text-[#333333] transition-colors"
            >
              ×
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? placeholder : ""}
          className="flex-1 min-w-[120px] bg-transparent text-[#333333] text-[16px] outline-none"
        />
        <span className="text-[#333333] text-[16px]">|</span>
      </div>
    </div>
  );
}