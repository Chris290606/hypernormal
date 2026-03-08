import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Hypernormal | Jak si zachovat suverenitu v éře umělé inteligence',
  description: 'Připravte se na budoucnost s knihou Hypernormal od Alexandra Bruny a Pavla Čejky. Jak si zachovat suverenitu v éře umělé inteligence.',
  keywords: ['Hypernormal', 'AI', 'umělá inteligence', 'kniha', 'Alexander Bruna', 'Pavel Čejka'],
  authors: [{ name: 'Alexander Bruna' }, { name: 'Pavel Čejka' }],
  openGraph: {
    title: 'Hypernormal | Jak si zachovat suverenitu v éře umělé inteligence',
    description: 'Připravte se na budoucnost s knihou Hypernormal od Alexandra Bruny a Pavla Čejky.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className="dark">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
