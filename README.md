# AI-Powered Resume Builder

A multi-step CV maker application built with Next.js, TypeScript, Redux, and AI integration using Google's Gemini model.

## 🔗 Links

- **GitHub Repository:** [https://github.com/abubakkar-js-dev/resume-builder](https://github.com/abubakkar-js-dev/resume-builder)
- **Live Demo:** [https://resume-builder-drab-five.vercel.app/](https://resume-builder-drab-five.vercel.app/)
- **Design Reference:** [Figma Design](https://www.figma.com/design/ojlxr9UDkKql9vc00cLQIF/Practices-CV-Making?node-id=0-1&p=f&t=cpd2nyPPpDYBJLj2-0)

> ✅ **AI Integration Verified:** Google Gemini API successfully tested and generating professional resume content.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm

### Installation & Setup

1. Clone and install dependencies:
```bash
git clone https://github.com/abubakkar-js-dev/resume-builder.git
cd resume-builder
npm install
```

2. Create `.env.local` file:
```env
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **State Management:** Redux Toolkit + Redux Persist
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **AI Integration:** AI-SDK with Google Gemini
- **PDF Generation:** html2canvas + jsPDF

---

## ✨ Key Features Implemented

### Core Requirements
✅ Multi-step form with 7 steps (Personal Info, Career Summary, Skills, Education, Contact, AI Generation, Review)  
✅ Redux Toolkit for state management with persistence  
✅ Smooth page and step animations using Framer Motion  
✅ AI-powered resume generation using Gemini model  
✅ Server Actions for backend logic  
✅ PDF download with single-page optimization  
✅ Responsive design matching Figma specifications  

### Additional Features
✅ Smart theming system - change colors instantly via CSS variables  
✅ Education/Certification toggle functionality  
✅ Reset & start over capability  
✅ Auto-save with Redux Persist  
✅ Progress tracking stepper  

---

## 🎨 Theme Customization

The entire color scheme can be changed in seconds by editing `src/app/globals.css`:

```css
@theme inline {
  --color-primary: #28c76f;      /* Main theme color */
  --color-secondary: #9a9a9a;
  --color-main-text: #333333;
  --color-subtitle-text: #777777;
}
```

---

## � Implementation Summary

### What Was Built

**Multi-Step Form System**
- 7-step resume creation flow with navigation
- Reusable form components (Input, DatePicker, FileUpload, Button)
- Progress stepper with active state indication

**State Management**
- Redux Toolkit with TypeScript integration
- Redux Persist for data persistence across sessions
- Separate slices for form data and navigation state

**AI Integration**
- Google Gemini integration via AI-SDK
- Server Action for secure API calls
- AI-generated professional resume summaries
- Progress tracking during generation
- **Verified Working:** Successfully tested with live API key

**PDF Export**
- Professional 2-column resume layout
- Single-page PDF with auto-scaling
- Download functionality with proper formatting
- Color compatibility fixes for PDF rendering

**Animations & UX**
- Framer Motion for smooth transitions
- Page navigation animations
- Step transition effects
- Homepage entrance animations

### Technical Decisions

- **Server Actions:** Used for AI integration to keep API keys secure
- **Redux Persist:** Ensures user data persists across browser sessions
- **CSS Variables:** Enables instant theme changes as required
- **Hex Colors in PDF:** Replaced Tailwind classes to fix html2canvas compatibility

### Challenges Solved

1. **PDF Color Rendering Issue**
   - Problem: Tailwind v4 uses `lab()` colors unsupported by html2canvas
   - Solution: Converted all colors to hex codes in resume preview component

2. **Single-Page PDF Requirement**
   - Problem: Resume content exceeded one A4 page
   - Solution: Implemented dynamic scaling algorithm to fit content

3. **State Persistence**
   - Problem: Complex nested form data with File objects
   - Solution: Custom Redux Persist configuration with serialization handling

---

## 📁 Project Structure

```
src/
├── app/
│   ├── resume/              # Multi-step form pages
│   ├── actions.ts           # Server Actions (AI integration)
│   └── globals.css          # Theme variables
├── components/              # Reusable UI components
├── store/
│   └── slices/             # Redux slices (form, navigation)
└── types/                  # TypeScript definitions
```

---


## 👨‍💻 Developer

**ABU BAKKAR SIDDIK**  
GitHub: [@abubakkar-js-dev](https://github.com/abubakkar-js-dev)

---

**Built with Next.js, TypeScript, Redux, and AI**
