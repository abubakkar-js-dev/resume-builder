'use client';
import React from "react";
import Textarea from "@/components/Textarea";
import Select from "@/components/Select";
import { CareerSummary } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCareerSummary } from "@/store/slices/formSlice";

interface CareerSummaryStepProps {}

const JOB_TITLES = [

  { value: "", label: "Enter your most recent or current job title" },
  { value: "UI/UX Designer", label: "UI/UX Designer" },
  { value: "Frontend Developer", label: "Frontend Developer" },
  { value: "Backend Developer", label: "Backend Developer" },
  { value: "Full Stack Developer", label: "Full Stack Developer" },
  { value: "Product Manager", label: "Product Manager" },
];

export default function CareerSummaryStep({}: CareerSummaryStepProps) {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.form.careerSummary);

  const handleChange = (field: keyof CareerSummary, value: string) => {
    dispatch(setCareerSummary({ ...data, [field]: value }));
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-4">
      <div className="flex flex-col gap-[24px]">
        {/* Header */}
        <div className="flex flex-col gap-[16px] max-w-[904px]">
          <h1 className="text-[#333333] text-[48px] leading-[1.4] font-semibold">
            Your Career Overview
          </h1>
          <p className="text-[#777777] text-[18px] leading-[1.6]">
            A strong career summary will make a lasting impression on recruiters. Let's create a summary that highlights your experience and goals.
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-[32px]">
          {/* Job Title */}
          <Select
            label="Job Title"
            value={data.jobTitle}
            onChange={(e) => handleChange("jobTitle", e.target.value)}
            options={JOB_TITLES}
            className="w-full"
          />

          {/* Career Summary */}
          <Textarea
            label="Job Title"
            value={data.summary}
            onChange={(e) => handleChange("summary", e.target.value)}
            placeholder="An experienced marketing professional with over 5 years of expertise in digital marketing, specializing in SEO, social media strategies, and content creation."
            rows={8}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
