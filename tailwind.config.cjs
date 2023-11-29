/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "pink-50": "#fdf2fa",
        "pink-700": "#c11574",
        ghostwhite: {
          "100": "#f8f9fc",
          "200": "#f9f5ff",
        },
        darkslateblue: "#363f72",
        slateblue: "#6941c6",
        slategray: "#667085",
        gray: {
          "100": "#1a1a1a",
          "200": "rgba(0, 0, 0, 0.34)",
        },
        lavenderblush: "#fff1f3",
        crimson: "#c01048",
        honeydew: "#ecfdf3",
        seagreen: "#027a48",
        aliceblue: {
          "100": "#f0f9ff",
          "200": "#eef4ff",
        },
        darkblue: "#3538cd",
        seashell: "#fff6ed",
        firebrick: "#c4320a",
        steelblue: "#026aa2",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "text-sm-medium": "Inter",
        merriweather: "Merriweather",
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        "5xl": "24px",
        lg: "18px",
        "3xl": "22px",
        "9xl": "28px",
        "51xl": "70px",
        xl: "20px",
        mini: "15px",
        "29xl": "48px",
        inherit: "inherit",
      },
      screens: {
        md: {
          max: "960px",
        },
        sm: {
          max: "420px",
        },
        mq700: {
          raw: "screen and (max-width: 700px)",
        },
        mq1152: {
          raw: "screen and (max-width: 1152px)",
        },
        mq590: {
          raw: "screen and (max-width: 590px)",
        },
      },
      boxShadow: {
        card: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
          "base-100": "#fbfbfb",
          primary: "#d3182d",
          "-btn-text-color": "white",
        },
      },
    ],
  },
};
