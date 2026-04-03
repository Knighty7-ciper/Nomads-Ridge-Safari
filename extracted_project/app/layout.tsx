import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Outfit } from "next/font/google"
import Header from "@/components/layout/header"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "600"],
})

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["200", "300", "400", "500"],
})

export const metadata: Metadata = {
  title: "Nomads Ridge Safaris - Beyond Destinations, Into the Wild",
  description:
    "Experience authentic Kenya safari adventures with Nomads Ridge Safaris. Explore Maasai Mara, Amboseli, and pristine wilderness destinations.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${outfit.variable} antialiased`}>
      <body className="font-sans bg-dusk text-dust">
        <Header />
        {children}
      </body>
    </html>
  )
}
