import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuildTrack — Construction Project Management System",
  description:
    "BuildTrack is a construction project management system: daily site reports, live progress tracking, material inventory, worker attendance and a premium client portal.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
