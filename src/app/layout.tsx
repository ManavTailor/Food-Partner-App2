import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Footer from '@/components/Footer'
import SessionWrapper from '@/components/SessionWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Foodies-Home',
  description: 'Explore the best food partner app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className={inter.className}>
          <Header /> {children} <Footer />
        </body>
      </SessionWrapper>
    </html>
  )
}
