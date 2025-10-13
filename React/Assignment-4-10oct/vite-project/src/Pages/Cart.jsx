import React, { useEffect, useState } from 'react'

export default function Cart({cartItems}) {
  console.log("product for cart",cartItems)
  return (
    <div>
      {
        cartItems.map((item)=>(
          <div className="cart" key={item.id}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
        ))
      }
    </div>
  )
}
