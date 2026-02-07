import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hud: {
          bg: "var(--hud-bg)",
          panel: "var(--hud-panel)",
          border: "var(--hud-border)",
          highlight: "var(--hud-border-highlight)",
          card: "var(--card-bg)",
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          glow: "var(--accent-glow)",
        },
        text: {
          main: "var(--text-main)",
          muted: "var(--text-muted)",
          highlight: "var(--text-highlight)",
        },
        status: {
          online: "var(--status-online)",
          offline: "var(--status-offline)",
          busy: "var(--status-busy)",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
