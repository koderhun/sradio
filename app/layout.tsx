import './globals.scss'

import {Header} from '@/components'
import {Metadata} from '@/Metadata'

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
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  )
}
