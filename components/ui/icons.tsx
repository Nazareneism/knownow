'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <rect x="118" y="28" width="20" height="200" fill="black"></rect> <!-- Vertical part of the cross -->
      <rect x="58" y="88" width="140" height="20" fill="black"></rect> <!-- Horizontal part of the cross -->
    </svg>
  )
}

export { IconLogo }