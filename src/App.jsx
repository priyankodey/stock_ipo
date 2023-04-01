import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Services from './Components/Services'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ThemeProvider } from 'styled-components'
import { Globalcss } from './Globalcss'
import Error from './Error'
import GoTop from './Components/GoTop'
import IndividualProduct from './Components/IndividualProduct'

const App = () => {

  const theme = {
    colors: {
      header: "#4150b5",
      heading: "#222",
      white: "#fff",
      text: "#232323",
      bg: "#fffefe",
      boxShadow: "0 0 0 0.1rem rgb(13 110 253 / 40%)"
    },
    media: {
      mobile: "767px",
      tab: "1023px",
    }
  };

  return (
    <>   
    <ThemeProvider theme={theme}>
      <Globalcss />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/IndividualProduct/:id' element={<IndividualProduct />} />
          <Route path='*' element={<Error/>} />        
        </Routes>
        <GoTop />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App