import React from 'react'

const ServiceCard = ({ coverImg, serviceType, cardDecor }) => {
  return (
    <article className='flex-1/3 flex flex-col h-136.75 p-3 border-1 border-cardBorder'>
        <div className='w-full flex-1/2'
            style={{
                backgroundImage: `url(${coverImg})`,
                backgroundPosition: "50% 30%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        />
        <div className="service-content flex flex-col justify-around flex-1/2 bg-cardBg">
            <h4 className='font-vibes capitalize text-4xl'>
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
