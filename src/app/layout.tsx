import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Altum Capital",
  description: "Your partner in crypto investing",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}