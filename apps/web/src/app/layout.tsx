import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'

import './global.css'

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'devstage',
  description: 'CodeCraft Summit 2025',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top text-gray-100 antialiased">
        <main className="w-full max-w-[1240px] mx-auto px-4 py-8 md:p-0">
          {children}
        </main>
      </body>
    </html>
  )
}
