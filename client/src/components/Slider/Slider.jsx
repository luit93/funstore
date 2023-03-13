import React, { useState } from 'react'
import "./Slider.scss"
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
const Slider = () => {
    const [current,setCurrent]= useState(0)

  const slides = [
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1614082980086-62f20c181a57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1597840900616-664e930c29df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    "https://images.unsplash.com/photo-1587796914694-4b8ef35b6ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"

  ]

  const prevSlide=()=>{
    setCurrent(current === 0 ? 3 : (prev) => prev - 1)
  }
  const nextSlide=()=>{
    setCurrent(current === 3 ? 0 : (prev) => prev + 1)

  }
//   style={{transform: `translateX(-${current * 100}vw)`}}
  return (
    <div className='slider'>
        <div className="container"style={{transform: `translateX(-${current * 100}vw)`}} >
            <img src={slides[0]} alt=''/>
            <img src={slides[1]} alt=''/>
            <img src={slides[2]} alt=''/>
            <img src={slides[3]} alt=''/>
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider