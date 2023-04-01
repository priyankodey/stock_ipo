import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import Hero from './Hero'

const Home = () => {

  const {updateHome} = useGlobalContext();

  useEffect(() => {
    updateHome();
  }, [])
    
  return (
    <Hero />
  )
}

export default Home