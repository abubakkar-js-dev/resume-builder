import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home - Resume Builder",
  description: "Create professional resumes with ease using our Resume Builder application.",
};

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-between  gap-6 h-full">
      {/* Left Side */}
      <div className="h-full w-1/2">
        <Image
          src={"/banner.png"}
          width={720}
          height={590}
          alt="Resume builder banner"
          className="w-full h-full object-contain"
        />
      </div>
      {/* Right Side */}
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-7xl xl:text-[80px] font-bold leading-tight mb-4">
          Create Your <span className="text-primary">AI-Powered Resume</span>
        </h1>
        <h4 className="font-medium text-main-text mb-8 lg:mb-[42px] text-lg md:text-xl lg:text-2xl">
          Let our AI technology help you build a professional resume tailored to
          your skills, experience, and career goals.
        </h4>
        <p className="text-subtitle-text text-base md:text-lg mb-10 lg:mb-12">
          Follow these simple steps to create a standout resume that will get
          you <br /> noticed by top employers.
        </p>
        <Link href="/resume/personal-info" className="px-17 py-4 bg-primary hover:bg-primary/80 hover:cursor-pointer text-base font-medium text-neutral-light rounded-[6]">
          Start Now
        </Link>
      </div>
    </div>
  );
}
