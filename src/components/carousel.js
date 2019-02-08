import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Content, { HTMLContent } from '../components/content'

const ServicesCarousel = ({ carouselData }) => {
  const PageContent = HTMLContent || Content
  return (
    <section name="services" className="mx-auto w-full">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        useKeyboardArrows={true}
        dynamicHeight={false}
        // axis={'vertical'}
        centerMode={false}
      >
        {carouselData.carouselList.map(({ item }) => (
          <div key={item.bgImage}>
            <img src={item.bgImage} />
            <div style={{ position: 'absolute', top: '10%', left: '65%' }}>
              <PageContent className="caption" content={item.imageText} />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

ServicesCarousel.propTypes = {
  carouselData: PropTypes.object.isRequired,
}

export default ServicesCarousel
