import React from 'react'
import { Link } from 'react-router-dom'
import { services } from '../../../utils/ServicesArr'
import ServiceCard from '../../../components/ui/ServiceCard'
import ButtonMain from '../../../components/ui/ButtonMain'

const Services = () => {
  return (
    <section className="services">
        <div className="title-wrapper">
          <h4 className='award'>
            Services
          </h4>
          <h2>
            Photography Packages
          </h2>
        </div>
        <div className="service-card-container">
          {services.map((service) => (
            <Link className='w-full' to={'services'}>
              <ServiceCard
                key={service.slug}
                coverImg={service.coverImg}
                serviceType={service.serviceType}
                cardDecor={service.cardDecor}
              />
            </Link>
          ))}
        </div>
        <ButtonMain src={'services'} text={'New Details'}/>
    </section>
  )
}

export default Services
