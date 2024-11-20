import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'M. Aji Ramadhan & Melly Angreini',
  description: 'Undangan Pernikahan M. Aji Ramadhan dan Melly Angreini.',
  openGraph: {
    title: 'M. Aji Ramadhan & Melly Angreini',
    description: 'Undangan Pernikahan M. Aji Ramadhan dan Melly Angreini.',
    // url: process.env.HOST_URL,
    url: 'https://wedding-lamidi-dan-iba-lestari.vercel.app/',
    siteName: 'Undangan Pernikahan M. Aji Ramadhan dan Melly Angreini.',
    images: [
      {
        // url: `${process.env.HOST_URL}images/couple1.jpg`,
        url: `https://wedding-lamidi-dan-iba-lestari.vercel.app/images/couple-1.jpg`,
        width: 800,
        height: 600,
      },
      {
        // url: `${process.env.HOST_URL}images/couple1.jpg`,
        url: `https://wedding-lamidi-dan-iba-lestari.vercel.app/images/couple-1.jpg`,
        width: 1800,
        height: 1600,
        alt: 'Undangan Pernikahan M. Aji Ramadhan & Melly Angreini',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}