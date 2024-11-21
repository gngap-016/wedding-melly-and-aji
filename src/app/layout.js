import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Melly & Aji',
  description: 'Undangan Pernikahan Melly Angreini dan M. Aji Ramadhan.',
  openGraph: {
    title: 'Melly & Aji',
    description: 'Undangan Pernikahan Melly Angreini dan M. Aji Ramadhan.',
    // url: process.env.HOST_URL,
    url: 'https://wedding-melly-and-aji.vercel.app/',
    siteName: 'Undangan Pernikahan Melly Angreini dan M. Aji Ramadhan.',
    images: [
      {
        // url: `${process.env.HOST_URL}images/couple1.jpg`,
        url: `https://wedding-melly-and-aji.vercel.app/images/couple-1.jpg`,
        width: 800,
        height: 600,
      },
      {
        // url: `${process.env.HOST_URL}images/couple1.jpg`,
        url: `https://wedding-melly-and-aji.vercel.app/images/couple-1.jpg`,
        width: 1800,
        height: 1600,
        alt: 'Undangan Pernikahan Melly Angreini dan M. Aji Ramadhan',
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
