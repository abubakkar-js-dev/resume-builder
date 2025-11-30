"use client";
import React from "react";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import DatePicker from "@/components/DatePicker";
import FileUpload from "@/components/FileUpload";
import TagInput from "@/components/TagInput";
import { Plus } from "lucide-react";
import { WorkExperience } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setWorkExperience } from "@/store/slices/formSlice";
import { usePageTitle } from "@/hooks/usePageTitle";



export default function SkillsExperienceStep() {
  usePageTitle("Skills & Experience | Resume Builder");
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
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-4 max-w-[904px]">
            <h1 className="text-main-text text-[48px] leading-[1.4] font-semibold">
              Your Work Experience & Skills
            </h1>
            <p className="text-subtitle-text text-[18px] leading-[1.6]">
              Highlight your work experience and skills. The more detail you provide, the better the AI can tailor your resume to match job opportunities.
            </p>
          </div>
          <button
            type="button"
            className="bg-neutral-100 px-5 py-2 rounded-lg flex items-center gap-3 hover:bg-neutral-200 transition-colors"
          >
            <span className="text-[#101010] text-[20px] font-medium">Skip</span>
            <span className="text-[#101010]">{">"}</span>
          </button>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-8">
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
          <div>
            <label className="text-[#101010] text-[20px] font-medium leading-[1.6]">Duration</label>
          <div className="flex gap-6 mt-1">
            <DatePicker
              label=" "
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
          <div className="flex gap-6">
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
          <div className="w-full h-0.5 bg-[#e0e0e0]" />

          {/* Add Another Work Experience */}
          <button
            type="button"
            onClick={addWorkExperience}
            className="flex items-center gap-2.5 text-primary hover:text-primary/80 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <Plus className="w-4 h-4 text-white" />
            </div>
            <span className="text-[20px] font-medium">Add Another Work Experience</span>
          </button>
        </div>
      </div>
    </div>
  );
}
