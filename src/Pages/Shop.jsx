import React from 'react'
import Hero from '../Components/HERO/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollection } from '../Components/NewCollections/NewCollections'
import { NewLetter } from '../Components/NewsLetter/NewLetter'



function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewLetter/>
       
    </div>
  )
}

export default Shop