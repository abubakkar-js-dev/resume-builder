"use client";
import { Input } from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setPersonalInfo } from "@/store/slices/formSlice";
import { PersonalInfo } from "@/types";

const COUNTRIES = [
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "United States", label: "United States" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
];

export default function PersonalInfoPage() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.form.personalInfo);

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    dispatch(setPersonalInfo({ ...data, [field]: value }));
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-4">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-[904px]">
          <h1 className="text-main-text text-[48px] leading-[1.4] font-semibold">
            Tell Us About Yourself
          </h1>
          <p className="text-subtitle-text text-[18px] leading-[1.6]">
            Fill in your personal details so we can tailor your resume perfectly
            to your career goals.
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-8">
          {/* First Name & Last Name */}
          <div className="flex gap-6">
            <Input
              label="First Name"
              value={data.firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("firstName", e.target.value)
              }
              placeholder="Saifur"
              className="flex-1"
            />
            <Input
              label="Last Name"
              value={data.lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("lastName", e.target.value)
              }
              placeholder="Rahman"
              className="flex-1"
            />
          </div>

          {/* Phone Number & Email Address */}
          <div className="flex gap-6">
            <Input
              label="Phone Number"
              value={data.phoneNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("phoneNumber", e.target.value)
              }
              placeholder="+880 1567808747"
              className="flex-1"
            />
            <Input
              label="Email Address"
              type="email"
              value={data.emailAddress}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("emailAddress", e.target.value)
              }
              placeholder="ux.saifur.info@gmail.com"
              className="flex-1"
            />
          </div>

          {/* Country & Address */}
          <div className="flex gap-6">
            <Select
              label="Country/Region"
              value={data.country}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleChange("country", e.target.value)
              }
              options={COUNTRIES}
              className="w-[327px]"
            />
            <Input
              label="Address"
              value={data.address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("address", e.target.value)
              }
              placeholder="Section-06, Mirpur, Dhaka."
              className="flex-1"
            />
          </div>

          {/* City, State & ZIP Code */}
          <div className="flex gap-6">
            <Input
              label="City"
              value={data.city}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("city", e.target.value)
              }
              placeholder="Dhaka"
              className="flex-1"
            />
            <Input
              label="State"
              value={data.state}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("state", e.target.value)
              }
              placeholder="Dhaka"
              className="flex-1"
            />
            <Input
              label="ZIP Code"
              value={data.zipCode}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("zipCode", e.target.value)
              }
              placeholder="1216"
              className="w-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
