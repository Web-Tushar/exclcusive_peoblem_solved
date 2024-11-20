import React from 'react'
import Header from '../../Component/Root_Layout/Header/Header'
import Navber from '../../Component/Root_Layout/Navber/Navber'
import Flashsale from './flash_sale/Flashsale'
import Category from './Category/Category'
import BestSelling from './BestSeling/BestSelling'
import Banner from './banner/Banner'

const Home = () => {
  return (
    <div>
     <Header/>
     <Navber/>
     <Banner/>
     <Flashsale/>
     <Category/>
     <BestSelling/>
     

    </div>
  )
}

export default Home