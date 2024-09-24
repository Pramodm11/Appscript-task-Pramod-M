import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mettā Muse - Discover Our Products',
  description: 'Explore our curated collection of high-quality products at Mettā Muse. Find unique items that match your style and needs.',
  keywords: 'Mettā Muse, e-commerce, fashion, accessories, home decor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}