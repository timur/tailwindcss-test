module.exports = {
  // Opt-in to TailwindCSS future changes
  future: {
  },

  // https://tailwindcss.com/docs/just-in-time-mode
  mode: 'jit',

  purge: {
    enabled: ["production", "staging"].includes(process.env.NODE_ENV),
    content: [
      './**/*.html.erb',
      './app/helpers/**/*.rb',
      './app/javascript/**/*.js',
    ],
  },

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
