import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  currentStep: number;
  showCertifications: boolean;
  isGenerating: boolean;
  generationProgress: number;
}

const initialState: NavigationState = {
  currentStep: 1,
  showCertifications: false,
  isGenerating: false,
  generationProgress: 0,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    nextStep: (state) => {
      if (state.currentStep < 7) {
        state.currentStep += 1;
      }
    },
    previousStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
    toggleCertifications: (state) => {
      state.showCertifications = !state.showCertifications;
    },
    setShowCertifications: (state, action: PayloadAction<boolean>) => {
      state.showCertifications = action.payload;
    },
    setIsGenerating: (state, action: PayloadAction<boolean>) => {
      state.isGenerating = action.payload;
    },
    setGenerationProgress: (state, action: PayloadAction<number>) => {
      state.generationProgress = action.payload;
    },
  },
});

export const {
  setCurrentStep,
  nextStep,
  previousStep,
  toggleCertifications,
  setShowCertifications,
  setIsGenerating,
  setGenerationProgress,
} = navigationSlice.actions;

export default navigationSlice.reducer;