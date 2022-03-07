module.exports = {
  content: ['./index.html'],
  darkMode:'class',
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.7s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      variants: {
        animation: ["motion-safe"]
    },
    backgroundImage: {
      'hero-pattern': "url('Assets/images/bg.png')",
      'liquid': "url('Assets/images/liquid.png')"
      
    }
    },
  },
  plugins: [],
}
