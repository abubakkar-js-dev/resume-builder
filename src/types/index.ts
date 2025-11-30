export interface Step {
  id: number;
  label: string;
  subLabel: string;
  route: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface CareerSummary {
  jobTitle: string;
  summary: string;
}

export interface WorkExperience {
  id: string;
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: File | null;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institutionName: string;
  major: string;
  startDate: string;
  endDate: string;
  achievements: File | null;
}

export interface Certification {
  id: string;
  title: string;
  issuingOrganization: string;
  issueDate: string;
  expiryDate: string;
}

export interface ContactInfo {
  linkedIn: string;
  website: string;
  socialMedia: string;
  socialMediaUrl: string;
}

export interface FormData {
  personalInfo: PersonalInfo;
  careerSummary: CareerSummary;
  workExperience: WorkExperience[];
  education: Education[];
  certifications: Certification[];
  contactInfo: ContactInfo;
}
