"use client";
import React from "react";
import Input from "@/components/Input";
import Select from "@/components//Select";
import { ContactInfo } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setContactInfo } from "@/store/slices/formSlice";

const SOCIAL_MEDIA_OPTIONS = [
  { value: "Facebook", label: "Facebook" },
  { value: "Twitter", label: "Twitter" },
  { value: "Instagram", label: "Instagram" },
  { value: "GitHub", label: "GitHub" },
  { value: "Behance", label: "Behance" },
  { value: "Dribbble", label: "Dribbble" },
];

export default function ContactInformationStep() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.form.contactInfo);

  const handleChange = (field: keyof ContactInfo, value: string) => {
    dispatch(setContactInfo({ ...data, [field]: value }));
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-4">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-main-text text-[48px] leading-[1.4] font-semibold">
            Your Contact Information
          </h1>
          <p className="text-subtitle-text text-[18px] leading-[1.6]">
            Include additional contact details and social media links to
            showcase your professional presence.
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-8">
          {/* LinkedIn Profile */}
          <Input
            label="LinkedIn Profile"
            value={data.linkedIn}
            onChange={(e) => handleChange("linkedIn", e.target.value)}
            placeholder="Enter your LinkedIn profile URL"
            className="w-full"
          />

          {/* Personal Website/Portfolio */}
          <Input
            label="Personal Website/Portfolio"
            value={data.website}
            onChange={(e) => handleChange("website", e.target.value)}
            placeholder="Enter your personal website or portfolio URL"
            className="w-full"
          />

          {/* Other Social Media & URL */}
          <div className="flex gap-6">
            <Select
              label="Other Social Media"
              value={data.socialMedia}
              onChange={(e) => handleChange("socialMedia", e.target.value)}
              options={SOCIAL_MEDIA_OPTIONS}
              className="w-[327px]"
            />
            <Input
              label="URL"
              value={data.socialMediaUrl}
              onChange={(e) => handleChange("socialMediaUrl", e.target.value)}
              placeholder="Enter other social media profiles (optional)"
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
