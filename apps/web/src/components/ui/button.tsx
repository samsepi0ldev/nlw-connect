import { type VariantProps, cva } from 'class-variance-authority'
import type React from 'react'

const button = cva(
  'bg-gray-500 text-blue font-semibold flex items-center justify-between hover:bg-blue hover:text-gray-900 cursor-pointer transition-colors',
  {
    variants: {
      size: {
        default: 'w-full h-12 rounded-xl px-5',
        icon: 'size-8 flex items-center justify-center shrink-0 rounded-md',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof button> {}

export function Button({ className, size, ...props }: ButtonProps) {
  return <button className={button({ className, size })} {...props} />
}
