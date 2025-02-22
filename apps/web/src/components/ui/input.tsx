import React from 'react'

import { cn } from '@/lib/utils'

interface InputRootProps extends React.ComponentProps<'div'> {
  error?: boolean
}

export const InputRoot = React.forwardRef<HTMLDivElement, InputRootProps>(
  ({ className, error = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-error={error}
        className={cn(
          'group w-full h-12 px-4 flex items-center gap-2 rounded-xl text-gray-400 bg-gray-800 ring ring-gray-600 focus-within:ring-gray-100 focus-within:text-gray-100 [&:not(:has(input:placeholder-shown))]:text-gray-100 invalid:ring-danger data-[error=true]:text-danger data-[error=true]:ring-danger data-[error=true]:[&:not(:has(input:placeholder-shown))]:text-danger',
          className
        )}
        {...props}
      />
    )
  }
)

interface InputFieldProps extends React.ComponentProps<'input'> {}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'flex-1 outline-none bg-transparent placeholder-gray-400 text-gray-100 group-data-[error=true]:placeholder-danger',
          className
        )}
        {...props}
      />
    )
  }
)
