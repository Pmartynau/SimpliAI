import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/components/provider/modal-provider'
import { ToasterProvider } from '@/components/provider/toaster-provider'

import { CrispProvider } from '@/components/provider/crisp-provider'
import { ThemeProvider } from '@/components/theme-provider'

import { UseClientProvider } from '@/components/provider/sidebar-open'
import BlackFridayBanner from '@/components/black-friday'
import HotjarScript from './(landing)/hotjar'
import { Analytics } from '@vercel/analytics/react';

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
          <Analytics/>
          {/* <HotjarScript/> */}
        </body>
      </ClerkProvider>
      <BlackFridayBanner/>
    </html>

  )
}
