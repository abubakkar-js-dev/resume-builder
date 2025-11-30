"use client";
import ProgressStepper from "@/components/ProgressStepper";
import Button from "@/components/ui/Button";
import { STEPS } from "@/data/steps";
import { useAppDispatch } from "@/store/hooks";
import { setCurrentStep } from "@/store/slices/navigationSlice";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const idx = STEPS.findIndex(
      (s) => s.route === pathname || s.route === pathname.replace(/\/$/, "")
    );
    if (idx >= 0) {
      dispatch(setCurrentStep(idx + 1));
    }
  }, [pathname, dispatch]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. The Stepper Header */}
      <header className="pt-8">
        <ProgressStepper />
      </header>

      {/* 2. The Dynamic Route Content (Middle Part) */}
      <main className="grow w-full max-w-4xl mx-auto px-4 py-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. The Navigation Footer */}
      <footer className="py-6 border-t border-gray-100">
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="flex gap-6">
            <div className="w-full">
              <BackButton />
            </div>
            <div className="w-full">
              <NextButton />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BackButton() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const index = STEPS.findIndex((s) => s.route === pathname);
  const disabled = index <= 0;

  const goBack = () => {
    if (index > 0) {
      const to = STEPS[index - 1].route;
      router.push(to);
      dispatch(setCurrentStep(index));
    }
  };

  return (
    <Button
      className="w-full"
      variant="secondary"
      icon="left"
      onClick={goBack}
      disabled={disabled}
    >
      Back
    </Button>
  );
}

function NextButton() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const indexNext = STEPS.findIndex((s) => s.route === pathname);
  const disabled = indexNext === -1 || indexNext >= STEPS.length - 1;

  const goNext = () => {
    if (indexNext >= 0 && indexNext < STEPS.length - 1) {
      const to = STEPS[indexNext + 1].route;
      router.push(to);
      dispatch(setCurrentStep(indexNext + 2));
    }
  };

  return (
    <Button className="w-full" variant="primary" icon="right" onClick={goNext} disabled={disabled}>
      Next
    </Button>
  );
}
