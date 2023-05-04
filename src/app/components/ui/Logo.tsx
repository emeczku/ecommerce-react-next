import { FC } from 'react'
import { Amatic_SC } from 'next/font/google'

const satisfy = Amatic_SC({ subsets: ['latin'], weight: '700' })

const Logo: FC = () => {
  return (
    <h2 id="logo" className={satisfy.className}>
      E-commerce
    </h2>
  )
}

export default Logo
