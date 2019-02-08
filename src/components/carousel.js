import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ServicesCarousel = props => {
  console.log(props)
  return (
    <div className="mx-auto w-full">
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
        <div>
          <img src="img/Slider-Home.jpg" />
          <div style={{ position: 'absolute', top: '10%', left: '65%' }}>
            <div className="caption">
              <i>finiteloop</i> is a cloud advisory, and technology solutions
              company.
              <br />
              <br />
              We work with Service Design, Frontned, Cloud, Blockchain,
              Salesforce and other technologies
            </div>
          </div>
        </div>
        <div>
          <img src="img/Slider-SRS2.jpg" />
          <div style={{ position: 'absolute', top: '10%', left: '65%' }}>
            <div className="caption">
              <i>finiteloop</i> is a cloud advisory, and technology solutions
              company.
              <br />
              <br />
              We work with Service Design, Frontned, Cloud, Blockchain,
              Salesforce and other technologies
            </div>
          </div>
        </div>
        <div>
          <img src="img/SliderMain-HHH2.jpg" />
          <div style={{ position: 'absolute', top: '10%', left: '65%' }}>
            <div className="caption">
              <i>finiteloop</i> is a cloud advisory, and technology solutions
              company.
              <br />
              <br />
              We work with Service Design, Frontned, Cloud, Blockchain,
              Salesforce and other technologies
            </div>
          </div>
        </div>
        <div>
          <img src="img/SliderMain-TDH1.jpg" />
          <div style={{ position: 'absolute', top: '10%', left: '65%' }}>
            <div className="caption">
              <i>finiteloop</i> is a cloud advisory, and technology solutions
              company.
              <br />
              <br />
              We work with Service Design, Frontned, Cloud, Blockchain,
              Salesforce and other technologies
            </div>
          </div>
        </div>
        <div>
          <img src="img/SliderMain-Youth.jpg" />
          <div style={{ position: 'absolute', top: '10%', left: '65%' }}>
            <div className="caption">
              <i>finiteloop</i> is a cloud advisory, and technology solutions
              company.
              <br />
              <br />
              We work with Service Design, Frontned, Cloud, Blockchain,
              Salesforce and other technologies
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

ServicesCarousel.propTypes = {}

export default ServicesCarousel
