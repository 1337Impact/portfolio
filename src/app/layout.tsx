import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohammed Benkhattab',
  description: 'Mohammed Benkhattab personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth' suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={`${inter.className} bg-gray-100 dark:bg-gray-800`}>{children}</body>
    </html>
  )
}
