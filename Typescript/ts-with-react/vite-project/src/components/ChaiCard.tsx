import React from 'react'
interface ChaiCardProps {
    name: string;
    price: number;
    isSpecial?: boolean;
}
export default function ChaiCard({name,price,isSpecial}: ChaiCardProps) {
  return (
    <div>
        <h2>
            {name} {isSpecial ? " (Special Offer)" : ""}
        </h2>
        <p>Price: ${price.toFixed(2)}</p>
    </div>
  )
}
