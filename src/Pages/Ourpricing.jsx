import React from 'react'
import Navbar from '../Components/Navbar'
import TestimonialCard from '../Components/Ex'
import PricingCard from '../Components/Pricing'
import Reviews from '../Components/Review'
import Footer from '../Components/Footer'

function Ourpricing() {
  return (
    <div>
      < Navbar />
      <div className='mt-10'>
      < PricingCard />
      </div>
      < Reviews />
      < Footer />
    </div>
  )
}

export default Ourpricing
