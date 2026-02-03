"use client"; // 🔥 Важно для QueryClientProvider

import './globals.css'
import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'Your personal note manager built with Next.js',
  openGraph: {
    title: 'NoteHub',
    description: 'Your personal note manager built with Next.js',
    url: 'https://your-app.vercel.app',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Создаём QueryClient один раз
  const [queryClient] = useState(() => new QueryClient())

  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
