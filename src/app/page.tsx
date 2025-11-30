"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-between gap-6 h-full">
      {/* Left Side  */}
      <motion.div 
        className="h-full w-1/2"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={"/banner.png"}
          width={720}
          height={590}
          alt="Resume builder banner"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Right Side */}
      <div>
        <motion.h1 
          className="text-2xl md:text-3xl lg:text-7xl xl:text-[80px] font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Create Your <span className="text-primary">AI-Powered Resume</span>
        </motion.h1>

        <motion.h4 
          className="font-medium text-main-text mb-8 lg:mb-[42px] text-lg md:text-xl lg:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Let our AI technology help you build a professional resume tailored to
          your skills, experience, and career goals.
        </motion.h4>

        <motion.p 
          className="text-subtitle-text text-base md:text-lg mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Follow these simple steps to create a standout resume that will get
          you <br /> noticed by top employers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link 
            href="/resume/personal-info" 
            className="inline-block px-17 py-4 bg-primary hover:bg-primary/80 hover:cursor-pointer text-base font-medium text-neutral-light rounded-[6] transition-all hover:scale-105"
          >
            Start Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

