import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Lamidi & Iba Lestari',
  description: 'Undangan Pernikahan Lamidi, S.Pd. dan Iba Lestari, A.Md.Keb.',
  openGraph: {
    title: 'Lamidi & Iba Lestari',
    description: 'Undangan Pernikahan Lamidi, S.Pd. dan Iba Lestari, A.Md.Keb.',
    // url: process.env.HOST_URL,
    url: 'https://wedding-lamidi-dan-iba-lestari.vercel.app/',
    siteName: 'Undangan Pernikahan Lamidi, S.Pd. dan Iba Lestari, A.Md.Keb.',
    images: [
      {
        // url: `${process.env.HOST_URL}images/couple1.jpg`,
        url: `https://wedding-lamidi-dan-iba-lestari.vercel.app/images/couple1.jpg`,
        width: 800,
        height: 600,
      },
      {
        // url: `${process.env.HOST_URL}images/couple1.jpg`,
        url: `https://wedding-lamidi-dan-iba-lestari.vercel.app/images/couple1.jpg`,
        width: 1800,
        height: 1600,
        alt: 'Undangan Pernikahan Lamidi & Iba Lestari',
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
