import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/components/provider/modal-provider'
import { ToasterProvider } from '@/components/provider/toaster-provider'
import { CrispChat } from '@/components/crisp-chat'
import { CrispProvider } from '@/components/provider/crisp-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Head from 'next/head'
import { UseClientProvider } from '@/components/provider/sidebar-open'
import BlackFridayBanner from '@/components/black-friday'
// import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SimplyFi',
  description: 'Ai Platform',
  manifest: '/manifest.webmanifest'
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" suppressHydrationWarning>
      <BlackFridayBanner/>
      <ClerkProvider>
        <CrispProvider />
        <body className={inter.className}>
          <UseClientProvider>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>

              <ModalProvider />
              <ToasterProvider />
              {children}
            </ThemeProvider>
          </UseClientProvider>
          {/* <Analytics/> */}
        </body>
      </ClerkProvider>
    </html>

  )
}
