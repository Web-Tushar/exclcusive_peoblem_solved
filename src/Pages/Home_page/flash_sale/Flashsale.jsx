// import React from 'react'
import React from 'react'
import Slider from "react-slick";

import Heading from '../../../Component/Common_Component/Heading'
import Timer from '../../../Component/Common_Component/Timer'
import ProductCard from '../../../Component/Common_Component/ProucrtCard'

const Flashsale = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }; 
  
  return (
    <div className='container mt-[140px] mb-[60px]'>
      <div className='  gap-x-[100px] flex items-end'>
        <div >
          <Heading title={"Today’s"} description={"Flash Sales"} />
        </div>
        <div><Timer /></div>
      </div>
      <div className="slider-container">
      <Slider  {...settings}>
          {[... new Array(6)].map((_, index) => (
        <div >
          <ProductCard />
        </div>
          ))}
        
      
      </Slider>
    </div>
    </div>
  )
}

export default Flashsale