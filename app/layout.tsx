import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: {
    default: 'Eddy Fitness Club | Where Ordinary Bodies Become Unstoppable',
    template: '%s | Eddy Fitness Club',
  },
  description:
    'Premier gym & fitness chain with 5 locations across Rishikesh and Dehradun. Certified Fitness & Nutrition Coaching, 24/7 access, customized diet plans, and personal training.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="dark scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className="bg-neutral-950 text-neutral-100 min-h-screen antialiased selection:bg-red-600 selection:text-white"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}