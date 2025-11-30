"use client";
import ResumePreview from "@/components/ResumePreview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { persistor } from "@/store";

export default function ReviewResumePage() {
  usePageTitle("Review Resume | Resume Builder");
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!resumeRef.current) return;
    setIsDownloading(true);

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2, // Higher quality
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      
      // Force single page: if content is taller than page, scale it down to fit
      if (imgHeight > pdfHeight) {
        const scaleFactor = pdfHeight / imgHeight;
        const scaledWidth = pdfWidth * scaleFactor;
        const scaledHeight = pdfHeight;
        const xOffset = (pdfWidth - scaledWidth) / 2;
        
        pdf.addImage(imgData, "PNG", xOffset, 0, scaledWidth, scaledHeight);
      } else {
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
      }
      
      pdf.save("resume.pdf");

      setIsDownloading(false);
    } catch (error) {
      console.error("Error generating PDF:", error);
      setIsDownloading(false);
    }
  };

  const handleReset = async () => {
    await persistor.purge();
    window.location.href = "/resume/personal-info";
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-4 pb-20">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col gap-3">
             <h1 className="text-main-text text-[32px] font-bold">Review Your AI-Generated Resume</h1>
             <p className="text-subtitle-text text-base max-w-3xl">
                Take a moment to review your resume. You can make changes and regenerate if needed. When you&apos;re ready, download it and start applying!
             </p>
        </div>
        
        {/* Resume Preview */}
        <div className="overflow-auto border rounded-xl bg-gray-50 p-8 flex justify-center shadow-inner">
            <ResumePreview ref={resumeRef} />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-between mt-4">
            <button 
                onClick={handleDownload}
                disabled={isDownloading}
                className="flex-1 bg-[#d9d9d9] hover:bg-[#c0c0c0] text-[#333] font-medium py-3 rounded-md transition-colors disabled:opacity-50"
            >
                {isDownloading ? "Downloading..." : "Download Resume"}
            </button>
            <button 
                onClick={handleReset}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-md transition-colors"
            >
                Reset & Start Over
            </button>
        </div>
      </div>
    </div>
  );
}
