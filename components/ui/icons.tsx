'use client'

import React from 'react'; // Ensure React is in scope when using JSX
import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="app/favicon.ico" // Adjust the path as necessary
      alt="Logo"
      className={cn('h-4 w-4', className)}
      {...props}
    />
  );
}

export { IconLogo };