import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qosim Faruq Olamide | Backend Java Developer",
  description: "Backend Java developer in Lagos. Explore Spring Boot projects in payments, security, delivery verification and API monitoring. Available for remote, hybrid and onsite roles.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
