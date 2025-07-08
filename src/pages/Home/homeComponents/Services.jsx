import React from 'react'
import { Link } from 'react-router-dom'
import { services } from '../../../utils/ServicesArr'
import Filler from '../../../components/ui/Filler'
import ServiceCard from '../../../components/ui/ServiceCard'
import ButtonMain from '../../../components/ui/ButtonMain'
import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'

const Services = () => {

  const { container, child } = useOutletContext();

  return (
    <motion.section className="services"
      variants={container} 
        initial="unMount"
        animate="mount">
        <Filler className={"title-wrapper"} smText={"Services"} lgText={"Photography Packages"}/>
        <motion.div className="service-card-container">
          {services.map((service) => (
            <Link className='w-full' to={'services'}>
              <ServiceCard
                key={service.slug}
                coverImg={service.coverImg}
                serviceType={service.serviceType}
                cardDecor={service.cardDecor}
                childVariant={child}
              />
            </Link>
          ))}
        </motion.div>
        <ButtonMain src={'services'} text={'New Details'}/>
    </motion.section>
  )
}

export default Services
