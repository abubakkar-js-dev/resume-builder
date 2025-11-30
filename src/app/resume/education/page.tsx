"use client"
import React from "react";
import Input from "@/components/Input";
import DatePicker from "@/components/DatePicker";
import FileUpload from "@/components/FileUpload";
import { Plus } from "lucide-react";
import { Education } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setEducation } from "@/store/slices/formSlice";
import { setShowCertifications } from "@/store/slices/navigationSlice";


export default function EducationStep() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.form.education);
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      degree: "",
      institutionName: "",
      major: "",
      startDate: "",
      endDate: "",
      achievements: null,
    };
    dispatch(setEducation([...data, newEducation]));
  };

  const updateEducation = (index: number, field: keyof Education, value: any) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    dispatch(setEducation(updated));
  };

  const handleSwitchToCertifications = () => {
    dispatch(setShowCertifications(true));
  };

  const currentEducation = data[0] || {
    id: "1",
    degree: "",
    institutionName: "",
    major: "",
    startDate: "",
    endDate: "",
    achievements: null,
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-4">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-4 max-w-[904px]">
            <h1 className="text-main-text text-[48px] leading-[1.4] font-semibold">
              Your Educational Background
            </h1>
            <p className="text-subtitle-text text-[18px] leading-[1.6]">
              Provide your academic qualifications and any relevant certifications to strengthen your resume.
            </p>
          </div>
          <button
            type="button"
            onClick={handleSwitchToCertifications}
            className="bg-main-text px-6 py-[11px] rounded-md h-14 flex items-center gap-2 hover:bg-[#444444] transition-colors"
          >
            <span className="text-neutral-light text-[16px] font-medium">Certifications</span>
          </button>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-8">
          {/* Your Degree */}
          <Input
            label="Your Degree"
            value={currentEducation.degree}
            onChange={(e) => updateEducation(0, "degree", e.target.value)}
            placeholder="e.g., Bachelor's, Master's"
            className="w-full"
          />

          {/* Institution Name & Major */}
          <div className="flex gap-6">
            <Input
              label="Institution Name"
              value={currentEducation.institutionName}
              onChange={(e) => updateEducation(0, "institutionName", e.target.value)}
              placeholder="Dhaka University"
              className="w-[578px]"
            />
            <Input
              label="Major"
              value={currentEducation.major}
              onChange={(e) => updateEducation(0, "major", e.target.value)}
              placeholder="Electronic and Communication Engineering (ECE)"
              className="w-[578px]"
            />
          </div>

          {/* Graduation */}
          <div>
            <label className="text-[#101010] text-[20px] font-medium leading-[1.6] ">Graduation</label>
          <div className="flex gap-6 mt-1">
            <DatePicker
              label=""
              value={currentEducation.startDate}
              onChange={(e) => updateEducation(0, "startDate", e.target.value)}
              placeholder="Start Date"
              className="flex-1"
            />
            <DatePicker
              label=" "
              value={currentEducation.endDate}
              onChange={(e) => updateEducation(0, "endDate", e.target.value)}
              placeholder="End Date"
              className="flex-1"
            />
          </div>
          </div>

          {/* Achievements */}
          <div className="flex gap-6">
            <FileUpload
              label="Achievements"
              onChange={(file) => updateEducation(0, "achievements", file)}
            />
            <div className="flex-1 opacity-0">
              {/* Spacer for layout */}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-0.5 bg-[#e0e0e0]" />

          {/* Add Another Degree */}
          <button
            type="button"
            onClick={addEducation}
            className="flex items-center gap-2.5 text-primary hover:text-primary/80 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <Plus className="w-4 h-4 text-white" />
            </div>
            <span className="text-[20px] font-medium">Add Another Degree</span>
          </button>
        </div>
      </div>
    </div>
  );
}
