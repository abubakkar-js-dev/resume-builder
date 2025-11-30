import { useAppSelector } from '@/store/hooks';
import { Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { forwardRef } from 'react';

const ResumePreview = forwardRef<HTMLDivElement>((props, ref) => {
  const formData = useAppSelector((state) => state.form);
  const { personalInfo, careerSummary, workExperience, education, certifications, contactInfo } = formData;

  // Aggregate skills from all work experiences if not explicitly set (or use a dedicated skills slice if we had one)
  // For now, we'll use the ones from work experience as per previous logic, but ideally this should be its own section.
  const allSkills = Array.from(new Set(workExperience.flatMap(exp => exp.skills || [])));

  return (
    <div ref={ref} className="bg-white w-[210mm] min-h-[297mm] mx-auto flex text-[#333]" style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}>
      {/* Left Column - 35% */}
      <div className="w-[35%] bg-white border-r border-[#e5e7eb] p-5 flex flex-col gap-5 pt-6">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto rounded-full bg-[#e5e7eb] overflow-hidden border-4 border-[#d4f4e2]">
            <img 
                src="https://avatar.iran.liara.run/public/boy" 
                alt="Profile" 
                className="w-full h-full object-cover"
            />
        </div>

        {/* Portfolio */}
        <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#333] border-b-2 border-transparent">Portfolio</h3>
            <div className="flex flex-col gap-2 text-xs text-[#28c76f] font-medium">
                {contactInfo.website && (
                    <a href={contactInfo.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
                        <Globe size={14} />
                        <span>Website/Portfolio</span>
                    </a>
                )}
                {contactInfo.linkedIn && (
                    <a href={contactInfo.linkedIn} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
                        <Linkedin size={14} />
                        <span>LinkedIn Profile</span>
                    </a>
                )}
                 {/* Mock data to match design if empty */}
                 {!contactInfo.website && !contactInfo.linkedIn && (
                    <>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <Globe size={14} />
                            <span>Dribbble.com/ux_saifur</span>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <Linkedin size={14} />
                            <span>Linkedin.com/ux_saifur</span>
                        </div>
                    </>
                 )}
            </div>
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#333]">Skills</h3>
            <ul className="flex flex-col gap-1 text-xs text-[#4b5563] list-disc list-inside marker:text-[#28c76f]">
                {allSkills.length > 0 ? allSkills.map(skill => (
                    <li key={skill}>{skill}</li>
                )) : (
                    <>
                        <li>UI/UX Design</li>
                        <li>Figma</li>
                        <li>Graphic Designer</li>
                        <li>Adobe XD</li>
                        <li>Adobe Illustrator</li>
                    </>
                )}
            </ul>
        </div>

        {/* Languages (Mock for now as it's not in form) */}
        <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#333]">Languages</h3>
            <ul className="flex flex-col gap-1 text-xs text-[#4b5563] list-disc list-inside marker:text-[#28c76f]">
                <li>Bangla</li>
                <li>English</li>
            </ul>
        </div>

        {/* Co-Curricular (Mock for now) */}
        <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#333]">Co-Curricular Activities</h3>
            <ul className="flex flex-col gap-1 text-xs text-[#4b5563] list-disc list-inside marker:text-[#28c76f]">
                <li>IEEE Member</li>
                <li>Travelling</li>
                <li>Cricket</li>
            </ul>
        </div>
      </div>

      {/* Right Column - 65% */}
      <div className="w-[65%] p-6 pt-6 flex flex-col gap-5">
        {/* Header Info */}
        <div>
            <h1 className="text-3xl font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                {personalInfo.firstName || "SAIFUR"} {personalInfo.lastName || "RAHMAN"}
            </h1>
            <p className="text-base text-[#6b7280] font-medium mb-4">{careerSummary.jobTitle || "UX/UI Designer"}</p>
            
            <div className="flex flex-col gap-1 text-xs text-[#6b7280]">
                <div className="flex items-center gap-3">
                    <Phone size={14} className="text-[#28c76f]" />
                    <span>{personalInfo.phoneNumber || "+880 1567808747"}</span>
                </div>
                <div className="flex items-center gap-3">
                    <Mail size={14} className="text-[#28c76f]" />
                    <span>{personalInfo.emailAddress || "ux.saifur.info@gmail.com"}</span>
                </div>
                <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-[#28c76f]" />
                    <span>
                        {personalInfo.address || "House-79/80, Road-8/1, Block-C"}, {personalInfo.city || "Mirpur"}, {personalInfo.country || "Dhaka, Bangladesh"}
                    </span>
                </div>
            </div>
        </div>

        {/* About Me */}
        <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#333]">About Me</h3>
            <p className="text-[10px] text-[#4b5563] leading-relaxed text-justify">
                {careerSummary.summary || "Hello! I'm a Professional UI/UX Designer & Graphics Designer with a keen eye for detail and a drive for creativity. My expertise extends to proficiency in UI/Ux Design, Landing Page, Mobile App, Dashboard Design."}
            </p>
        </div>

        {/* Education */}
        <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#333]">Education Qualification</h3>
            <div className="flex flex-col gap-3">
                {education.length > 0 ? education.map((edu) => (
                    <div key={edu.id}>
                        <h4 className="text-xs font-bold text-[#333]">{edu.degree}</h4>
                        <p className="text-xs text-[#4b5563]">{edu.institutionName}</p>
                        <p className="text-[10px] text-[#9ca3af] mt-0.5">{edu.startDate} - {edu.endDate}</p>
                    </div>
                )) : (
                    <div>
                        <h4 className="text-xs font-bold text-[#333]">B. Sc. in Electronics and Communication Engineering</h4>
                        <p className="text-xs text-[#4b5563]">Institute of Science Trade & Technology (ISTT)</p>
                        <p className="text-[10px] text-[#9ca3af] mt-0.5">2022 - Till Now</p>
                    </div>
                )}
            </div>
        </div>

        {/* Training / Certification */}
        <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#333]">Training / Certification</h3>
            <div className="flex flex-col gap-3">
                {certifications.length > 0 ? certifications.map((cert) => (
                    <div key={cert.id}>
                        <h4 className="text-xs font-bold text-[#333]">{cert.title}</h4>
                        <p className="text-xs text-[#4b5563]">{cert.issuingOrganization}</p>
                        <p className="text-[10px] text-[#9ca3af] mt-0.5">{cert.issueDate}</p>
                    </div>
                )) : (
                    <div>
                        <h4 className="text-xs font-bold text-[#333]">Certified UI/UX Design</h4>
                        <p className="text-xs text-[#4b5563]">bdCalling Academy</p>
                        <p className="text-[10px] text-[#9ca3af] mt-0.5">30/10/2023 - 24/02/2024</p>
                    </div>
                )}
            </div>
        </div>

        {/* Work Experience */}
        <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#333]">Work Experience</h3>
            <div className="flex flex-col gap-3">
                {workExperience.length > 0 ? workExperience.map((exp) => (
                    <div key={exp.id}>
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-xs font-bold text-[#333]">{exp.jobTitle}</h4>
                                <p className="text-xs font-semibold text-[#374151]">{exp.companyName}</p>
                            </div>
                            <span className="text-[10px] text-[#9ca3af]">{exp.startDate} - {exp.endDate}</span>
                        </div>
                        <p className="text-[10px] text-[#4b5563] mt-1 leading-relaxed">
                            {exp.description}
                        </p>
                    </div>
                )) : (
                    <div>
                         <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-xs font-bold text-[#333]">Jr. UX/UI Designer</h4>
                                <p className="text-xs font-semibold text-[#374151]">bdCalling IT Ltd.</p>
                            </div>
                            <span className="text-[10px] text-[#9ca3af]">01/06/2024 - Till Now</span>
                        </div>
                        <p className="text-[10px] text-[#4b5563] mt-1 leading-relaxed">
                            I am very happy to get the opportunity for UX/UI designer intern. I strive to bring creativity, diligence, and fresh perspectives to every project.
                        </p>
                    </div>
                )}
            </div>
        </div>

      </div>
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;
