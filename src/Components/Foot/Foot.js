import React from 'react'
import './Foot.scss'
import Token from '../assets/Group 4040.png'
import MetaMask from '../assets/Group 59537.png'
import OpenSea from '../assets/Frame 4041.png'

const Foot = () => {
  return (
    <div className='foot'>
        <img src={Token} alt=""/>
        <img src={MetaMask} alt=""/>
        <img src={OpenSea} alt=""/>

    </div>
  )
}

export default Foot