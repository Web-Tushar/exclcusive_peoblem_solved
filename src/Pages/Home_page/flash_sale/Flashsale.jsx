// import React from 'react'
import React from 'react'
import Heading from '../../../Component/Common_Component/Heading'
import Timer from '../../../Component/Common_Component/Timer'
import ProductCard from '../../../Component/Common_Component/ProucrtCard'

const Flashsale = () => {
  return (
    <div className='container mt-[140px] mb-[60px]'>
    <div className='  gap-x-[100px] flex items-end'>
      <div >
        <Heading title={"Today’s"} description={"Flash Sales"} />
      </div>
      <div><Timer /></div>
    </div>
    <div>
      <ProductCard />
    </div>
  </div>
  )
}

export default Flashsale