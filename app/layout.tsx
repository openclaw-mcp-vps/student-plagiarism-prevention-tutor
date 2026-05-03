import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlagiarismGuard – Help Students Avoid Accidental Plagiarism",
  description: "Real-time plagiarism detection, citation suggestions, and paraphrasing tools for students and writing centers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0d8441a6-a8f3-4a7d-91e2-d45ca4a4729b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">{children}</body>
    </html>
  );
}
