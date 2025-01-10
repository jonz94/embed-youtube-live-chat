import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata, Viewport } from 'next'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import './globals.css'

export const metadata: Metadata = {
  title: 'Embed YouTube live chat',
  description: 'Embed YouTube live chat',
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <NuqsAdapter>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  )
}
