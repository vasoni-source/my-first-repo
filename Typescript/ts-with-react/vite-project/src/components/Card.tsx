import React from 'react'
import type { PropsWithChildren,ReactNode } from 'react'

interface CardProps extends PropsWithChildren{
    title: string;
    footer?: ReactNode;
}
export default function Card({ title, footer, children }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
      {footer && <div>{footer}</div>}
    </div>
  )
}
