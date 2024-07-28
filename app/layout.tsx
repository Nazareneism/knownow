import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { AI } from './action'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const title = 'Prosessr'
const description =
  'A fully featured AI-powered search engine with generative UI.'

  export const metadata: Metadata = {
    metadataBase: new URL('https://prosessr.ai'),
    title: 'Prosessr.ai',
    description: 'An AI powered search engine with generative UI.',
    openGraph: {
      title: 'Prosessr.ai',
      description: 'An AI powered search engine with generative UI.',
      images: [
        {
          url: 'https://imgur.com/a/AR9NRK1',
          width: 1200,
          height: 630,
          alt: 'Prosessr.ai'
        }
      ],
      url: 'https://prosessr.ai',
    },
    // ... other metadata
  }

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <AI>{children}</AI>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}