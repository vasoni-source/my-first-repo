import React from 'react'
import type { Chai } from '../types';
import ChaiCard from './ChaiCard';
interface ChaiListProps {
    chais: Chai[];
}
export default function ChaiList({ chais }: ChaiListProps) {
  return (
    <div>
        {chais?.map(chai => (
         <ChaiCard key={chai.id} name={chai.name} price={chai.price} />
        ))}
    </div>
  )
}
