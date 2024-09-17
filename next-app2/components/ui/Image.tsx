import NextImage, { ImageProps as NextImageProps } from 'next/image'

interface ImageProps extends NextImageProps {
  className?: string
}

export function Image({ className, ...props }: ImageProps) {
  return (
    <NextImage
      className={`rounded-lg ${className || ''}`}
      {...props}
    />
  )
}