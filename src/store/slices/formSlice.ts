import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData, PersonalInfo, CareerSummary, WorkExperience, Education, Certification, ContactInfo } from '../../types';

const initialState: FormData = {
  personalInfo: {
    firstName: "Saifur",
    lastName: "Rahman",
    phoneNumber: "+880 1567808747",
    emailAddress: "ux.saifur.info@gmail.com",
    country: "Bangladesh",
    address: "Section-06, Mirpur, Dhaka.",
    city: "Dhaka",
    state: "Dhaka",
    zipCode: "1216",
  },
  careerSummary: {
    jobTitle: "UI/UX Designer",
    summary: "An experienced marketing professional with over 5 years of expertise in digital marketing, specializing in SEO, social media strategies, and content creation.",
  },
  workExperience: [
    {
      id: "1",
      jobTitle: "Mid-Level UI/UX Designer",
      companyName: "SM Technology (betopia Group)",
      startDate: "",
      endDate: "",
      description: "An experienced marketing professional with over 5 years of expertise in digital marketing, specializing in SEO, social media strategies, and content creation.",
      achievements: null,
      skills: ["UI Designer", "UX Designer", "Figma"],
    },
  ],
  education: [
    {
      id: "1",
      degree: "Bachelor's Degree",
      institutionName: "Dhaka University",
      major: "Electronic and Communication Engineering (ECE)",
      startDate: "",
      endDate: "",
      achievements: null,
    },
  ],
  certifications: [
    {
      id: "1",
      title: "HIgh BNCC",
      issuingOrganization: "Dhaka University",
      issueDate: "",
      expiryDate: "",
    },
  ],
  contactInfo: {
    linkedIn: "",
    website: "",
    socialMedia: "Facebook",
    socialMediaUrl: "",
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.personalInfo = action.payload;
    },
    setCareerSummary: (state, action: PayloadAction<CareerSummary>) => {
      state.careerSummary = action.payload;
    },
    setWorkExperience: (state, action: PayloadAction<WorkExperience[]>) => {
      state.workExperience = action.payload;
    },
    setEducation: (state, action: PayloadAction<Education[]>) => {
      state.education = action.payload;
    },
    setCertifications: (state, action: PayloadAction<Certification[]>) => {
      state.certifications = action.payload;
    },
    setContactInfo: (state, action: PayloadAction<ContactInfo>) => {
      state.contactInfo = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const {
  setPersonalInfo,
  setCareerSummary,
  setWorkExperience,
  setEducation,
  setCertifications,
  setContactInfo,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;