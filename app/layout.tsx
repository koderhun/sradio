import {Metadata} from '@/Metadata'
import {Header} from '@/components'

import './globals.scss'

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
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

export default RootLayout
