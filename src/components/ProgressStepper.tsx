import React from "react";
import { STEPS } from "../data/steps";
import { useAppSelector } from "../store/hooks";

export default function ProgressStepper() {
  const currentStep = useAppSelector((state) => state.navigation.currentStep);
  const currentStepIndex = currentStep - 1;
  const progressPercentage =
    currentStepIndex === -1
      ? 0
      : (currentStepIndex / (STEPS.length - 1)) * 100;

  return (
    <div className="w-full max-w-[1432px] mx-auto px-4">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-[22px] left-[67px] w-[calc(100%-134px)] h-[5px] pointer-events-none">
          {/* Grey Background Line */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#e8e8e8] rounded-br-[100px] rounded-tr-[100px]" />
          
          {/* Green Active Line */}
          <div
            className="absolute top-0 left-0 h-full bg-[#28c76f] rounded-br-[100px] rounded-tr-[100px] transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Steps Container */}
        <div className="relative flex justify-between items-start w-full">
          {STEPS.map((step, index) => {
            const isCompleted = index <= currentStepIndex;
            const isCurrent = index === currentStepIndex;

            return (
              <div
                key={step.id}
                className="flex flex-col items-center gap-2.5 min-w-[88px]"
              >
                {/* Numbered Circle */}
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300
                  ${
                    isCompleted
                      ? "bg-[#28c76f] text-[#f9f9f9]"
                      : "bg-[#e8e8e8] text-main-text"
                  }
                  `}
                >
                  <p className={`text-[18px] ${isCompleted ? 'font-bold' : 'font-medium'}`}>
                    {step.id.toString().padStart(2, "0")}
                  </p>
                </div>

                {/* Text Labels */}
                <div className="text-center text-main-text text-[18px]">
                  <p className="mb-0 leading-[1.6]">{step.label}</p>
                  <p className="leading-[1.6]">{step.subLabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}