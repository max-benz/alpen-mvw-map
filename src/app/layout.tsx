import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vacation Club Portfolio Map',
  description: 'Marriott & Hyatt Vacation Clubs - USA & International',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
