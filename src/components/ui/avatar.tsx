'use client';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';

import { cn } from '@/lib/utils';

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
));
AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

type AvatarProps = {
  imgUrl: string;
  userName: string;
  fallbackText: string;
};

const Avatar = ({ imgUrl, userName, fallbackText }: AvatarProps) => (
  <div className='relative inline-block'>
    <div className='absolute rounded-full bg-gradient-to-r -inset-0.5 from-[#78d993] to-[#e087ff]' />
    <AvatarRoot>
      <AvatarImage
        alt={`Avatar for ${userName}`}
        src={imgUrl}
        className='bg-transparent border border-purple-800 rounded-full'
      />
      <AvatarFallback className='bg-transparent border border-purple-800 rounded-full'>
        {fallbackText}
      </AvatarFallback>
    </AvatarRoot>
  </div>
);
Avatar.displayName = 'Avatar';

export { Avatar };
