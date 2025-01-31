/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        smokeWhite:'#ebf1f5',
        blck:"#070707",
        gry:'#9ba1a0',
      },
      backgroundImage:{
        grid1:"url('../assets/images/grid1.svg')",
        pattern2:"url('../assets/images/pattern-02.svg')",
        dashBg:"url('../assets/images/dash.png')",
        taskBg:"url('../assets/images/task.png')",
        pattern3:"url('../assets/images/pattern-06.svg')",
        pattern4:"url('../assets/images/pattern-09.svg')",
        pattern5:"url('../assets/images/pattern-10.svg')",
        about1:"url('../assets/images/about-1-left.svg')",
        about2:"url('../assets/images/about-1-right.svg')",
        about3:"url('../assets/images/about-2.svg')",
        about4:"url('../assets/images/about-3.svg')",
        about5:"url('../assets/images/about-4.svg')",
        about6:"url('../assets/images/about-5.svg')",
        about7:"url('../assets/images/about-7.svg')",
      }
    },
  },
  plugins: [],
};
