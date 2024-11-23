import {Metadata} from '@/Metadata'
import './globals.scss'
import {Header} from '@/components'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <Metadata />
      </head>
      <body>
        <div className="wrapper">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
