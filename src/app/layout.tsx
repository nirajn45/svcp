// layout.tsx
import "./globals.css"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { Metadata } from "next"
// import { Poppins } from "next/font/google"

// // ✅ Import font with options
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   display: "swap",
// })

export const metadata: Metadata = {
  title: "Swami Vivekanand College of Pharmacy",
  description:
    "Fostering Future Healthcare Professionals Through Excellence in Pharmacy Education",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
