export default {
  presets: [require("@enpage/style-system/tailwind-preset")],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "node_modules/@enpage/sdk/src/**/*.{js,jsx,ts,tsx}",
    "node_modules/@enpage/style-system/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
};