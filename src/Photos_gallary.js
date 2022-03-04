import React from 'react'
import Card from './Card';
import { useState } from 'react';

let Photos_gallary ;
export default Photos_gallary = () => {
  return (

    <>
    {
      Card.map(CardItem=>{
        return(
           <>
           
         <div className='cards'>
         <div className='card'>
          <h1>{CardItem.name}</h1>
            <div>
              {CardItem.description}
            </div>
            <div className='cardEnd'><p>{CardItem.price}</p>
            <button>Buy Now</button></div>
          </div>
        
         </div>
           </>
          )
      })
    }
    
    </>
  )
}
