import React from 'react'
import "./home.css"
import Header from './Header/Header'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'

function Home() {
  return (
    <div className='home-container'>
        <Header />
        <Profile />
        <Footer />



    </div>
  )
}

export default Home