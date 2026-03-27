import type { Metadata, Viewport } from 'next'
import { Inter, Sarabun } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const sarabun = Sarabun({ 
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sarabun',
})

export const metadata: Metadata = {
  title: 'KAIROTDD | Premium Car Showroom',
  description: 'โชว์รูมรถยนต์พรีเมียม - คัดสรรรถหรูคุณภาพจากทั่วโลก | Premium car showroom with curated luxury vehicles',
  generator: 'v0.app',
  keywords: ['โชว์รูมรถ', 'รถหรู', 'รถยนต์', 'car showroom', 'premium cars', 'luxury vehicles'],
  icons: {
    icon: [
      {
        url: '/car.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/car.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className={`${inter.variable} ${sarabun.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
