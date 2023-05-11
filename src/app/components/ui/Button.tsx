import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const button = cva('button', {
  variants: {
    intent: {
      primary: [
        'inline-block px-4 py-1 ml-1 mr-1 font-medium leading-6 text-center text-gray-700 uppercase transition bg-transparent border-2 border-gray-700 rounded ripple hover:text-white  hover:bg-black focus:outline-none',
      ],
      secondary: [
        'inline-block px-4 py-1 ml-1 mr-1 font-medium leading-6 text-center text-white uppercase transition bg-black border-2 border-black rounded ripple hover:text-black hover:bg-white focus:outline-none',
      ],
      danger: [
        'inline-block px-6 py-2 font-medium leading-6 text-center text-red-500 uppercase transition bg-transparent border-2 border-red-500 rounded ripple hover:bg-red-100 focus:outline-none',
      ],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
  },
})

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />
