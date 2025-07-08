import React from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ coverImg, serviceType, cardDecor, childVariant }) => {

    

  return (
    <motion.article className='service-card-article'
        variants={childVariant}>
        <div className='service-card-bg'
            style={{
                backgroundImage: `url(${coverImg})`,
                backgroundPosition: "50% 30%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        />
        <div className="service-card-content">
            <h4 className='service-card-header'>
            {serviceType}
            </h4>
            <img className='h-28.5' src={cardDecor} />
            <p className='service-card-text'>
                Learn More
            </p>
        </div>
    </motion.article>
  )
}

export default ServiceCard
