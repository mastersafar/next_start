import "./globals.css";
import Header from "@/components/Navigator/header";

import {  Cairo } from 'next/font/google'
 
const roboto = Cairo({
  weight: ['500'],
  subsets: ['latin'],
   variable: '--font-cairo'
})

export const metadata = {
  title: "dummy website",
  description: "this is for isom ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" className={`${roboto.variable} `}>
      <body className="bg-slate-400 font-cairo">

        <Header/>
       

        <div className="m-8 bg-slate-100 p-4 rounded-lg shadow-lg">
          {children}

        </div>

      </body>
    </html>
  );
}
