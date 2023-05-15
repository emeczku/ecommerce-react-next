import { FC } from 'react'
import Logo from '@/components/ui/Logo'
import Link from 'next/link'
import navbarLinks from '@/data/navbarLinks'
import Search from '@/components/Search'
import Anchor from '@/components/ui/Anchor'

const Navbar: FC = () => {
  return (
    <nav>
      <div className="flex items-center ml-10 mr-10 pt-8 pb-8">
        <div className="flex w-1/2 justify-left">
          <Logo />
          <Search />
        </div>
        <div className="flex justify-center w-1/4">
          <div className="ml-10 flex items-baseline space-x-4">
            {navbarLinks.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className="text-black-300 px-3 py-2 text-sm font-medium">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-1/4 justify-end">
          <Anchor intent="primary" href="login" name="Login" />
          <Anchor intent="secondary" href="signup" name="Sign up" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
