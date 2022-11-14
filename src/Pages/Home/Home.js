import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Section from '../../Components/Section/Section'
import NFT from '../../Components/NFTs/NFT'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Section/>
        <NFT/>
        <Footer/>
        
    </div>
  )
}

export default Home