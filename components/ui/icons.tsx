'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('h-4 w-4 relative', className)} {...props}>
      <Image
        src="/app/favicon.ico"
        alt="Logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
  )
}

export { IconLogo }