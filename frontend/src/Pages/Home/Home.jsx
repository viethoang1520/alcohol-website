import React from 'react'
import Header from '../../Components/Header/Header'
import AlcoholCarousel from '../../Components/AlcoholCarousel/AlcoholCarousel'
import Banner from '../../Components/Banner/Banner'
import NavigateLine from '../../Components/NavigateLine/NavigateLine'
import AlcoholList from '../../Components/AlcoholList/AlcoholList'
import Footer from '../../Components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Banner/>
      <Header/>
      <NavigateLine/>
      <AlcoholCarousel />
      <AlcoholList />
      <Footer/>
    </div>
  )
}
