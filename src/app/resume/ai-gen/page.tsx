"use client";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCareerSummary } from "@/store/slices/formSlice";
import { setGenerationProgress, setIsGenerating } from "@/store/slices/navigationSlice";
import { generateResume } from "../../actions";

export default function AIResumeGenerationStep() {
  const dispatch = useAppDispatch();
  const { isGenerating, generationProgress } = useAppSelector((state) => state.navigation);

  const formdata = useAppSelector((state) => state.form);

  const handleGenerateResume = async () => {
    dispatch(setIsGenerating(true));
    dispatch(setGenerationProgress(0));

    // Simulate progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (progress < 90) {
        dispatch(setGenerationProgress(progress));
      }
    }, 200);

    try {
      // Sanitize data for server action (remove File objects)
      const sanitizedData = JSON.parse(JSON.stringify(formdata, (key, value) => {
        if (key === 'achievements' && typeof value === 'object') return null; // Skip File objects
        return value;
      }));

      const result = await generateResume(sanitizedData);
      
      clearInterval(interval);
      dispatch(setGenerationProgress(100));

      if (result.success && result.data) {
        try {
          // Clean up the response if it contains markdown code blocks
          const jsonString = result.data.replace(/```json\n?|\n?```/g, '').trim();
          const parsedData = JSON.parse(jsonString);

          if (parsedData.summary) {
            dispatch(setCareerSummary({ 
              ...formdata.careerSummary, 
              summary: parsedData.summary 
            }));
          }
          
          // You could also update work experience here if the AI returns it
          // if (parsedData.enhancedExperience) { ... }

        } catch (e) {
          console.error("Failed to parse AI response:", e);
        }
      }
    } catch (error) {
      console.error("Error generating resume:", error);
    } finally {
      setTimeout(() => {
        dispatch(setIsGenerating(false));
      }, 500);
    }
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-4">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-main-text text-[48px] leading-[1.4] font-semibold">
            AI Resume Magic
          </h1>
          <p className="text-subtitle-text text-[18px] leading-[1.6]">
            Now, let&apos;s turn all the information you&apos;ve provided into a professional resume! Our AI will generate a polished version that showcases your strengths and matches industry standards.
          </p>
        </div>

        {/* Content */}
        <div className="content-stretch flex flex-col gap-16 items-start relative shrink-0 w-full">
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
