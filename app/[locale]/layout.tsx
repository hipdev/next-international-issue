import RootProviders from 'components/root-providers'
import '../globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Simple boilerplate with Next.js + TailwindCSS + Shadcn + Bun + Jest + Testing Library',
  description:
    'Simple boilerplate with Next.js + TailwindCSS + Shadcn + Bun + Jest + Testing Library',
  themeColor: 'black',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html>
      <body className='bg-neutral-800'>
        <RootProviders params={params}>{children}</RootProviders>
      </body>
    </html>
  )
}
