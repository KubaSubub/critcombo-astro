import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import DashboardLayout from "@/components/DashboardLayout";
import { HUDProvider } from "@/lib/context/HUDContext";

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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-bg-primary text-text-primary antialiased selection:bg-accent-primary selection:text-white`}>
        <HUDProvider>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </HUDProvider>
      </body>
    </html>
  );
}
