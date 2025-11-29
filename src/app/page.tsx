import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-between p-24 gap-6">
      <div>
        <Image src={'/banner.png'} width={578} height={499} alt="Resume builder banner"/>
      </div>
      <div>
        <h2>Create Your <span>AI-Powered Resume</span></h2>
        <h4>Let our AI technology help you build a professional resume tailored to your skills, experience, and career goals.</h4>
        <p>Follow these simple steps to create a standout resume that will get you noticed by top employers.</p>
        <button>Start Now</button>
      </div>
    </div>
  );
}
