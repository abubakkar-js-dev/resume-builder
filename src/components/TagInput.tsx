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
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <p className="text-[#101010] text-[20px] font-medium leading-[1.6]">
          {label}
        </p>
      )}
      <div className="relative bg-[#fcfcfd] min-h-16 rounded-lg border border-neutral-300 px-3.5 py-[13px] flex flex-wrap gap-3 items-center focus-within:border-primary transition-colors">
        {value.map((tag, index) => (
          <span
            key={index}
            className="bg-[#ebebeb] px-[17px] py-1.5 rounded-[76px] text-main-text text-[16px] flex items-center gap-2"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(index)}
              className="text-[#666666] hover:text-main-text transition-colors"
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
          className="flex-1 min-w-[120px] bg-transparent text-main-text text-[16px] outline-none"
        />
        <span className="text-main-text text-[16px]">|</span>
      </div>
    </div>
  );
}