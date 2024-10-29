import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // General Colors
        "color-zero": "#0F1C39",
        "color-one": "#419444", 
        "color-two": "#E4FFE2", 
        "color-three": "#FCFCFC", 
      
        
        // //Used in Signup Page
        // "color-eight": "#B1BDCA", //Inactive-class
        // "color-nine": "#E7EAF1" ,//Border-stroke
        // "color-ten": "#F8FAFD" ,//Input Field BG
        // "color-eleven": "#A16AE8",//light purple
        // "color-twelve": "#A3B1BF", //Light grey

        // //Used in Confirm-Otp Page
        // "color-thirteen": "#F3F3F3",
        // "color-fourteen": "#B6B6E5",
        
        // //Used in Pricing Page
        // "colour-fifteen": "#FCFAFF",
      },
    },
  },
  plugins: [],
};
export default config;
