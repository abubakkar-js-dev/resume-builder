'use client';
import React from "react";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { PersonalInfo } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setPersonalInfo } from "@/store/slices/formSlice";

interface PersonalInformationProps {}

const COUNTRIES = [
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "United States", label: "United States" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
];

export default function PersonalInformation({}: PersonalInformationProps) {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.form.personalInfo);

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    dispatch(setPersonalInfo({ ...data, [field]: value }));
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-4">
      <div className="flex flex-col gap-[24px]">
        {/* Header */}
        <div className="flex flex-col gap-[16px] max-w-[904px]">
          <h1 className="text-[#333333] text-[48px] leading-[1.4] font-semibold">
            Tell Us About Yourself
          </h1>
          <p className="text-[#777777] text-[18px] leading-[1.6]">
            Fill in your personal details so we can tailor your resume perfectly to your career goals.
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-[32px]">
          {/* First Name & Last Name */}
          <div className="flex gap-[24px]">
            <Input
              label="First Name"
              value={data.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="Saifur"
              className="flex-1"
            />
            <Input
              label="Last Name"
              value={data.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              placeholder="Rahman"
              className="flex-1"
            />
          </div>

          {/* Phone Number & Email Address */}
          <div className="flex gap-[24px]">
            <Input
              label="Phone Number"
              value={data.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              placeholder="+880 1567808747"
              className="flex-1"
            />
            <Input
              label="Email Address"
              type="email"
              value={data.emailAddress}
              onChange={(e) => handleChange("emailAddress", e.target.value)}
              placeholder="ux.saifur.info@gmail.com"
              className="flex-1"
            />
          </div>

          {/* Country & Address */}
          <div className="flex gap-[24px]">
            <Select
              label="Country/Region"
              value={data.country}
              onChange={(e) => handleChange("country", e.target.value)}
              options={COUNTRIES}
              className="w-[327px]"
            />
            <Input
              label="Address"
              value={data.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="Section-06, Mirpur, Dhaka."
              className="flex-1"
            />
          </div>

          {/* City, State & ZIP Code */}
          <div className="flex gap-[24px]">
            <Input
              label="City"
              value={data.city}
              onChange={(e) => handleChange("city", e.target.value)}
              placeholder="Dhaka"
              className="flex-1"
            />
            <Input
              label="State"
              value={data.state}
              onChange={(e) => handleChange("state", e.target.value)}
              placeholder="Dhaka"
              className="flex-1"
            />
            <Input
              label="ZIP Code"
              value={data.zipCode}
              onChange={(e) => handleChange("zipCode", e.target.value)}
              placeholder="1216"
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
