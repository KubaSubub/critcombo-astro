import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
// import DashboardLayout from "@/components/DashboardLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "CritCombo | Gaming Encyclopedia",
  description: "The ultimate gaming database and analysis tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-hud-bg text-text-main antialiased selection:bg-accent-primary selection:text-hud-bg`}>
        <main className="min-h-screen p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
