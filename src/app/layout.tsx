import './styles/globals.css'
import { ReactNode } from 'react'
import Provider from '@/app/utils/Provider'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  )
}
