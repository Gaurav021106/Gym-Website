import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LocalBusinessSchema } from '@/components/LocalBusinessSchema'

export const metadata: Metadata = {
  metadataBase: new URL('https://eddyfitnessclub.com'),
  title: {
    default: 'Eddy Fitness Club | Where Ordinary Bodies Become Unstoppable',
    template: '%s | Eddy Fitness Club'
  },
  description:
    'Join Eddy Fitness Club across 5 branches in Rishikesh & Dehradun. Certified Fitness & Nutrition Coaching, 24/7 access, diet plans, and 1-on-1 personal training. Membership starting from ₹999/month.',
  keywords: [
    'Gym in Rishikesh',
    'Gym in Dehradun',
    'Eddy Fitness Club',
    'Personal Trainer Rishikesh',
    '24/7 Gym Rishikesh',
    'Gym in Jolly Grant',
    'Gym in Doiwala',
    'Fitness and Nutrition Coach Uttarakhand'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Eddy Fitness Club | 5 Branches in Rishikesh & Dehradun',
    description:
      'Where Ordinary Bodies Become Unstoppable. Certified Fitness & Nutrition Coaches, 24/7 access, and customized training.',
    url: 'https://eddyfitnessclub.com',
    siteName: 'Eddy Fitness Club',
    locale: 'en_IN',
    type: 'website',
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
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="bg-neutral-950 text-neutral-100 min-h-screen antialiased selection:bg-red-600 selection:text-white" suppressHydrationWarning>
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