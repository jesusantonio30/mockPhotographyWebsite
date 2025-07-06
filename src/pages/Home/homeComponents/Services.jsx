import React from 'react'
import ServiceCard from '../../../components/ui/ServiceCard'
import ButtonMain from '../../../components/ui/ButtonMain'

const Services = () => {
  return (
    <section className="services">
        <div className="title-wrapper">
          <h4>
            Services
          </h4>
          <h2>
            Photography Packages
          </h2>
        </div>
        <div className="service-card-container">

        </div>
        <ButtonMain src={'services'} text={'New Details'}/>
    </section>
  )
}

export default Services
