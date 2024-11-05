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
        "color-four": "#24222F",
        "colour-five": "rgba(15, 28, 57, 0.8)",
        "color-six" : "#21428C",
        "color-unit": "rgba(63, 73, 97, 1)",
        "color-form" : "rgba(107, 115, 133, 1)",
        "light-grey" : "rgba(252, 252, 252, 1)",
       
        
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
      screens: {
        "xs": '375px',
        "2xs": '320px',
      },
      lineHeight: {
        "base": "30px",
      },
      fontSize: {
        "base": "1rem",
        "lg-base": "28px",
      },
      borderRadius: {
        'common': "25px",
      }
    },
  },
  plugins: [],
};
export default config;
