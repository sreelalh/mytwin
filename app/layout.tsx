import type { Metadata } from "next";
import "./globals.css";
import { PROFILE } from "@/data/profile";

export const metadata: Metadata = {
  title: "Sreelal H | Technology Architect & Engineering Manager",
  description:
    `${PROFILE.yearsOfExperienceLabel} years architecting mission-critical platforms across Banking, Insurance, Healthcare, and Travel. Specializing in Solution Architecture, Enterprise Microfrontends, Mobile Ecosystems, and Agentic AI Systems.`,
  keywords: [
    "Sreelal H",
    "Technology Architect",
    "Engineering Manager",
    "Solution Architecture",
    "Agentic AI",
    "React Native",
    "Swift",
    "SwiftUI",
    "Guidewire Jutro",
    "Enterprise Mobile",
    "Ernst & Young",
    "Digital Twin"
  ],
  authors: [{ name: "Sreelal H" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#06080d] text-gray-100 min-h-screen selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
