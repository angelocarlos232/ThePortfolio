import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const OpenSansRegular = localFont({ src: './fonts/OpenSans-Regular.ttf' })

const MarkProRegular = localFont({ src: './fonts/Mark Pro/Mark Pro.ttf' })


export const metadata: Metadata = {
  title: "Angelo's Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={MarkProRegular.className}      
      >
        {children}
      </body>
    </html>
  );
}
