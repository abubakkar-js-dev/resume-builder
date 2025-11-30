import React from "react";
// import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function ReviewDownloadStep() {
  const handleDownload = () => {
    // Handle resume download
    console.log("Downloading resume...");
  };

  const handleFindJob = () => {
    // Navigate to job search
    console.log("Finding jobs...");
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-4">
      <div className="flex flex-col gap-[24px]">
        {/* Header */}
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[#333333] text-[48px] leading-[1.4] font-semibold">
            Review Your AI-Generated Resume
          </h1>
          <p className="text-[#777777] text-[18px] leading-[1.6]">
            Take a moment to review your resume. You can make changes and regenerate if needed. When you're ready, download it and start applying!
          </p>
        </div>

        {/* Resume Preview & Actions */}
        <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
          {/* Resume Preview */}
          <div className="h-[800px] w-full bg-white border-[1.5px] border-solid border-[#333333] rounded-[8px] flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <div className="w-[120px] h-[120px] rounded-full bg-[#28c76f] mx-auto mb-6 flex items-center justify-center">
                <svg className="w-[60px] h-[60px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-[32px] font-semibold text-[#333333] mb-4">
                Your Resume is Ready!
              </h2>
              <p className="text-[18px] text-[#777777] max-w-[500px] mx-auto">
                Your AI-generated resume has been created based on your information. Review it below and download when ready.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full">
            <button
              onClick={handleDownload}
              className="basis-0 bg-[#dbdbdb] grow h-[56px] min-h-px min-w-px rounded-[6px] flex items-center justify-center hover:bg-[#cccccc] transition-colors"
            >
              <div className="box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center px-[24px] py-[11px]">
                <p className="text-[#333333] text-[16px] font-medium">
                  Download Resume
                </p>
              </div>
            </button>
            <button
              onClick={handleFindJob}
              className="basis-0 bg-[#28c76f] grow h-[56px] min-h-px min-w-px rounded-[6px] flex items-center justify-center hover:bg-[#24b263] transition-colors"
            >
              <div className="box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center px-[24px] py-[11px]">
                <p className="text-[#fcfcfc] text-[16px] font-medium">
                  Find Your Favorite Job
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
