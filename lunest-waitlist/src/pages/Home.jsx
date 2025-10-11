import React from 'react'
import Header from "../components/Header";
import NewHero from "../components/NewHero";
import Features from "../components/Features";
import HostGuest from "../components/HostGuest";
import Whywaitlist from "../components/Whywaitlist";
import EarlyAccessCTA from "../components/EarlyAccessCTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
   <>
      <Header />
      <NewHero />
      <Features />
      <HostGuest />
      <Whywaitlist />
      <EarlyAccessCTA />
      <Footer />
    </>
  )
}

export default Home