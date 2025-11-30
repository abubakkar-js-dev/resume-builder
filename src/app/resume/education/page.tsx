"use client"
import DatePicker from "@/components/DatePicker";
import FileUpload from "@/components/FileUpload";
import Input from "@/components/Input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCertifications, setEducation } from "@/store/slices/formSlice";
import { toggleCertifications } from "@/store/slices/navigationSlice";
import { Certification, Education } from "@/types";
import { Plus } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";


export default function EducationAndCertificationsStep() {
  usePageTitle("Education & Certifications | Resume Builder");
  const dispatch = useAppDispatch();
  const educationData = useAppSelector((state) => state.form.education);
  const certificationData = useAppSelector((state) => state.form.certifications);
  const showCertifications = useAppSelector((state) => state.navigation.showCertifications);
  
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
    dispatch(setEducation([...educationData, newEducation]));
  };

  const updateEducation = (index: number, field: keyof Education, value: any) => {
    const updated = [...educationData];
    updated[index] = { ...updated[index], [field]: value };
    dispatch(setEducation(updated));
  };

  const addCertification = () => {
    const newCertification: Certification = {
      id: Date.now().toString(),
      title: "",
      issuingOrganization: "",
      issueDate: "",
      expiryDate: "",
    };
    dispatch(setCertifications([...certificationData, newCertification]));
  };

  const updateCertification = (
    index: number,
    field: keyof Certification,
    value: any
  ) => {
    const updated = [...certificationData];
    updated[index] = { ...updated[index], [field]: value };
    dispatch(setCertifications(updated));
  };

  const handleToggle = () => {
    dispatch(toggleCertifications());
  };

  const currentEducation = educationData[0] || {
    id: "1",
    degree: "",
    institutionName: "",
    major: "",
    startDate: "",
    endDate: "",
    achievements: null,
  };

  const currentCertification = certificationData[0] || {
    id: "1",
    title: "",
    issuingOrganization: "",
    issueDate: "",
    expiryDate: "",
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-4">
      usePageTitle("Education | Resume Builder");
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-4 max-w-[904px]">
            <h1 className="text-main-text text-[48px] leading-[1.4] font-semibold">
              {showCertifications ? "Your Certifications" : "Your Educational Background"}
            </h1>
            <p className="text-subtitle-text text-[18px] leading-[1.6]">
              Provide your academic qualifications and any relevant certifications to strengthen your resume.
            </p>
          </div>
          <button
            type="button"
            onClick={handleToggle}
            className="bg-main-text px-6 py-[11px] rounded-md h-14 flex items-center gap-2 hover:bg-[#444444] transition-colors"
          >
            <span className="text-neutral-light text-[16px] font-medium">
              {showCertifications ? "Education" : "Certifications"}
            </span>
          </button>
        </div>

        {/* Form Fields - Education */}
        {!showCertifications && (
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
        )}

        {/* Form Fields - Certifications */}
        {showCertifications && (
          <div className="flex flex-col gap-8">
            {/* Certification Title */}
            <Input
              label="Certification Title"
              value={currentCertification.title}
              onChange={(e) => updateCertification(0, "title", e.target.value)}
              placeholder="High BNCC"
              className="w-full"
            />

            {/* Issuing Organization */}
            <div className="flex gap-6">
              <Input
                label="Issuing Organization"
                value={currentCertification.issuingOrganization}
                onChange={(e) =>
                  updateCertification(0, "issuingOrganization", e.target.value)
                }
                placeholder="Dhaka University"
                className="w-[578px]"
              />
              <div className="w-[578px] opacity-0">{/* Spacer for layout */}</div>
            </div>

            {/* Certificate Issue */}
            <div>
              <p className="text-main-text text-[20px] font-medium leading-[1.6] mb-1">
                Certificate Issue
              </p>
              <div className="flex gap-6">
                <DatePicker
                  label=" "
                  value={currentCertification.issueDate}
                  onChange={(e) =>
                    updateCertification(0, "issueDate", e.target.value)
                  }
                  placeholder="Issue Date"
                  className="flex-1"
                />
                <DatePicker
                  label=" "
                  value={currentCertification.expiryDate}
                  onChange={(e) =>
                    updateCertification(0, "expiryDate", e.target.value)
                  }
                  placeholder="Expiry Date (if applicable)"
                  className="flex-1"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 bg-[#e0e0e0]" />

            {/* Add Another Certification */}
            <button
              type="button"
              onClick={addCertification}
              className="flex items-center gap-2.5 text-primary hover:text-primary/80 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </div>
              <span className="text-[20px] font-medium">
                Add Another Certification
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
