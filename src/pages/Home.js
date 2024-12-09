import React from 'react'

import Carousel from '../pages/Carousel';
import Ourmodels from '../pages/Ourmodels';
import ServicesWeProvide from '../pages/ServicesWeProvide';
import BecomeOurModel from '../pages/BecomeOurModel';
import BestPhotographer from '../pages/BestPhotographer';
import LatestBlog from '../pages/LatestBlog';
import ServicesNewPage from './ServicesNewPage';

function Home() {
  return (
    <div>
      <Carousel></Carousel>
     <Ourmodels></Ourmodels>
     <ServicesWeProvide></ServicesWeProvide>
     <ServicesNewPage></ServicesNewPage>
     <BecomeOurModel></BecomeOurModel>
     <BestPhotographer></BestPhotographer>
     <LatestBlog></LatestBlog>

    </div>
  )
}

export default Home
