import React from "react";
import Input from "@/components/Input";
import DatePicker from "@/components/DatePicker";
import { Plus } from "lucide-react";
import { Certification } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCertifications } from "@/store/slices/formSlice";
import { setShowCertifications } from "@/store/slices/navigationSlice";

interface CertificationsStepProps {}

export default function CertificationsStep({}: CertificationsStepProps) {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.form.certifications);
  const addCertification = () => {
    const newCertification: Certification = {
      id: Date.now().toString(),
      title: "",
      issuingOrganization: "",
      issueDate: "",
      expiryDate: "",
    };
    dispatch(setCertifications([...data, newCertification]));
  };

  const updateCertification = (index: number, field: keyof Certification, value: any) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    dispatch(setCertifications(updated));
  };

  const handleSwitchToEducation = () => {
    dispatch(setShowCertifications(false));
  };

  const currentCertification = data[0] || {
    id: "1",
    title: "",
    issuingOrganization: "",
    issueDate: "",
    expiryDate: "",
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-4">
      <div className="flex flex-col gap-[24px]">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-[16px] max-w-[904px]">
            <h1 className="text-[#333333] text-[48px] leading-[1.4] font-semibold">
              Your Certifications
            </h1>
            <p className="text-[#777777] text-[18px] leading-[1.6]">
              Provide your academic qualifications and any relevant certifications to strengthen your resume.
            </p>
          </div>
          <button
            type="button"
            onClick={handleSwitchToEducation}
            className="bg-[#333333] px-[24px] py-[11px] rounded-[6px] h-[56px] flex items-center gap-[8px] hover:bg-[#444444] transition-colors"
          >
            <span className="text-[#fcfcfc] text-[16px] font-medium">Education</span>
          </button>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-[32px]">
          {/* Certification Title */}
          <Input
            label="Certification Title"
            value={currentCertification.title}
            onChange={(e) => updateCertification(0, "title", e.target.value)}
            placeholder="HIgh BNCC"
            className="w-full"
          />

          {/* Issuing Organization */}
          <div className="flex gap-[24px]">
            <Input
              label="Issuing Organization"
              value={currentCertification.issuingOrganization}
              onChange={(e) => updateCertification(0, "issuingOrganization", e.target.value)}
              placeholder="Dhaka University"
              className="w-[578px]"
            />
            <div className="w-[578px] opacity-0">
              {/* Spacer for layout */}
            </div>
          </div>

          {/* Certificate Issue */}
          <div className="flex gap-[24px]">
            <DatePicker
              label="Certificate Issue"
              value={currentCertification.issueDate}
              onChange={(e) => updateCertification(0, "issueDate", e.target.value)}
              placeholder="Issue Date"
              className="flex-1"
            />
            <DatePicker
              label=" "
              value={currentCertification.expiryDate}
              onChange={(e) => updateCertification(0, "expiryDate", e.target.value)}
              placeholder="Expiry Date (if applicable)"
              className="flex-1"
            />
          </div>

          {/* Divider */}
          <div className="w-full h-[2px] bg-[#e0e0e0]" />

          {/* Add Another Certification */}
          <button
            type="button"
            onClick={addCertification}
            className="flex items-center gap-[10px] text-[#28c76f] hover:text-[#24b263] transition-colors"
          >
            <div className="w-[24px] h-[24px] rounded-full bg-[#28c76f] flex items-center justify-center">
              <Plus className="w-[16px] h-[16px] text-white" />
            </div>
            <span className="text-[20px] font-medium">Add Another Certification</span>
          </button>
        </div>
      </div>
    </div>
  );
}
