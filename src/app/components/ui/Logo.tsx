import { FC } from 'react'
import logo from '@/assets/logo.png'
import Image from 'next/image'

const Logo: FC = () => {
  return <Image className="logo" src={logo} alt="Logo" />
}

export default Logo
