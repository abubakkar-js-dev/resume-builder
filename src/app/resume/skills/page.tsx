"use client";
import React from "react";
import Input from "@/components/Input";
import Textarea from "@/components/ui/Textarea";
import DatePicker from "@/components/DatePicker";
import FileUpload from "@/components/FileUpload";
import TagInput from "@/components/TagInput";
import { Plus } from "lucide-react";
import { WorkExperience } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setWorkExperience } from "@/store/slices/formSlice";

interface SkillsExperienceStepProps {}

export default function SkillsExperienceStep({}: SkillsExperienceStepProps) {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.form.workExperience);
  const addWorkExperience = () => {
    const newExperience: WorkExperience = {
      id: Date.now().toString(),
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      description: "",
      achievements: null,
      skills: [],
    };
    dispatch(setWorkExperience([...data, newExperience]));
  };

  const updateExperience = (index: number, field: keyof WorkExperience, value: any) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    dispatch(setWorkExperience(updated));
  };

  const currentExperience = data[0] || {
    id: "1",
    jobTitle: "",
    companyName: "",
    startDate: "",
    endDate: "",
    description: "",
    achievements: null,
    skills: [],
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-4">
      <div className="flex flex-col gap-[24px]">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-[16px] max-w-[904px]">
            <h1 className="text-[#333333] text-[48px] leading-[1.4] font-semibold">
              Your Work Experience & Skills
            </h1>
            <p className="text-[#777777] text-[18px] leading-[1.6]">
              Highlight your work experience and skills. The more detail you provide, the better the AI can tailor your resume to match job opportunities.
            </p>
          </div>
          <button
            type="button"
            className="bg-neutral-100 px-[20px] py-[8px] rounded-[8px] flex items-center gap-[12px] hover:bg-neutral-200 transition-colors"
          >
            <span className="text-[#101010] text-[20px] font-medium">Skip</span>
            <span className="text-[#101010]">›</span>
          </button>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-[32px]">
          {/* Job Title */}
          <Input
            label="Job Title"
            value={currentExperience.jobTitle}
            onChange={(e) => updateExperience(0, "jobTitle", e.target.value)}
            placeholder="Mid-Level UI/UX Designer"
            className="w-full"
          />

          {/* Company Name */}
          <Input
            label="Company Name"
            value={currentExperience.companyName}
            onChange={(e) => updateExperience(0, "companyName", e.target.value)}
            placeholder="SM Technology (betopia Group)"
            className="w-[578px]"
          />

          {/* Duration */}
          <div className="flex gap-[24px]">
            <DatePicker
              label="Duration"
              value={currentExperience.startDate}
              onChange={(e) => updateExperience(0, "startDate", e.target.value)}
              placeholder="Start Date"
              className="flex-1"
            />
            <DatePicker
              label=" "
              value={currentExperience.endDate}
              onChange={(e) => updateExperience(0, "endDate", e.target.value)}
              placeholder="End Date"
              className="flex-1"
            />
          </div>

          {/* Job Description */}
          <Textarea
            label="Job Description/Responsibilities"
            value={currentExperience.description}
            onChange={(e) => updateExperience(0, "description", e.target.value)}
            placeholder="An experienced marketing professional with over 5 years of expertise in digital marketing, specializing in SEO, social media strategies, and content creation."
            rows={7}
            className="w-full"
          />

          {/* Achievements & Skills */}
          <div className="flex gap-[24px]">
            <FileUpload
              label="Achievements"
              onChange={(file) => updateExperience(0, "achievements", file)}
            />
            <TagInput
              label="Skills"
              value={currentExperience.skills}
              onChange={(skills) => updateExperience(0, "skills", skills)}
              placeholder="Add skills..."
            />
          </div>

          {/* Divider */}
          <div className="w-full h-[2px] bg-[#e0e0e0]" />

          {/* Add Another Work Experience */}
          <button
            type="button"
            onClick={addWorkExperience}
            className="flex items-center gap-[10px] text-[#28c76f] hover:text-[#24b263] transition-colors"
          >
            <div className="w-[24px] h-[24px] rounded-full bg-[#28c76f] flex items-center justify-center">
              <Plus className="w-[16px] h-[16px] text-white" />
            </div>
            <span className="text-[20px] font-medium">Add Another Work Experience</span>
          </button>
        </div>
      </div>
    </div>
  );
}
