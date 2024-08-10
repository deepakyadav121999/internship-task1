import React from 'react'
import Headar from './Headar'
import Content1 from './Content1'
import './style/HeadarContainer.css'
const HeadarContainer = () => {
  return (
    <div className='header_container'>
       <div className='headar_background'>
       <Headar/>
       <Content1/>
       </div>
       
    </div>
  )
}

export default HeadarContainer