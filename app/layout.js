import localFont from "next/font/local"
import {Rubik} from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Progress from "@/components/Progress"
import "@/styles/global.scss";

const fontDisplay = localFont({
  src: "./fonts/FeijoaWeb-Display.woff",
  variable: "--font-display",
  weight: "400"
})

const fontBase = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-base"
})

export const metadata = {
  title: "Il mio villaggio",
  description: ""
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontDisplay.variable} ${fontBase.variable}`}>
        <Progress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
