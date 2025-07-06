import React from 'react'

const ServiceCard = ({ coverImg, serviceType, cardDecor }) => {
  return (
    <article className='service-card-article'>
        <div className='w-full flex-1/2'
            style={{
                backgroundImage: `url(${coverImg})`,
                backgroundPosition: "50% 30%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        />
        <div className="service-card-content">
            <h4 className='card-header'>
            {serviceType}
            </h4>
            <img className='h-28.5' src={cardDecor} />
            <p className='hover:text-mushroom'>
                Learn More
            </p>
        </div>
    </article>
  )
}

export default ServiceCard
