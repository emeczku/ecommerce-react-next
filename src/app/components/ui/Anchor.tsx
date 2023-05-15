import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'

const anchor = cva('button', {
  variants: {
    intent: {
      primary: [
        'inline-block px-4 py-1 ml-1 mr-1 font-medium leading-6 text-center text-gray-700 uppercase transition bg-transparent border-2 border-gray-700 rounded ripple hover:text-white hover:bg-black focus:outline-none text-sm py-1 px-2',
      ],
      secondary: [
        'inline-block px-4 py-1 ml-1 mr-1 font-medium leading-6 text-center text-white uppercase transition bg-black border-2 border-black rounded ripple hover:text-black hover:bg-white focus:outline-none text-sm py-1 px-2',
      ],
      danger: [
        'inline-block px-6 py-2 font-medium leading-6 text-center text-red-500 uppercase transition bg-transparent border-2 border-red-500 rounded ripple hover:bg-red-100 focus:outline-none text-sm py-1 px-2',
      ],
    },
  },
})

interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof anchor> {
  href: string
}

const Anchor: React.FC<AnchorProps> = ({ intent, name, href }) => (
  <Link className={anchor({ intent })} href={href}>
    {name}
  </Link>
)

export default Anchor
