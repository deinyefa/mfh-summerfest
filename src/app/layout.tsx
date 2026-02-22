import type { Metadata } from "next"
import { Bebas_Neue, Fraunces, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
})

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Summer Fest 2026 — myFather's House",
  description: "Ottawa's biggest faith-filled summer celebration",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${fraunces.variable} ${plusJakartaSans.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
