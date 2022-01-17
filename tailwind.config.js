module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:(theme) =>({
        "about-pc":"url('/bg-about.png')",
        "skill-pc":"url('/bg-skills.png')",
        "future-pc":"url('/bg-future.png')",
        
      }),
      colors: {
        "primary-base":"#06bbbc",
        "primary-dark":"#008c8d",
        "bg-green":"#6bc2c3",
        "black-base":"#384359",
        "black-bg":"#262c3a",
        "progress-base":"#c5eaea",
        "progress-green":"#2bb9ba"
      },
    },
  },
  plugins: [],
}
