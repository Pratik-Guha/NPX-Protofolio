import React from 'react'
import { TestimonialCard } from '../components'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonial</h2>
        <section>
            <TestimonialCard name={"Aditya"} feedback={"Your Teaching sklls are so good."}/>
            <TestimonialCard name={"Somnath"} feedback={"Wow what a protofolio,doesn't expected this to be on github"}/>
            <TestimonialCard name={"Indro"} feedback={"Amazing this is very good for beginers"}/>
        </section>
    </div>
  )
}

export default Testimonial