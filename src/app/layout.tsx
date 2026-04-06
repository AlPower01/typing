import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import SiteNav from '@/components/layout/SiteNav'
import ScrollToTop from '@/components/ScrollToTop'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Typing.com — Learn to Type Free',
  description: 'Free typing lessons, games and tests. Trusted by 39 million+ students since 2005.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Nunito', sans-serif" }}>
        <ScrollToTop />
        <SiteNav />
        <main style={{ flex: 1 }}>{children}</main>
      </body>
    </html>
  )
}
