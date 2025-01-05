import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VRNITSOLUTION",
  description:
    "Quick Tips for Designing Your Business UI with VRNITSOLUTION.Expert website UI for businesses, delivering mobile apps too. Reach your audience effectively. Boost engagement and success. Partner with us now",
  verification: {
    google: "oVz-3MP21mGKwAHEwdhdsQRuu-82sHU9N3rGMmjXTfk",
  },
  keywords: [
    "vrnitsolution.tech",
    "vrnitsolution",
    "vrnitsolution software development community",
    "Varad Nikharage vrnitsolution",
    "Android projects",
    "web based project",
  ],
  authors: [
    { name: "Varad Nikharage", url: "" },
    { name: "Nitin Asogekar", url: "" },
    { name: "Rushikesh Amberkar", url: "" },
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
