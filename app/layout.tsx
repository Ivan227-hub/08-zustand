import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

export const metadata = {
  title: 'NoteHub',
  description: 'Your personal note manager built with Next.js',
  openGraph: {
    title: 'NoteHub',
    description: 'Your personal note manager built with Next.js',
    url: 'https://your-app.vercel.app',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>{children}</body>
    </html>
  )
}
