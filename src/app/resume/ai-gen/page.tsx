"use client";
import React from "react";
import ProgressBar from "@/components/ProgressBar";
import Button from "@/components/Button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsGenerating, setGenerationProgress } from "@/store/slices/navigationSlice";


export default function AIResumeGenerationStep() {
  const dispatch = useAppDispatch();
  const { isGenerating, generationProgress } = useAppSelector((state) => state.navigation);

  const handleGenerateResume = () => {
    dispatch(setIsGenerating(true));
    dispatch(setGenerationProgress(0));

    // Simulate AI generation progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      dispatch(setGenerationProgress(progress));
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          dispatch(setIsGenerating(false));
        }, 500);
      }
    }, 300);
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-4">
      <div className="flex flex-col gap-[24px]">
        {/* Header */}
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[#333333] text-[48px] leading-[1.4] font-semibold">
            AI Resume Magic
          </h1>
          <p className="text-[#777777] text-[18px] leading-[1.6]">
            Now, let's turn all the information you've provided into a professional resume! Our AI will generate a polished version that showcases your strengths and matches industry standards.
          </p>
        </div>

        {/* Content */}
        <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
          {/* Progress Bar */}
          {isGenerating && (
            <ProgressBar
              progress={generationProgress}
              label="AI is refining your resume..."
            />
          )}

          {/* Generate Button */}
          <Button
            variant="primary"
            onClick={handleGenerateResume}
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? "Generating..." : "Generate Resume"}
          </Button>
        </div>
      </div>
    </div>
  );
}
