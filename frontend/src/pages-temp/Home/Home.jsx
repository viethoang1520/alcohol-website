import React from 'react'
import Header from '../../components/Header/Header'
import AlcoholCarousel from '../../components/AlcoholCarousel/AlcoholCarousel'
import Banner from '../../components/Banner/Banner'
import NavigateLine from '../../components/NavigateLine/NavigateLine'
import AlcoholList from '../../components/AlcoholList/AlcoholList'
import Footer from '../../components/Footer/Footer'

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
