import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
  verification: {
    google: "voDwf9Zg6ZU9Yg3hEQrFagCsmtTu6q6aotV1Tp0c9SY",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}`}>{children}</body>
    </html>
  );
}
