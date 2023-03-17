import React from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
// import Contact from '../../components/Contact/Contact'
import Recommended from '../../components/Recommended/Recommended'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
const Home = () => {


  return (
    <div className='home'>
        <Slider/>
        <Recommended type="featured" />
        <CategoryCard className="cat-card"/>
    
        <Recommended type="sale" />
        
    </div>
  )
}

export default Home